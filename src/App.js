import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import Main from "./Main";

class BooksApp extends React.Component {
  state = {
    books: [],
    showSearchPage: false
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({ books: books }));
  }

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);

    //@TODO: proper way to refresh page after select shelf
    BooksAPI.getAll().then(books => this.setState({ books: books }));
  };

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <button
                className="close-search"
                onClick={() => this.setState({ showSearchPage: false })}
              >
                Close
              </button>
              <div className="search-books-input-wrapper">
                {}
                <input type="text" placeholder="Search by title or author" />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
          <Main books={this.state.books} updateShelf={this.updateShelf} />
        )}
      </div>
    );
  }
}

export default BooksApp;
