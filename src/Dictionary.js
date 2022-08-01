import React, {useState} from "react";
import "./Dictionary.css";

export default function Dictionary(){
    let [keyword, setKeyword]=useState("");
    function search(event){
        event.preventDefault();
        alert(`searching for ${keyword}`);
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