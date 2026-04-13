import { useState } from "react";
import BooksContainer from "../booksContainer/BooksContainer"
import NewBook from "../newBook/NewBook"
import { BOOKS } from "../../data/books";

const Dashboard = () => {
    const [books, setBooks] = useState(BOOKS);

    const handleAddBook = (form) => {
        setBooks(prevBooks => [...prevBooks, {
            ...form,
            id: prevBooks[prevBooks.length - 1]?.id + 1
        }])
    }
    const handleDeleteBook = (id) => {
        setBooks(prevBooks => prevBooks.filter(book => book.id !== id));
    }
    return (
        <>
            <NewBook
                onAddBook={handleAddBook} />
            <BooksContainer
                books={books}
                onDeleteBook={handleDeleteBook} />
        </>
    )
}

export default Dashboard