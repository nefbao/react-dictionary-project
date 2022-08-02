import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props){
        console.log(props.meaning);
        return(
            <div className="Meaning">
                <h3>{props.meaning.partOfSpeech}</h3>
                <div className="definitions">
                    {props.meaning.definitions.map(function(definition,index){
                        return(
                            <div key={index} className="definitionBlock">
                                <h4>Definition {index+1}</h4>
                                <div className="m-2">{definition.definition}<br /><em>{definition.example}</em>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <Synonyms synonyms={props.meaning.synonyms} />
            </div>
        );    
}