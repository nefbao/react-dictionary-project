import React from "react";
import "./Meaning.css";

export default function Meaning(props){
        return(
            <div className="Meaning">
                <h3>{props.meaning.partOfSpeech}</h3>
                <div className="definitions">
                    {props.meaning.definitions.map(function(definition,index){
                        return(
                            <div key={index} className="definitionBlock">
                                <h4 className="my">Definition {index+1}</h4>
                                <p>{definition.definition}<br /><em>{definition.example}</em>
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        );    
}