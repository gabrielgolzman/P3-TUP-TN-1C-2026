import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router";
import { Button } from "react-bootstrap";
import { successToast } from "../toast/toast";
import BooksContainer from "../booksContainer/BooksContainer"
import NewBook from "../newBook/NewBook"
import NotFound from "../routes/notFound/NotFound";
import BookDetails from "../bookDetails/BookDetails";

const Dashboard = ({ onLogout }) => {
    const [books, setBooks] = useState([]);

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        fetch("http://localhost:3000/books")
            .then(res => res.json())
            .then(data => setBooks([...data]))
            .catch(error => console.log(error));
    }, [])

    const handleNavigateAddBook = () => {
        navigate("/library/add-book", { replace: location.pathname === "/library/add-book" })
    }

    const handleAddBook = (form) => {
        fetch("http://localhost:3000/books", {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(form)
        })
            .then(res => res.json())
            .then((id) => {
                setBooks(prevBooks => [{
                    ...form,
                    id,
                }, ...prevBooks]);
                successToast(`¡Libro ${form.title} agregado correctamente!`);
                navigate("/", { replace: true })
            })
            .catch(err => console.log(err))
    }
    const handleDeleteBook = (id) => {
        fetch(`http://localhost:3000/books/${id}`, {
            headers: {
                "Content-Type": "application/json"
            },
            method: "DELETE"
        })
            .then(() => {
                setBooks(prevBooks => prevBooks.filter(book => book.id !== id));
                successToast("El libro se elimino correctamente")
            })
            .catch(err => console.log(err))
    }

    const handleLogout = () => {
        onLogout()
    }
    return (

        <>
            <div className="w-100 d-flex justify-content-end my-3 px-3 gap-2">
                <Button variant="success" onClick={handleNavigateAddBook}>Agregar libro</Button>
                <Button onClick={handleLogout}>Cerrar sesión</Button>
            </div>
            <Routes >
                <Route index element={<BooksContainer books={books}
                    onDeleteBook={handleDeleteBook} />} />
                <Route path="/add-book" element={<NewBook
                    onAddBook={handleAddBook} />} />
                <Route path="/:id" element={<BookDetails />} />
                <Route path="*" element={<NotFound />} />
            </Routes>


        </>
    )
}

export default Dashboard