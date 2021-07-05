import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const randomId = nanoid();
    const { name, contacts } = this.state;
    const findContact = contacts.find(contact => contact.name.includes(name));

    findContact
      ? alert(`${name} is already in contacts`)
      : this.setState({
          contacts: [
            ...this.state.contacts,
            { id: randomId, name: this.state.name, number: this.state.number },
          ],
        });

    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(item =>
      item.name.toLowerCase().includes(normalizedFilter),
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { name, number, filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <div id="container">
        <h1>Phonebook</h1>
        <ContactForm
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          name={name}
          number={number}
        />
        <h2>Contacts</h2>
        <Filter filter={filter} onChange={this.handleChange} />
        <ContactList
          contactsData={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
