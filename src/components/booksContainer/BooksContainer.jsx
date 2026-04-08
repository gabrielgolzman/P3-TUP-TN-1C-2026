import { useState } from "react";
import BookItem from "../bookItem/BookItem";
import BooksSearch from "../booksSearch/BooksSearch";
import DeleteModal from "../deleteModal/DeleteModal";
import { initialBookToDelete } from "./BooksContainer.data";

const BooksContainer = ({ books, onDeleteBook }) => {
  const [searchBook, setSearchBook] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [bookToDelete, setBookToDelete] = useState(initialBookToDelete)

  const handleSearch = (searchValue) => {
    setSearchBook(searchValue)
  }

  const handleSelectBook = (title) => {
    setSelectedTitle(title);
  }

  const handleShowModal = (newBookToDelete) => {
    setBookToDelete(newBookToDelete)
    setShowModal(true);
  }

  const handleHideModal = () => {
    setShowModal(false);
    setBookToDelete(initialBookToDelete)
  }

  const booksMapped = books
    .filter(book => book.title.toUpperCase().
      includes(searchBook.toUpperCase()))
    .map((book) => {
      return (
        <BookItem
          key={book.id}
          id={book.id}
          title={book.title}
          imageUrl={book.imageUrl}
          author={book.author}
          pageCount={book.pageCount}
          rating={book.rating}
          available={book.available}
          isSelected={selectedTitle === book.title}
          onSelectBook={handleSelectBook}
          onShowDeleteModal={handleShowModal}
        />
      );
    });

  return (
    <>
      <DeleteModal
        show={showModal}
        book={bookToDelete}
        onHide={handleHideModal}
        onDeleteBook={onDeleteBook} />
      {selectedTitle &&
        <p className="mb-2">Usted ha seleccionado el libro: <b>{selectedTitle}</b></p>}
      <BooksSearch onSearch={handleSearch} />
      {
        booksMapped.length > 0 ?
          <div className="d-flex justify-content-center flex-wrap mt-5 mb-3">{booksMapped}</div>
          : <p className="mt-2">No se encontraron libros</p>
      }
    </>
  );
};

export default BooksContainer;
