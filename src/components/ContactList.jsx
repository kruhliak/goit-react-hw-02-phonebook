import React from 'react';
import { List, Item, Button } from './ContactList.styles';

function ContactList({ contactsData, onDeleteContact }) {
  return (
    <List>
      {contactsData.map(contact => (
        <Item key={contact.id}>
          {contact.name}: {contact.number}
          <Button type="button" onClick={() => onDeleteContact(contact.id)}>
            Удалить
          </Button>
        </Item>
      ))}
    </List>
  );
}

export default ContactList;
