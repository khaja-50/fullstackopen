import React, { useState } from 'react';

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'Akshay', number: '+91 123 456 7890' },
    { id: 2, name: 'Adwaith', number: '+91 20 7946 0958' },
    { id: 3, name: 'Abinav', number: '+91 98765 43210' },
  ]);

  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Add a new contact
  const addContact = (event) => {
    event.preventDefault();
    if (!newName || !newNumber) return;

    const duplicate = contacts.some(
      (contact) => contact.name.toLowerCase() === newName.toLowerCase()
    );
    if (duplicate) {
      alert('Name already exists in phonebook!');
      return;
    }

    const newContact = {
      id: contacts.length + 1,
      name: newName,
      number: newNumber,
    };

    setContacts([...contacts, newContact]);
    setNewName('');
    setNewNumber('');
  };

  // Find contact by phone number
  const searchedContact = contacts.find((contact) =>
    contact.number.includes(searchQuery)
  );

  return (
    <div>
      <h2>Phonebook</h2>

      {/* Add Contact Form */}
      <form onSubmit={addContact}>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Enter name"
          required
        />
        <input
          type="text"
          value={newNumber}
          onChange={(e) => setNewNumber(e.target.value)}
          placeholder="Enter phone number"
          required
        />
        <button type="submit">Add</button>
      </form>

      {/* Search Section */}
      <h3>Search Contact by Phone Number</h3>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Enter phone number"
      />

      {/* Display Search Result Twice */}
      <h3>Search Result</h3>
      {searchQuery ? (
        searchedContact ? (
          <>
            <p>{searchedContact.name} - {searchedContact.number}</p>
            <p>{searchedContact.name} - {searchedContact.number}</p>
          </>
        ) : (
          <p>No contact found</p>
        )
      ) : (
        <p>Enter a phone number to search</p>
      )}

      {/* Display All Contacts */}
      <h3>All Contacts</h3>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name} - {contact.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
