"use strict";
const sendData = (route, item) => {
  if (!item) return;
  return fetch(`${route}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
};

const fetchData = (route, callback) => {
  return fetch(`${route}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((items) => callback(items));
};

const deleteData = (route, id) => {
  return fetch(`${route}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: id }),
  });
};

const updateData = (route, id, item) => {
  return fetch(`${route}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: id, item: item }),
  });
};
