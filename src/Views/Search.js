import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { search } from '../BooksAPI';
import Book from './Components/Book';


class Search extends Component {
    state = {
        query: '',
        books: []
    }

    handleChange = async event => {
        try {
            const query = event.target.value
            this.setState({ query })
            if (query.trim()) {
                const results = await search(query)
                if (results.error) {
                    this.setState({ books: [] })
                } else {
                    this.setState({ books: results })
                }
            } else {
                this.setState({ books: [] })
            }

        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/'><button className="close-search">Close</button></Link>
                    <div className="search-books-input-wrapper">
                        <input
                            value={this.state.query}
                            onChange={this.handleChange}
                            type="text"
                            placeholder="Search by title or author" />

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.books.map(book => {
                            const searchShelf = this.props.books.find(searchedBook => searchedBook.id === book.id) 
                            if(searchShelf){
                                book.shelf = searchShelf.shelf
                            }else{
                                book.shelf='none'
                            }
                            return  <Book key={book.id} book={book} />
                        }
                       
                        )}
                    </ol>
                </div>
            </div>
        );
    }
}
export default Search