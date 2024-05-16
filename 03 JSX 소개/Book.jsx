import React from "react";

function Book(props) {
    return (
        <div>
            <h1> {'Name of this book is ${props.name}.'}</h1>
            <h2> {'This book has ${props.numOfPage}.'}</h2>
        </div>
    )
}

export default Book;