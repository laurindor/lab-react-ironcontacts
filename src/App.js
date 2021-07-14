import React from 'react'
import './App.css';
import contactsData from "./contacts.json";



function App() {
  return ( 
    <div className='App'>
       <div className='ContactsList'>
       <h2>Producer's contacts</h2>
      {contactsData.filter((contact, idx)=>idx<5).map((contact)=>{
        return(
          <div>
      
         <tr>
            <th>Picture</th>
             <th>Name</th>
            <th>Popularity</th>
          </tr>
         <tr>
            <td> <img src={contact.pictureUrl} alt="picture"></img> </td> 
            <td>{contact.name}</td>
            <td>{contact.popularity}</td>      
         </tr>
      
        </div>

      )})} </div>
    </div>   
      )}

 
export default App;
