import { useState } from "react";
import { Badge, Button, Card } from "react-bootstrap";
import classNames from "classnames";
import { componentArray, decidePlural } from "./BookItem.helpers";
import styles from "./BookItem.module.css";
import { Star, StarFill } from "react-bootstrap-icons";

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

  const bookStars = componentArray(rating, <StarFill />)

  const bookStarsEmpty = componentArray(5 - rating, <Star />)

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
          {bookStars}{bookStarsEmpty}
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
        <Button className="mt-3 mx-2" variant="danger">
          Eliminar libro
        </Button>
      </Card.Body>
    </Card>
  );
};

export default BookItem;
