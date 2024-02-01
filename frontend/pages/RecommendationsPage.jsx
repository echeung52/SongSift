import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import RecSongCard from "../components/RecSongCard";

export default function RecommendationsPage() {
  const { id } = useParams();
  const [recommendations, setRecommendations] = useState([]);

  const getRecommendations = async () => {
    try {
      const { data } = await axios.get(
        `http://127.0.0.1:8000/api/recommendations/?q=${id}`
      );
      setRecommendations(data);
    } catch (error) {
      console.error("Error searching for songs: ", error);
    }
  };
  useEffect(() => {
    getRecommendations();
  }, []);

  return (
    <>
      <Link to="/" className="btn btn-primary my-3">
        Back
      </Link>
      <Row>
        {recommendations &&
          recommendations.map((song) => (
            <Col key={song.id} sm={12} md={6} lg={4} xl={3}>
              <RecSongCard song={song} />
            </Col>
          ))}
      </Row>
    </>
  );
}
