import React, { Component } from "react";
import { nanoid } from 'nanoid';

export class App extends Component  {
  state = {
    contacts: [],
    name: ''
  };

  addContact = (e) => {
    e.preventDefault();
    const { name } = this.state;
    const id = nanoid();
    const person = { name: { name }, id: {id} };

    this.setState(prevState => ({contacts: [person,...prevState.contacts]}));
  };
  hendleInput = (e) => {
    this.setState({ name: e.currentTarget.value });
  };

  render() {
    const { contacts } = this.state;

    return (
      <div>
        <div>
          <h2>Phonebook</h2>

          <form onSubmit={this.addContact}>
            <label>
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={this.hendleInput}
              />
            </label>

            <button type="submit">Add contact</button>
          </form>
        </div>

        <div>
          <h2>Contacts</h2>
          
          <ul>
            {contacts.map(cont => (<li key={cont.id}>{cont.name}</li>))}
          </ul>
        </div>
      </div>
    );
  }
};