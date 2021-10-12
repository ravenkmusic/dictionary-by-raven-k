import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Search.css";

export default function Search () {
    let [keyword, setKeyword] = useState("");

    function handleResponse(response) {
        console.log(response.data[0]);
        console.log(response.data[0].word);
        console.log(response.data[0].phonetic);
        console.log(response.data[0].meanings[0].partOfSpeech)
        console.log(response.data[0].meanings[0].definitions[0].definition);
        console.log(response.data[0].meanings[0].definitions[0].synonyms);
        console.log(response.data[0].meanings[0].definitions[0].antonyms);
        console.log(response.data[0].meanings[1].partOfSpeech)
        console.log(response.data[0].meanings[1].definitions[0].definition);
        console.log(response.data[0].meanings[1].definitions[0].synonyms);
        console.log(response.data[0].meanings[1].definitions[0].antonyms);
    }

    function Define (event) {
        event.preventDefault();
        alert(`Searching for definition of ${keyword}...`);

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
            <Results />
        </div>
    );
}