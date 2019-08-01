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
              value={this.state.query}
              onChange={event => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.filteredBooks.map(book => (
              <Book book={book} updateShelf={this.props.updateShelf} />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;
