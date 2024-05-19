import { json } from "stream/consumers";

export const getAllResources = async () => {
  const response = await fetch('http://localhost:3000/api/v1/resources');
  const data = response.json();
  return data
}

export const filteredResources = async (category:string) => {
  const response = await fetch(`http://localhost:3000/api/v1/resources/category?category=${category}`);
  const data = response.json();
  return data
}

// create resource

export const addResource = async (resource) => {
  const response = await fetch(`http://localhost:3000/api/v1/create-resources`, {
    method: 'POST',
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(resource)
  });
  const data = response.json();
  return data
}


export const editResource = async (id, editedData) => {
  const response = await fetch(`http://localhost:3000/api/v1/edit-resources/${id}`, {
    method: 'PATCH',
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(editedData)
  });
  const data = response.json();
  return data
}