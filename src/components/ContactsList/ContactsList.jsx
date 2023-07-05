import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Contact from '../Contact';

export default class ContactList extends Component {
  render() {
    const { contacts, onClick } = this.props;
    return (
      <>
        {contacts.length === 0 ? (
          <p>No contacts</p>
        ) : (
          <>
            <ul>
              {contacts.map(contact => {
                return (
                  <Contact
                    key={contact.id}
                    contact={contact}
                    onClick={id => {
                      onClick(id);
                    }}
                  />
                );
              })}
            </ul>
          </>
        )}
      </>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};
