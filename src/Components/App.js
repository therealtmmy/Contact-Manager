import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    const id = Math.floor(Math.random() * 10000) + 1;
    const newContacts = { id, ...contact };
    setContacts([...contacts, newContacts]);
  };

  useEffect(() => {
    const contact = JSON.parse(localStorage.getItem("contacts"));
    if (contact) {
      setContacts(contact);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const deleteContact = (id) => {
    setContacts(
      contacts.filter((contact) => {
        return contact.id !== id;
      })
    );
  };

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={deleteContact} />
    </div>
  );
}

export default App;
