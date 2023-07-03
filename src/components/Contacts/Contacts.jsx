import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Contact, ButtonDelete } from './Contacts.styled';


export default class Contacts extends Component {
  state = {
    filter: '',
  };
  render() {
    return (
      <>
        <h2>Contacts</h2>
        {this.props.contacts.length === 0 ? (
          <p>No contacts</p>
        ) : (
          <>
            <p>Find contact by name</p>
            <input type="text" name="filter" value={this.state.filter} />
            <ul>
              {this.props.contacts.map(contact => {
                return (
                  <Contact key={contact.id}>
                    <p>
                      {contact.name}: {contact.number}
                    </p>
                    <ButtonDelete type="button">Delete</ButtonDelete>
                  </Contact>
                );
              })}
            </ul>
          </>
        )}
      </>
    );
  }
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,).isRequired,
}