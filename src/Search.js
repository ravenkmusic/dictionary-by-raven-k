import React, { useState } from "react";
import "./Search.css";

export default function Search () {
    let [keyword, setKeyword] = useState("");

    function Define (event) {
        event.preventDefault();
        alert(`Searching for definition of ${keyword}...`);
    }

    function handleKeywordChange (event) {
        setKeyword(event.target.value);
    }

    return (
        <div className="search">
            <form onSubmit={Define}>
                <input type="search" autoFocus={true} onChange={handleKeywordChange}/>
            </form>
        </div>
    );
}