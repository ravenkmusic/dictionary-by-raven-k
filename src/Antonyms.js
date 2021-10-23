import React from "react";
import "./Antonyms.css";

export default function antonyms (props) {
    if (props.antonyms) {
        return (
            <div className="Antonyms">
                <span className="result">
            {props.antonyms.map(function (antonym, index) {
                return (
                <span key={index}>
                    {antonym}, {""}
                </span>);
            })}
        </span>
        </div>
        );
    } else {
        return null;
    }
}