import React from 'react'
import { update } from '../../BooksAPI';


function Book({book}) {
    const {shelf, authors, title, imageLinks} = book
    
    function handleChange(event) {
        update(book, event.target.value);
        setTimeout(function(){
            window.location.reload();
         }, 600);
        
    }
    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageLinks? imageLinks.thumbnail: ''})` }}>
                    </div>
                    <div className="book-shelf-changer">
                        <select onChange={handleChange} defaultValue={shelf}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{authors}</div>
            </div>
        </li>
    );
}

export default Book
