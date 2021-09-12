import React from "react";
import PropTypes from "prop-types";
import { Label, Message } from "./Filter.styles";

const Filter = ({ change, filter, contacts }) => {
  return contacts.length !== 0 ? (
    <Label>
      Find contacts by Name
      <input type="text" name="Find contact" value={filter} onChange={change} />
    </Label>
  ) : (
    <Message>Your Phonebook don`t have contacts</Message>
  );
};

Filter.propTypes = {
  change: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  contacts: PropTypes.array.isRequired,
};

export default Filter;
