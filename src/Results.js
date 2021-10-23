import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results (props) {
    if (props.results) {
        return (
        <div className="Results">
            <div className="first">
            <p className="word fs-3">{props.results.word}</p>
            <p className="phonetic"> ({props.results.phonetic})</p>
            <br />
            </div>
            <hr />
            {props.results.meanings.map(function(meaning, index) {
                return (
                <div key={index}>
                    <Meaning meaning={meaning} />
                </div>);
            })}
        </div>);
    } else {
        return (<div classname="Results">
            <p className="refresh">Search a word and press enter to view its definition!</p>
        </div>);
    }
}