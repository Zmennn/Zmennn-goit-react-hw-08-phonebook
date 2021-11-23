import './App.css';

import ContactsList from './components/ContactsList.jsx';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter.jsx';
import { AppBar } from './components/AppBar/AppBar';
import { Registration } from './components/Registration/Registration';
import { Login } from './components/Registration/Login';

export default function App() {
  return (
    <>
      <AppBar />
      <Registration />
      <Login />
      <div>
        <h1>Phonebook</h1>

        <ContactForm />

        <h2>Contacts</h2>

        <Filter />

        <ContactsList />
      </div>
    </>
  );
}
