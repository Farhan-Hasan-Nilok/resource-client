import React from "react";
import { TbEdit } from "react-icons/tb";
import { editResource } from "../../utils/api";
import Swal from "sweetalert2";
const UpdateModal = ({ id }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const topic = event.target.topic.value;
    const link = event.target.link.value;
    const description = event.target.description.value;

    const resource = { topic, link, description };
    editResource(id, resource)
      .then((data) => {
        if (data) {
          return Swal.fire("Resource edited successful");
        }
      })
      .catch((err) => Swal.fire("Something wrong happend"));
    console.log(resource);
  };
  return (
    <div>
      <TbEdit
        size={25}
        className="cursor-pointer absolute right-5"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      ></TbEdit>
      <dialog id="my_modal_1" className="modal">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 modal-box">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Topic Name</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                required
                name="topic"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Link</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                required
                name="link"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                className="textarea textarea-bordered"
                name="description"
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Submit</button>
            </div>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default UpdateModal;
