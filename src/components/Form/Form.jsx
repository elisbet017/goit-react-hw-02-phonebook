import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Form, Field, Input, SubmitButton } from './Form.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onChangeInputValue = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  onSubmit = e => {
    const { name, number } = this.state;
    e.preventDefault();
    const contact = {
      name,
      number,
      id: nanoid(),
    };
    this.props.onSubmit(contact);
    this.reset();
  };

  reset = () => {
    this.setState({ number: '', name: '' });
  };
  render() {
    const { name, number } = this.state;
    return (
      <Form onSubmit={this.onSubmit}>
        <Field>
          Name
          <Input
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+((['\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.onChangeInputValue}
          />
        </Field>
        <Field>
          Number
          <Input
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.onChangeInputValue}
          />
        </Field>
        <SubmitButton type="submit">Add contact</SubmitButton>
      </Form>
    );
  }
}
export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
