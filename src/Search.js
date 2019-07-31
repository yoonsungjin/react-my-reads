import React from "react";
import Book from "./Book";
import * as BooksAPI from "./BooksAPI";

class Search extends React.Component {
  state = {
    query: ""
  };

  updateQuery = query => this.setState({ query: query });

  render() {
    return (
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
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={event => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.props.books
              .filter(book => book.title == this.state.query)
              .map(book => (
                <Book
                  book={book}
                  key={book.id}
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
