import "./App.css";
import { useState } from "react";
import ContactList from "./components/ContactList";
import SelectedContact from "./components/SelectedContact";

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      <div>
        <h1>Contact List WS</h1>
      </div>
      {selectedContactId ? (
        <SelectedContact
          selectedContactId={selectedContactId}
          setSelectedContactId={setSelectedContactId}
        />
      ) : (
        <ContactList
          selectedContactId={selectedContactId}
          setSelectedContactId={setSelectedContactId}
        />
      )}
    </>
  );
}

export default App;
