import { useState } from 'react'
import ContactList from './components/ContactList';
import './App.css'

function App() {
  const [contacts, setContacts] = useState(dummyContacts)
  
  console.log("Contacts: ", contacts)
  return (
    <div>
      <h1>Contact List WS</h1>
      <ContactList />
    </div>
  )
}

export default App
