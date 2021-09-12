import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { addContact, deleteContact, filterContacts } from "./actions";

const items = createReducer([], {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) =>
    state.filter((elem) => elem.id !== payload),
});

const filter = createReducer("", {
  [filterContacts]: (state, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
