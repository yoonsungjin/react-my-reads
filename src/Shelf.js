import React from 'react';
import Book from './Book.js';
import BookCategory from './BookCategory'


class Shelf extends React.Component
{
    render(){
        const booklist = [];
/*        this.props.books.forEach(book => {

              rows.push(
                <Book
                  thumbnail={book.imageLinks.thumbnail}
                  title={book.title}
                  author={book.author}
                  key={book.title}
                />
              );


        });
*/  
        this.props.books.map(book => {
          book.shelf == this.props.title ? 
            booklist.push(
                <Book
                  book={book}
                  key={book.title}
                />
            ):null;
        });

        return(
          <div>
              <div className="bookshelf">  
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {booklist}}
                    </ol>
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