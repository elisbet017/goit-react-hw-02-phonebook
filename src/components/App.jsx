import React, { Component } from 'react';
import ContactForm from './Form/Form';
import Contacts from './Contacts/Contacts';
import { Block } from './App.styled';
import { GlobalStyles } from '../utils/GlobalStyles';

export class App extends Component {
  state = {
    contacts: [],
  };

  onSubmitForm = contact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  render() {
    return (
      <Block>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.onSubmitForm} />
        <Contacts contacts={this.state.contacts} />
        <GlobalStyles />
      </Block>
    );
  }
}
