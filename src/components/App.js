import React from "react";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const contacts=[
    {
      id: "1",
      name: "Eli",
      email: "goldbee2@wwu.edu"
    },
    {
      id: "2",
      name: "N/A",
      email: "none@none.com"
    }
  ]
  return (
    <div className="ui container">
      <Header />
      <AddContact/>
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
