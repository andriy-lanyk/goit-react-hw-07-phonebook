import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../Redux/actions";

import ContactForm from "../ContactForm";
import ContactList from "../ContactList";
import Filter from "../Filter";
import { Container } from "./App.styles";

function App() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      case "Find contact":
        dispatch(actions.filterContacts(value));
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (contacts.find((contact) => contact.name === name)) {
      alert(`${name} is already in contacts`);
      reset();
      return;
    }

    dispatch(actions.addContact({ name, number }));
    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  const handleDeleteContact = (contactId) => {
    dispatch(actions.deleteContact(contactId));
  };

  const handleFilter = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm
        submit={handleSubmit}
        change={handleChange}
        name={name}
        number={number}
      />
      <h2>Contacts</h2>
      <Filter change={handleChange} filter={filter} contacts={contacts} />
      <ContactList
        contacts={contacts}
        visibleContacts={handleFilter()}
        deleteElement={handleDeleteContact}
      />
    </Container>
  );
}

export default App;
