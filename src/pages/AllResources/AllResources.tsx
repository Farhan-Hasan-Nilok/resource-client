import React, { useEffect, useState } from "react";
import { filteredResources, getAllResources } from "../../utils/api";
import ResourceCard from "../../components/ResourceCard/ResourceCard";

const AllResources = () => {
  const [resources, setResources] = useState([]);
  const [cateogry, setCategory] = useState([]);
  const [tabs, setTabs] = useState(0);

const getTopicNames = resources.map(resource => resource.topic);
const uniqueName = new Set(getTopicNames);
const topicName = [...uniqueName]
  const handleTabIndex = (index:number, category: string) => {
    setTabs(index);
    filteredResources(category || resources[0].topic)
    .then(data => setCategory(data))

  };
  useEffect(() => {
    getAllResources()
      .then((data) => setResources(data))
      .catch((err) => console.log(err));
  });
  return (
    <div>
      <div role="tablist" className="tabs tabs-boxed my-5">
        {topicName &&
          Array.isArray(topicName) &&
          topicName.map((category, index) => (
            <a
              onClick={() => handleTabIndex(index, category)}
              role="tab"
              key={index}
              className={`tab ${
                tabs === index && "tab-active"
              } text-base font-medium`}
            >
              {category}
            </a>
          ))}
      </div>

      <div className="flex flex-wrap gap-8 py-6">
        {cateogry &&
          Array.isArray(cateogry) &&
          cateogry.map((resource) => <ResourceCard key={resource?.id} resource={resource} />)}
      </div>
    </div>
  );
};

export default AllResources;
