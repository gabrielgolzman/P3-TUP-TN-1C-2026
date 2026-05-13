import { Form } from "react-bootstrap"

const BooksSearch = ({ onSearch }) => {

    return (
        <Form.Group clasName="mb-3" controlId="searchBook">
            <Form.Control
                type="text"
                placeholder="Buscar libro..."
                onChange={(event) => onSearch(event.target.value)} />
        </Form.Group>
    )
}

export default BooksSearch