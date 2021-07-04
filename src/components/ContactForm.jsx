import React from 'react';
import { Form } from './ContactForm.styles';

function ContactForm({ name, onSubmit, onChange, number }) {
  return (
    <div>
      <Form onSubmit={onSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            onChange={onChange}
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            autoComplete="off"
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            onChange={onChange}
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            autoComplete="off"
          />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </div>
  );
}

export default ContactForm;
