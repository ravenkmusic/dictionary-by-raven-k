import React from "react";
import "./Results.css";

export default function Results (props) {
    if (props.results) {
        return (
        <div className="Results">
            Testing...
        </div>);
    } else {
        return null;
    }
}