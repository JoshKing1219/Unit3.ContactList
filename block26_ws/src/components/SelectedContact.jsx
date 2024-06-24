import { useState } from "react";
import { useEffect } from "react";

export default function SelectedContact({
  selectedContactId,
  setSelectedContactId,
}) {
  const [contact, setContact] = useState({});

  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const result = await response.json();
        setContact(result);
      } catch(error) {
        console.log(error);
      }
    }
    fetchContact();
  }, []);

  return(
    contact.name ? (
    <div>
        <h2>Name: {contact.name}</h2>
        <ul>
            <li>Email: {contact.email}</li>
            <li>Phone Number: {contact.phone}</li>
            <li>Website: {contact.website}</li>
            <li>Company: {contact.company.name}</li>
            <li>Location: {contact.address.city}</li>
        </ul>
    </div>) : <div></div>
  );
}
