import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning (props) {
    return (
    <div className="Meaning">
        <p className="partOfSpeech">{props.meaning.partOfSpeech}</p>
        {props.meaning.definitions.map(function (definition, index)
        {
            return (
                <div key={index}>
                    <p>
                        <div className="definitions">
                            <li>{definition.definition}
                            </li>
                        </div>
                        <div className="examples">
                            Example: "{definition.example}."
                        </div>
                        <Synonyms synonyms={definition.synonyms} />
                    </p>
                </div>
            );
            
        })}
    </div>
    );
 }