import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Search.css";

export default function Search () {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleWordResponse(response) {
        setResults(response.data[0]);
    }

    function Define () {
        let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiURL).then(handleWordResponse);

        let pexelsapiURL = `https://api.pexels.com/v1/search?query=${keyword}&per_page=1`;
        let pexelsapiKey = "563492ad6f917000010000013621894597a34e568fb19f0031d91ab8";
        axios
        .get(pexelsapiURL, 
            { headers: { 
                Authorization: `Bearer ${pexelsapiKey}`,
            },
        })
        .then(handlePexelsResponse);
    }

    function handlePexelsResponse (response) {
        setPhotos(response.data.photos);
    }

    function handleSubmit (event) {
        event.preventDefault();
        Define();
    }

    function handleKeywordChange (event) {
        setKeyword(event.target.value);
    }

    function load() {
        setLoaded(true);
        Define();
    }

    if (loaded) {
        return (
            <div className="search">
                    <form onSubmit={handleSubmit}>
                    <input type="search" autoFocus={true} onChange={handleKeywordChange}/>
                </form>
                <div className="userAction">Search a word and press enter!</div>
                <Results results={results}/>
                <section>
                    <Photos results ={photos} />
                </section>
            </div>
        );
    } else {
        load();
        return <div className="userAction">Search a word and press enter!</div>
    }
    }