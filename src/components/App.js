import React from "react";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const contacts=[
    {
      id:"1",
      name:"Maina",
      email:"maina@gmail.com"
    },
    {
      id: "2",
      name: "Bichchuran",
      email:"bichchuran@gmail.com"

    }
  ]
  return (
    <div>
      <Header/>
      <AddContact/>
      <ContactList contacts={contacts}/> 
    </div> 
  );
}

export default App;
