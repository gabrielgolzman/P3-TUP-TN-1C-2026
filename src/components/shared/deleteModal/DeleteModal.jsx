import { Modal, Button } from "react-bootstrap"

const DeleteModal = ({ show, book, onHide, onDeleteBook }) => {
    const handleDelete = () => {
        onDeleteBook(book.id);
        onHide();
    }
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Eliminar libro</Modal.Title>
            </Modal.Header>
            <Modal.Body>¿Está seguro que desea eliminar el libro <b>{book.title}</b>?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Cancelar
                </Button>
                <Button variant="danger" onClick={handleDelete}>
                    Si, deseo eliminarlo
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default DeleteModal