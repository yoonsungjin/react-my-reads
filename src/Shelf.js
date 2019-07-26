import React from 'react';
import Book from './Book.js';
import BookCategory from './BookCategory'


class Shelf extends React.Component
{
    render(){
        let lastShelf = null;
        const rows = [];
        this.props.books.forEach(book => {

              if (book.shelf !== lastShelf) {
                rows.push(
                  <BookCategory
                    shelf={book.shelf}
                    key={book.shelf} />
                );
              }
              rows.push(
                <Book
                  imageLinks={book.imageLinks}
                  title={book.title}
                  author={book.author}
                  key={book.title}
                />
              );
              lastShelf = book.shelf;


        });


        return(
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">

              <div className="bookshelf">  
                {rows}              
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        <Book />
                    </ol>
                </div>
              </div>
                

            </div>
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
          </div>            


        );

    }

}

export default Shelf;