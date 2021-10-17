import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Search.css";

export default function Search () {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);

    function handleResponse(response) {
        console.log(response.data[0]);
        setResults(response.data[0]);
    }

    function Define (event) {
        event.preventDefault();

        let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiURL).then(handleResponse);
    }

    function handleKeywordChange (event) {
        setKeyword(event.target.value);
    }

    return (
        <div className="search">
            <form onSubmit={Define}>
                <input type="search" autoFocus={true} onChange={handleKeywordChange}/>
            </form>
            <Results results={results}/>
        </div>
    );
}