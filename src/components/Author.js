import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";

const Author = ()=>{
    const [authorName, setAuthorName] = useState('mike mentzer')

    const {data : authorBookdata} = useQuery(['author'], ()=>{
        return axios.get(`https://openlibrary.org/search/authors.json?q=${authorName}`).then((res)=>{
            return res.data})
    })
   
    return(
        <div>
            <input type="text" placeholder="mike mentzer" onChange={(event)=>{setAuthorName(event.target.value)}} />
            <button>Find its Book</button>
            <h1>{authorName}</h1>
            <h2>Top Work: {authorBookdata?.docs[0].top_work}</h2>
            <ul>
                <h2>{authorName}'s Books:</h2>
                {
                    authorBookdata?.docs[0].top_subjects.map((booksNames, index)=>(
                        <li key={index} >{booksNames}</li>
                    ))
                }
        
            </ul>
            
        </div>
    )
} 

export default Author;