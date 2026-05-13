
import { useNavigate, useParams } from "react-router";

import { Badge, Button, Card } from "react-bootstrap";
import { Star, StarFill } from "react-bootstrap-icons";
import { useEffect, useState } from "react";
import { initialForm } from "../newBook/NewBook.data";
import NewBook from "../newBook/NewBook";
import { successToast } from "../../shared/toast/toast";

const BookDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [book, setBook] = useState(initialForm);
    const [showForm, setShowForm] = useState(false);

    const { title, author, available, imageUrl, pageCount, rating, summary } = book
    useEffect(() => {
        fetch(`http://localhost:3000/books/${id}`)
            .then(res => res.json())
            .then(book => setBook(book))
            .catch(err => console.log(err))
    }, [id]);


    const clickHandler = () => {
        navigate("/library");
    };

    const handleShowForm = () => {
        setShowForm(true)
    }

    const handleEditBook = (form) => {
        fetch(`http://localhost:3000/books/${id}`, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("book-champions-token")}`,
            },
            method: "PUT",
            body: JSON.stringify(form)
        })
            .then(() => {
                setBook((prevBook) => ({ ...prevBook, ...form }))
                successToast(`Libro ${title} actualizado correctamente`)
                setShowForm(false);
            })
            .catch()
    }

    const ratingStars = Array.from({ length: 5 }, (_, index) =>
        index < rating ? <StarFill key={index} /> : <Star key={index} />
    );

    return (
        <>
            <Card className="my-3 w-25">
                <Card.Img
                    height={500}
                    variant="top"
                    src={imageUrl !== "" ? imageUrl : "https://bit.ly/47NylZk"}
                />
                <Card.Body>
                    <div className="mb-2">
                        {available ?
                            <Badge bg="success">Disponible</Badge>
                            :
                            <Badge bg="danger">Reservado</Badge>
                        }
                    </div>
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle>{author}</Card.Subtitle>
                    {ratingStars}
                    <p>{pageCount} páginas</p>
                    <p className="my-3">
                        <b>Sinopsis</b>: {summary}
                    </p>
                    <Button className="me-2" onClick={clickHandler}>
                        Volver a la página principal
                    </Button>
                    <Button type="button" variant="secondary" className="me-2" onClick={handleShowForm}>
                        Editar
                    </Button>
                </Card.Body>
            </Card>
            {showForm && <NewBook
                book={book}
                onFormClosed={() => setShowForm(false)}
                onEditBook={handleEditBook} />}
        </>
    );
};


export default BookDetails;
