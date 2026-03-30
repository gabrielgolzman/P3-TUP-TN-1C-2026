import BooksContainer from "./components/booksContainer/BooksContainer";
import { BOOKS } from "./data/books";

const App = () => {
  return (
    <>
      <h1>¡Bienvenidos a book champions!</h1>
      <BooksContainer books={BOOKS} />
    </>
  );
};

export default App;
