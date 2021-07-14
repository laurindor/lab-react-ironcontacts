import React from 'react'
import './App.css';
import contactsData from "./contacts.json";
import AddRandom from './components/AddRandom';


function App() {
  return ( 
    <div className='App'>
      <AddRandom />
       <div className='ContactsList'>
       <h1>Ironcontacts</h1>
      {contactsData.filter((contact, idx)=>idx<5).map((contact)=>{
        return(
          <div>
          <table>
         <tr>
            <th>Picture</th>
             <th>Name</th>
            <th>Popularity</th>
          </tr>

         <tr>
            <td> <img className="imgcontact" src={contact.pictureUrl} alt="imgcontact"></img> </td> 
            <td>{contact.name}</td>
            <td>{contact.popularity}</td>      
         </tr>
         </table>
      
        </div>

      )})} </div>
    </div>   
      )}

 
export default App;
