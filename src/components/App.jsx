import React, { Component } from 'react';
import ContactForm from './Form';
import ContactList from './ContactsList';
import Filter from './Filter';
import { Block } from './App.styled';
import { GlobalStyles } from '../utils/GlobalStyles';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  onSubmitForm = contact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  onChangeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizeFilter)
    );
  };

  onDeleteContact = contactId => {
    const { contacts } = this.state
    const updatedContacts = contacts.filter(({ id }) => id !== contactId);
    this.setState({ contacts: updatedContacts });
  };

  render() {
    const { filter, contacts } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <Block>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.onSubmitForm} contacts={contacts} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.onChangeFilter} />
        <ContactList contacts={visibleContacts} onClick={this.onDeleteContact} />
        <GlobalStyles />
      </Block>
    );
  }
}
