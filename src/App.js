import React from "react";
import "./App.css";
import contacts from "./contacts.json";


class App extends React.Component {

  state = {
    contacts: contacts.slice(0, 5),
  }

  addRandom = () => {
    let randomContact = contacts[Math.floor(Math.random() * contacts.length)] 
    this.setState(() => {
     return {contacts : [...this.state.contacts, randomContact]}
    })
  }


  sortByName = () => {
    let sortName = [...this.state.contacts].sort((a, b) => a.name.localeCompare(b.name))
    this.setState(() => {
      return {contacts: sortName}
    })
  }


  sortByPopularity = () => {
    let mostPopular = [...this.state.contacts].sort((a, b) => b.popularity - a.popularity)
    this.setState(() => {
      return {contacts: mostPopular}
    })
  }


  removeContact = (index) => {
    const deleteContact = [...this.state.contacts];
    deleteContact.splice(index, 1);
    this.setState({
      contacts: deleteContact
    });
  }



  render() {
    console.log("Render App.js")
    console.log(this.state.contacts)
    return (
      <div className="App">
        <h1>Ironcontacts</h1>
        <button onClick={() => this.addRandom()}>Add Random Actor</button>
        <button onClick={this.sortByName}>Sort Actors By Name</button>
        <button onClick={() => this.sortByPopularity()}>Sort Actors By Popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
        </thead>
        <tbody>
      { this.state.contacts.map((contact) => {

             return (
              <tr key={contact.id}>
              <td><img class= "imgcontact" src={contact.pictureUrl}/></td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <button onClick={() => this.removeContact()}>Delete</button>
              </tr>
              )
             }       
          )}
        </tbody>
</table>
</div>
);
}
}


export default App;


