import React from "react";
import Shelf from "./Shelf";
import { Link } from "react-router-dom";

class Main extends React.Component {
  render() {
    return (
      <div>
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <Shelf
              books={this.props.books.filter(
                books => books.shelf === "currentlyReading"
              )}
              title={"Currently Reading"}
              updateShelf={this.props.updateShelf}
            />
            <Shelf
              books={this.props.books.filter(
                books => books.shelf === "wantToRead"
              )}
              title={"Want to Read"}
              updateShelf={this.props.updateShelf}
            />
            <Shelf
              books={this.props.books.filter(books => books.shelf === "read")}
              title={"Read"}
              updateShelf={this.props.updateShelf}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default Main;
