import React from "react";
import Book from "./Book";
import * as BooksAPI from "./BooksAPI";
import { Link } from "react-router-dom";

class Search extends React.Component {
  state = {
    query: "",
    filteredBooks: []
  };

  updateQuery = query => {
    this.setState({ query: query });
    if (query.length > 0) this.handleSearch(query);
    else this.setState({ filteredBooks: [] });
  };

  handleSearch(query) {
    BooksAPI.search(query.trim(), 20).then(books => {
      books.error
        ? this.setState({ filteredBooks: [] })
        : this.setState({ filteredBooks: books });
    });

    this.state.filteredBooks.map(book => {
      book.shelf = "none";
      this.props.books.map(
        bookOnShelf =>
          book.id === bookOnShelf.id && (book.shelf = bookOnShelf.shelf)
      );
    });
  }

  render() {
    console.log(this.state.filteredBooks);

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>

          <div className="search-books-input-wrapper">
            {}
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={event => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.filteredBooks.map(filteredBook => (
              <Book
                key={filteredBook.id}
                book={filteredBook}
                updateShelf={this.props.updateShelf}
              />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;