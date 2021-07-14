/*
 * Example of contact object
 *   {
    "name": "Idris Elba",
    "pictureUrl": "https://image.tmdb.org/t/p/w500/d9NkfCwczP0TjgrjpF94jF67SK8.jpg",
    "popularity": 11.622713,
    "id": "11731993-0604-4bee-80d5-67ad845d0a38"
  },
 */


import React from 'react'

import contactsData from '../contacts.json'

export default function ContactsList(){
    const [contacts, setContacts] = useState(contactsData)


    function randomContact(contactId){
        const updatedContactsArray = contacts.filter(contacts[Math.floor(Math.random()*contacts.length)]);
        setContacts(updatedContactsArray)
    }

    
    return(
       contacts.map((contact, idx)=>{
            return(
                <AddRandom key={idx} contact={contact} handleRandom={randomContact}/>
            )
        })
    )
}
