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

const contacts = [

]

export default function ContactsList(){
 return(

        <div className='list'>
            <h2>Producer's contacts</h2>
            <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
            </tr>
                <tr>
                    <td> <img src={pictureUrl} alt=""></img> </td> 
                    <td>{name}</td>
                    <td>{popularity}</td>      
                </tr>



        </div>
 )



}



