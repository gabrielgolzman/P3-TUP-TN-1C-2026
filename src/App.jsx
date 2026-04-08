import { useState } from "react";
import BooksContainer from "./components/booksContainer/BooksContainer";
import NewBook from "./components/newBook/NewBook";
import { BOOKS } from "./data/books";
import Login from "./components/login/Login";

const App = () => {
  const [books, setBooks] = useState(BOOKS);

  const handleAddBook = (form) => {
    setBooks(prevBooks => [...prevBooks, {
      ...form,
      id: prevBooks[prevBooks.length - 1]?.id + 1
    }])
  }

  return (
    <>
      <h1>¡Bienvenidos a book champions!</h1>
      <div className="d-flex flex-column align-items-center">
        <NewBook onAddBook={handleAddBook} />
        <BooksContainer books={books} />
        {/* <Login /> */}
      </div>
    </>
  );
};

export default App;
