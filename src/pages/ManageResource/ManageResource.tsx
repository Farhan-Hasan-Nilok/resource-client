import React from 'react';
import { addResource } from '../../utils/api';
import Alert from '../../components/Alert/Alert';
import Swal from 'sweetalert2';

const ManageResource = () => {

  const handleSubmit = (event) => {
    event.preventDefault()
    const topic = event.target.topic.value;
    const link = event.target.link.value;
    const description = event.target.description.value;

    const resource = {topic, link, description};
    addResource(resource)
    .then(data => {
      if(data) {
        return Swal.fire("New Resource created successful");
      }
    } )
    .catch(err => Swal.fire("Something wrong happend"))
    console.log(resource)
  }
  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold">Add Resources</h1>
      </div>
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Topic Name</span>
            </label>
            <input type="text" className="input input-bordered" required name='topic'/>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Link</span>
            </label>
            <input type="text" className="input input-bordered" required name='link'/>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea className="textarea textarea-bordered" name='description'></textarea>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
};

export default ManageResource;