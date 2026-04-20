
import { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { initialForm } from "./NewBook.data";
import { useNavigate } from "react-router";

const NewBook = ({ onAddBook }) => {
    const [form, setForm] = useState(initialForm);

    const navigate = useNavigate();

    const handleChangeFormAttribute = (event, attr) => {
        setForm((prevForm) => ({
            ...prevForm,
            [attr]: event.target.value
        }))
    }

    const handleChangeAvailablility = (event) => {
        setForm((prevForm) => ({
            ...prevForm,
            available: event.target.checked
        }))
    }

    const handleGoBack = () => {
        navigate("/library")
    }

    const handleAddNewBook = (event) => {
        event.preventDefault();
        onAddBook(form);
        setForm(initialForm)
    }

    return (
        <Card className="m-4 w-50" bg="success">
            <Card.Body>
                <Form className="text-white" onSubmit={handleAddNewBook}>
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="title">
                                <Form.Label>Título</Form.Label>
                                <Form.Control
                                    value={form.title}
                                    onChange={(event) => handleChangeFormAttribute(event, "title")}
                                    type="text"
                                    placeholder="Ingresar título" />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="author">
                                <Form.Label>Autor</Form.Label>
                                <Form.Control
                                    value={form.author}
                                    onChange={(event) => handleChangeFormAttribute(event, "author")}
                                    type="text"
                                    placeholder="Ingresar autor" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="rating">
                                <Form.Label>Puntuación</Form.Label>
                                <Form.Control
                                    value={form.rating}
                                    onChange={(event) => handleChangeFormAttribute(event, "rating")}
                                    type="number"
                                    placeholder="Ingresar cantidad de estrellas"
                                    max={5}
                                    min={0}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="pageCount">
                                <Form.Label>Cantidad de páginas</Form.Label>
                                <Form.Control
                                    value={form.pageCount}
                                    onChange={(event) => handleChangeFormAttribute(event, "pageCount")}
                                    type="number"
                                    placeholder="Ingresar cantidad de páginas"
                                    min={1}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="justify-content-between">
                        <Form.Group className="mb-3" controlId="imageUrl">
                            <Form.Label>URL de imagen</Form.Label>
                            <Form.Control
                                value={form.imageUrl}
                                onChange={(event) => handleChangeFormAttribute(event, "imageUrl")}
                                type="text"
                                placeholder="Ingresar url de imagen" />
                        </Form.Group>
                    </Row>
                    <Row className="justify-content-end">
                        <Col md={3} className="d-flex flex-column justify-content-end align-items-end">
                            <Form.Check
                                value={form.available}
                                onChange={handleChangeAvailablility}
                                type="switch"
                                id="available"
                                className="mb-3"
                                label="¿Disponible?"
                            />
                            <div className="d-flex gap-2 mb-1">
                                <Button variant="secondary" onClick={handleGoBack}>
                                    Volver
                                </Button>
                                <Button variant="primary" type="submit">
                                    Agregar lectura
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>
    );
};


export default NewBook;
