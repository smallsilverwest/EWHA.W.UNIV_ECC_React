import React from "react";
import Book from "./Book";

function Library(props) {
    return (
        <div>
            <Book name = "MOMO" numOfPage = {300} />
            <Book name = "Little Prince" numOfPage = {400} />
            <Book name = "R=VD" numOfPage = {500} />
        </div>
    );
}

export default Library;