import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { storeSelectedSong } from "../actions/SongSearchActions";
import { useDispatch } from "react-redux";

export default function SongCard({ song }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(storeSelectedSong(song));
    navigate(`/recommend/${song.id}`);
  };

  return (
    <Card className="mb-4 text-center">
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
