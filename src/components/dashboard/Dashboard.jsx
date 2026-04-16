import { useState } from "react";
import BooksContainer from "../booksContainer/BooksContainer"
import NewBook from "../newBook/NewBook"
import { BOOKS } from "../../data/books";
import { Button } from "react-bootstrap";

const Dashboard = ({ onLogout }) => {
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

    const handleLogout = () => {
        onLogout()
    }
    return (
        <>
            <div className="w-100 d-flex justify-content-center mt-3 ">
                <Button onClick={handleLogout}>Cerrar sesión</Button>
            </div>
            <NewBook
                onAddBook={handleAddBook} />
            <BooksContainer
                books={books}
                onDeleteBook={handleDeleteBook} />
        </>
    )
}

export default Dashboard