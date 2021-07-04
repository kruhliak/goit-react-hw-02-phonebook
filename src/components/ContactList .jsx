import React from 'react';

function ContactList({ contactsData, onDeleteContact }) {
  return (
    <ul>
      {contactsData.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button
            type="button"
            onClick={() => onDeleteContact(contact.id)}
          >
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
