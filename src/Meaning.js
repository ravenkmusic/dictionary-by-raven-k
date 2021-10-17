import React from "react";
import "./Meaning.css";

export default function Meaning (props) {
    return (
    <div className="Meaning">
        <p className="partOfSpeech">{props.meaning.partOfSpeech}</p>
        {props.meaning.definitions.map(function (definition, index)
        {
            return (
                <div key={index}>
                    <p>
                        <div className="definitions">{definition.definition}</div>
                        <div className="examples">"{definition.example}."</div>
                    </p>
                </div>
            );
        })}
    </div>
    );
 }