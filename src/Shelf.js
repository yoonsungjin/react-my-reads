import React from 'react';
import Book from './Book.js';
import * as BooksAPI from './BooksAPI'

class Shelf extends React.Component
{
    state = {
        booklist : {}

    }
    componentDidMount() {
        BooksAPI.getAll().then(books =>
          this.setState({ books }, () => console.log(this.state.books))
        );
    }
    render(){
        return(                
        <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    <Book />
                </ol>
            </div>
        </div>);

    }

}

export default Shelf;