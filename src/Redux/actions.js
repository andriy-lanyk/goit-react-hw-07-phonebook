import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const addContact = createAction("addContact", ({ name, number }) => {
  return {
    payload: {
      name,
      number,
      id: uuidv4(),
    },
  };
});

const deleteContact = createAction("deleteContact");
const filterContacts = createAction("filterContacts");

export { addContact, deleteContact, filterContacts };
