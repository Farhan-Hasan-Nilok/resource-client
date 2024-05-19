import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import UpdateModal from "../UpdateModal/UpdateModal";
type ResourceType = {
  id: number,
  for: string,
  description: string,
  link: string
}
const ResourceCard = ({resource}) => {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <UpdateModal id={resource.id}/>
        <div className="card-body">
          <h2 className="card-title">{resource?.topic}</h2>
          <p>{resource?.description}</p>
          <Link to={resource?.link}className="text-primary underline flex items-center gap-4" target="_blank">
            <span>Visit Link</span>
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;
