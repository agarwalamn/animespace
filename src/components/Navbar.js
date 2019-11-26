import React, { useContext } from 'react'

import { BookContext } from '../contexts/BookContext';

export default function Navbar() {
    const { books } = useContext(BookContext);
    return (
        <div className="navbar">
            <h1>Kira's anime list to watch!</h1>
            <p>Currently you have {books.length} anime to go through....</p>
        </div>
    )
}
