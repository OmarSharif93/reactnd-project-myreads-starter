import React, { Component } from "react";
import Book from "./Book";

class Shelf extends Component {
    render() {
        const { books, head, title } = this.props
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{head}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        
                        {books.map(book => {
                            if (book.shelf === title) {
                                return <Book key={book.id} book={book} />
                            }
                        })}

                    </ol>
                </div>
            </div>
        );
    }
}
export default Shelf