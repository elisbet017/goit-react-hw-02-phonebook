import React from 'react';
import PropTypes from 'prop-types';
import { ContactItem, ButtonDelete } from './Contact.styled';

const Contact = ({ contact: { name, number, id }, onClick }) => {
  return (
    <ContactItem>
      <p>
        {name}: {number}
      </p>
      <ButtonDelete
        type="button"
        onClick={() => {
          onClick(id);
        }}
      >
        Delete
      </ButtonDelete>
    </ContactItem>
  );
};

export default Contact;

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};
