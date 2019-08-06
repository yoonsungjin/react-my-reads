import React from "react";
import Book from "./Book";
import * as BooksAPI from "./BooksAPI";
import { Link } from "react-router-dom";
import DebounceInput from "react-debounce-input";

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
  }

  render() {
    const newBooks = this.state.filteredBooks.map(book => {
      const modifiedBook = { ...book };
      modifiedBook.shelf = "none";
      const isExists = this.props.books.find(b => b.id === modifiedBook.id);
      if (isExists) {
        modifiedBook.shelf = isExists.shelf;
      }
      return modifiedBook;
    });

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>

          <div className="search-books-input-wrapper">
            {}
            <DebounceInput
              debounceTimeout={1000}
              type="text"
              placeholder="Search by title or author"
              onChange={event => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {newBooks.map(filteredBook => (
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
