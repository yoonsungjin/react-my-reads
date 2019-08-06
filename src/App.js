import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import Main from "./Main";
import Search from "./Search";
import { Switch, Route } from "react-router-dom";

class BooksApp extends React.Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({ books: books }));
  }
  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      //@TODO: proper way to refresh page after select shelf
      BooksAPI.getAll().then(books => this.setState({ books: books }));
    });
  };

  render() {
    return (
      <div className="app">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Main books={this.state.books} updateShelf={this.updateShelf} />
            )}
          />

          <Route
            exact
            path="/search"
            render={() => (
              <Search books={this.state.books} updateShelf={this.updateShelf} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default BooksApp;
