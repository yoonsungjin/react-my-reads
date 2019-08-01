import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import Main from "./Main";
import Search from "./Search";
import { Route } from "react-router-dom";

class BooksApp extends React.Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({ books: books }));
  }

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);

    //@TODO: proper way to refresh page after select shelf
    BooksAPI.getAll().then(books => this.setState({ books: books }));
  };

  searchBooks(query) {
    BooksAPI.search(query);
  }

  handleUpdateQuery(query) {
    BooksAPI.search(query).then(books =>
      books ? this.setState({ books }) : []
    );
    this.setState({ query });
  }

  render() {
    console.log(this.state.books);
    {
      /*  <Router>
        <div className="app">
          <Route exact path='/' component={Main} />
          <Route exact path='/search' component={Search} />
        </div>
      </Router>


      <Main books={this.state.books} updateShelf={this.updateShelf} />
      */
    }

    return (
      <div className="app">
        <Search books={this.state.books} updateShelf={this.updateShelf} />
      </div>
    );
  }
}

export default BooksApp;
