import { Badge, Button, Card } from "react-bootstrap";
import styles from "./BookItem.module.css";

const BookItem = ({ title, author, pageCount, rating, available, imageUrl }) => {
  const stars = "★".repeat(rating) + "☆".repeat(5 - rating);

  return (
    <Card className={`mx-3 ${styles.card}`}>
      <div className={styles.imageWrapper}>
        <img
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
        {available ? (
          <Badge bg="success" className={styles.badge}>Disponible</Badge>
        ) : (
          <Badge bg="danger" className={styles.badge}>No disponible</Badge>
        )}
        <Card.Title className={styles.title}>{title}</Card.Title>
        <Card.Subtitle className={styles.author}>{author}</Card.Subtitle>
        <div className={styles.stars}>{stars}</div>
        <p className={styles.pageCount}>
          {pageCount} página{pageCount !== 1 ? "s" : ""}
        </p>
        <Button className={styles.button}>Actualizar título</Button>
      </Card.Body>
    </Card>
  );
};

export default BookItem;
