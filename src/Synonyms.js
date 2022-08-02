import React from "react";
import "./Synonyms.css"

export default function Synonyms(props){
    
    if(props.synonyms.length){
        return(
            <div className="Synonyms">
                <p>Synonyms:</p>
                {props.synonyms.map(function(synonym,index){
                    return(
                        <div key={index}>
                            {synonym}
                        </div>
                    );
                })}
            </div>
        );
    }else{
        return null;
    }
}