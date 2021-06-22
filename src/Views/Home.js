import React, { Component } from 'react'
import Shelf from './Components/Shelf';
import SearchBtn from './Components/SearchBtn';


class Home extends Component {

    render() {
        const{books} = this.props
        return (
            <div className="app">
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <div className="list-books-content">
                        <Shelf head='CurrentlyReading' title ='currentlyReading' books={books} />
                        <Shelf head='Want To Read' title ='wantToRead' books={books}/>
                        <Shelf head='Read' title ='read' books={books}/>
                        <SearchBtn />
                        <div>
                        </div>
                    </div>
                </div>
            </div>

        );

    }
}
export default Home