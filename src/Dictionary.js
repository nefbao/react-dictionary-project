import React, {useState} from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary(){
    let [keyword, setKeyword]=useState("");

    function handleResponse(response){
        console.log(response.data);
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
            <form onSubmit={search}>
                <input type="search" placeholder="Search for a definition" onChange={changeKeword} className="form-control searchBox"/>
                <input type="submit" value="Search" className="btn btn-dark" />
            </form>
        </div>
    )
}