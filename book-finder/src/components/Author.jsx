import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import 'bootstrap/dist/css/bootstrap.min.css';

const Author = ()=>{
    const [authorName, setAuthorName] = useState('mike mentzer')

    const {data : authorBookdata, refetch, isLoading, isError} = useQuery(['author'], ()=>{
        return axios.get(`https://openlibrary.org/search/authors.json?q=${authorName}`).then((res)=>{
            return res.data
            })
    })

    // bootstrap
    const mainAuthor = 'd-flex flex-column align-items-center';
    const inputBook = 'p-3 rounded bg-white text-dark mb-3';


    if (isLoading){
        return <h1 className="d-flex justify-content-center">Loading Sootonam...</h1>
    }
    if (isError){
        return<h1>NOT FOUND.</h1>
    }
    return(
        <div className={mainAuthor}>
            <h2 className="mt-4">Enter your Authot Name:</h2>
            <hr className="border-dark"/>
            <input className={inputBook} type="text" placeholder="mike mentzer" onChange={(event)=>{setAuthorName(event.target.value)}} />
            <button onClick={refetch}>Find its Book</button>
            <h1>{authorBookdata?.docs[0].name}</h1>
            <h2>Top Work: {authorBookdata?.docs[0].top_work}</h2>
            <ul>
                <h2>{authorBookdata?.docs[0].name}'s Books:</h2>
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