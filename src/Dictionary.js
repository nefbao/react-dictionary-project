import React, {useState} from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(){
    let [keyword, setKeyword]=useState("");
    let [results,setResults]=useState(null);
    
    function handleResponse(response){
        setResults(response.data[0]);
    }
    function search(event){
        event.preventDefault();
        let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }
    function changeKeword(event){
        setKeyword(event.target.value);
    }
    return(
        <div className="Dictionary">
            <h1 className="text-center my-5">Dictionary</h1>
            <form onSubmit={search} className="mb-5">
                <input type="search" placeholder="Search for a definition" onChange={changeKeword} className="form-control searchBox"/>
                <input type="submit" value="🔍" className="btn button" />
            </form>
            <Results results={results} />
        </div>
    )
}