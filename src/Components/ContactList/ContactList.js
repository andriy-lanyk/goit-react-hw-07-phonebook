import React from "react";
import PropTypes from "prop-types";
import { Btn, ItemText, Item } from "./ContactListStyles";

const ContactList = ({ contacts, visibleContacts, deleteElement }) => {
  return (
    contacts && (
      <ul>
        {visibleContacts.map(({ id, name, number }, i) => (
          <Item key={id}>
            <ItemText>
              {`${i + 1})    `}
              {name}: {number}
            </ItemText>
            <Btn type="button" onClick={() => deleteElement(id)}>
              Delete
            </Btn>
          </Item>
        ))}
      </ul>
    )
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  visibleContacts: PropTypes.array.isRequired,
  deleteElement: PropTypes.func.isRequired,
};

export default ContactList;
