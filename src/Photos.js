import React from "react";

export default function Photos(props){
    if(props.photos){
        return(
            <section className="Photos">
                {props.photos.map(function(photo,index){
                    return(
                        <img key={index} src={photo.src.tiny} alt="searched word" />
                    );
                })}
            </section>
        );
    }else{
        return null;
    }
}