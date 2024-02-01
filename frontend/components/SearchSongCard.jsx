import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function SongCard({ song }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/recommend/${song.id}`);
  };

  return (
    <Card className="mb-4" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={song.image} />
      <Card.Body>
        <Card.Title>{song.name}</Card.Title>
        <Card.Text>{song.artist_name}</Card.Text>
        <Button variant="primary" onClick={handleClick}>
          Find Similar Songs
        </Button>
      </Card.Body>
    </Card>
  );
}
