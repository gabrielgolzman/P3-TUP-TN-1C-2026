import { useState } from "react";
import { Badge, Button, Card } from "react-bootstrap";
import classNames from "classnames";
import styles from "./BookItem.module.css";

const BookItem = ({
  title,
  author,
  pageCount,
  rating,
  available,
  imageUrl,
}) => {
  const [bookTitle, setBookTitle] = useState(title);
  const [bookAvailability, setBookAvailability] = useState(available);

  const handleChangeTitle = () => {
    setBookTitle("¡Título actualizado!");
  };

  const handleChangeAvailability = () => {
    setBookAvailability((prevBookAvailability) => !prevBookAvailability);
  };

  return (
    <Card className={classNames("mx-3", styles.card)}>
      <div className={styles.imageWrapper}>
        <Card.Img
          className={styles.image}
          src={
            imageUrl
              ? imageUrl
              : "https://images.pexels.com/photos/35098074/pexels-photo-35098074.jpeg"
          }
          alt={bookTitle}
        />
      </div>
      <Card.Body>
        {bookAvailability ? (
          <Badge bg="success" className={styles.badge}>
            Disponible
          </Badge>
        ) : (
          <Badge bg="danger" className={styles.badge}>
            No disponible
          </Badge>
        )}
        <Card.Title className={styles.title}>{bookTitle}</Card.Title>
        <Card.Subtitle className={styles.author}>{author}</Card.Subtitle>
        <div>
          {rating} estrella{rating !== 1 ? "s" : ""}
        </div>
        <p className={styles.pageCount}>
          {pageCount} página{pageCount !== 1 ? "s" : ""}
        </p>
        <Button onClick={handleChangeTitle} className={styles.button}>
          Actualizar título
        </Button>
        <Button
          onClick={handleChangeAvailability}
          variant="secondary"
          className="mt-3"
        >
          Cambiar disponibilidad
        </Button>
      </Card.Body>
    </Card>
  );
};

export default BookItem;
