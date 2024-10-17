import React from "react";
import './Title.css';

function Title({
    total
}) {
    return(
        <h2 className="Title">
            Welcome in this page you would find <span>{total}</span> movies, maybe some one is your favorite.
        </h2>
    )
}

export {Title}