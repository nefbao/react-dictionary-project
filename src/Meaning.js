import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props){
        return(
            <div className="Meaning">
                <section>
                    <h3>{props.meaning.partOfSpeech}</h3>
                    <div className="definitions">
                        {props.meaning.definitions.map(function(definition,index){
                            return(
                                <div key={index} className="definitionBlock">
                                    <h4>Definition {index+1}</h4>
                                    <div className="definitionText m-2">{definition.definition}<br /><em>{definition.example}</em>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <Synonyms synonyms={props.meaning.synonyms} />
                </section>
            </div>
        );    
}