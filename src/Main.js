import React from "react";
import Shelf from "./Shelf";

class Main extends React.Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <Shelf books={this.props.books} title={"Currently Reading"} />
          <Shelf books={this.props.books} title={"Want to Read"} />
          <Shelf books={this.props.books} title={"Read"} />
        </div>
      </div>
    );
  }
}

export default Main;
