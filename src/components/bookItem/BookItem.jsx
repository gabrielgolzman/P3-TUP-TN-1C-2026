import { useState } from "react";
import { Badge, Button, Card } from "react-bootstrap";
import classNames from "classnames";
import { decidePlural } from "./BookItem.helpers";
import styles from "./BookItem.module.css";

const BookItem = ({
  title,
  author,
  pageCount,
  rating,
  available,
  imageUrl,
  isSelected,
  onSelectBook
}) => {
  const [bookAvailability, setBookAvailability] = useState(available);

  const handleSelectBook = () => {
    onSelectBook(title);
  };

  const handleChangeAvailability = () => {
    setBookAvailability((prevBookAvailability) => !prevBookAvailability);
  };

  return (
    <Card className={classNames(
      "mx-3",
      styles.card,
      isSelected ? "border border-2 border-primary" : ""
    )}>
      <div className={styles.imageWrapper}>
        <Card.Img
          className={styles.image}
          src={
            imageUrl
              ? imageUrl
              : "https://images.pexels.com/photos/35098074/pexels-photo-35098074.jpeg"
          }
          alt={title}
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
        <Card.Title className={styles.title}>{title}</Card.Title>
        <Card.Subtitle className={styles.author}>{author}</Card.Subtitle>
        <div>
          {rating} estrella{decidePlural(rating)}
        </div>
        <p className={styles.pageCount}>
          {pageCount} página{decidePlural(pageCount)}
        </p>
        <Button onClick={handleSelectBook} className={styles.button}>
          Seleccionar libro
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
