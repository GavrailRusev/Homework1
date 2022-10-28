
 function BookList({books}){
    const info = books.map((book, index) => {
        return (
          <div key={index} class="container">
            <div class="firstcol">
              <img src={book.volumeInfo.imageLinks.thumbnail}></img>
            </div>
            <div class="secondcol">
              <h4>{book.volumeInfo.title}</h4>
    
              {book.volumeInfo.authors !== undefined
                ? book.volumeInfo.authors.map((item) => {
                    return <div class="author">{item}</div>;
                  })
                : ""}
            </div>
          </div>
        );
      });
      return info;
}

export default BookList;