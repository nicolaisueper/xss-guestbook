const express = require("express");

const api = express.Router();

let entryStore = [
  {
    author: "Admin",
    text: "Welcome to my guest book! I'm happy to read your comments."
  }
];

api.get("/", (request, response) => {
  return response.status(200).send(entryStore.map((e, index) => ({...e, id: index})));
});

api.get("/:id", (request, response) => {
  const id = Number(request.params.id);
  const entry = entryStore[id];
  if (!entry) return response.sendStatus(404);
  return response.status(200).send({...entry, id});
});

api.post("/", (request, response) => {
  const {text, author} = request.body;
  const date = Date.now();

  if (!(text && author)) {
    return response.sendStatus(403);
  }
  const index = entryStore.push({text, author, date});
  return response.status(200).send({id: index, text, author, date});
});

api.delete("/:id", (request, response) => {
  const id = Number(request.params.id);
  if (!entryStore[id]) {
    return response.status(400);
  }
  entryStore = entryStore.filter((_, index) => index !== id);
  return response.sendStatus(200);
});

module.exports = api;
