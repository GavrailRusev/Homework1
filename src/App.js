import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import BookList from "./BookList";
function App() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

  const searchTermChange = (txt) => {
    // console.log(txt.value);

    setSearchTerm(txt.value);
    //console.log(txt);
  };
  const searchForBooks = () => {
    fetch("https://www.googleapis.com/books/v1/volumes?q=" + searchTerm)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.items);
        setBooks(data.items);
      });
  };
  return (
    <div className="App">
      <input
        type="text"
        placeholder="search text"
        onChange={(e) => searchTermChange(e.target)}
      />
      <button onClick={() => searchForBooks()}>Search</button>
      <BookList books={books} />
    </div>
  );
}

export default App;
