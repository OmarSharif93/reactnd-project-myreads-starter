import React from 'react'
import { Switch, Route } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Home from './Views/Home'
import Search from './Views/Search'
import { getAll } from './BooksAPI'

class BooksApp extends React.Component {
  state = { books: [] }

  componentDidMount() {
    getAll().then(books => {
      this.setState(() => ({
        books: books
      }))
    })
  }
  render() {
    return (
      <Switch >
        <Route exact path='/' render={() => <Home books={this.state.books} />}></Route>
        <Route exact path='/search' render={() => <Search books={this.state.books} />}></Route>
      </Switch>
    )
  }
}

export default BooksApp
