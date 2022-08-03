import React, {useState} from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(){
    let [keyword, setKeyword]=useState("");
    let [results,setResults]=useState(null);
    let[photos,setPhotos]=useState(null);
    
    function handleResponse(response){
        setResults(response.data[0]);
    }
    function handlePicResponse(response){
        setPhotos(response.data.photos)
    }
    function search(event){
        event.preventDefault();
        let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);

        let picApiKey="563492ad6f917000010000019f26ddd901fa4fa1a9008dcec11f48b1"
        let picApiUrl=`https://api.pexels.com/v1/search?query=${keyword}&per_page=6`
        axios.get(picApiUrl).then(handlePicResponse,{ headers: { Authorization: `Bearer ${picApiKey}` } });
    }
    function changeKeword(event){
        setKeyword(event.target.value);
    }
    return(
        <div className="Dictionary">
            <section>
                <h1 className="text-center my-4">Dictionary</h1>
                <form onSubmit={search} className="mb-5">
                    <input type="search" placeholder="Search for a definition" onChange={changeKeword} className="form-control searchBox"/>
                    <input type="submit" value="🔍" className="btn button" />
                </form>
            </section>
            <Results results={results} />
            <Photos photos={photos} />
        </div>
    )
}