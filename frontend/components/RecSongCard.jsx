import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function RecSongCard({ song }) {
  return (
    <Card className="mb-4" style={{ width: "18rem" }}>
      <Link to={song.external_url}>
        <Card.Img variant="top" src={song.images[0]} />
      </Link>
      <Card.Body>
        <Card.Title>{song.name}</Card.Title>
        <Card.Text>{song.artist_name}</Card.Text>
      </Card.Body>
    </Card>
  );
}
