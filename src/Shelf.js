import React from "react";
import Book from "./Book.js";

class Shelf extends React.Component {
  render() {
    const bookonshelf = this.props.books.filter(books => {
      books.shelf === this.props.title;
    });

    const books = bookonshelf.map(booklist => {
      <Book book={booklist} />;
    });

    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.title}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">{books}}</ol>
          </div>
        </div>

        <div className="open-search">
          <button onClick={() => this.setState({ showSearchPage: true })}>
            Add a book
          </button>
        </div>
      </div>
    );
  }
}

export default Shelf;
