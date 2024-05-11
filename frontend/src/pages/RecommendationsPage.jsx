import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Alert, Container, Image, Card } from "react-bootstrap";
import RecSongCard from "../components/RecSongCard";
import Loader from "../components/Loader";
import { getRecommendations } from "../actions/RecommendationActions";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedSong } from "../actions/SongSearchActions";
import PlayButtonLarge from "../components/PlayButtonLarge";
import { Link } from "react-router-dom";

export default function RecommendationsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSelectedSong(id));
    dispatch(getRecommendations(id));
  }, [dispatch, id]);

  const { loading, songRecommendations } = useSelector(
    (state) => state.recommendations
  );

  const {
    loading: selectedLoading,
    song,
    error,
  } = useSelector((state) => state.selectedSong);

  return (
    <>
      {selectedLoading === undefined || selectedLoading == true ? (
        <></>
      ) : error ? (
        <Alert>{error}</Alert>
      ) : (
        <Card className="mb-4">
          <Row className="align-items-center">
            <Col sm={6} md={3}>
              <Link to={song.trackData.external_url}>
                <Card.Img
                  src={song.trackData.image}
                  style={{ width: "100%", height: "auto" }}
                />
              </Link>
            </Col>
            <Col sm={6} md={4}>
              <p>SONGS SIMILAR TO</p>
              <h1>{song.trackData.name}</h1>
              <p>by {song.trackData.artist_name}</p>
            </Col>
            <Col className="d-flex justify-content-end">
              <PlayButtonLarge previewUrl={song.trackData.preview_url} />
            </Col>
          </Row>
        </Card>
      )}
      {loading ? (
        <Loader />
      ) : error ? (
        <Alert>{error}</Alert>
      ) : (
        <Row>
          {songRecommendations &&
            songRecommendations.map((recommendation) => (
              <Col key={recommendation.id} sm={12} md={6} lg={4} xl={3}>
                <Container className="d-flex justify-content-center">
                  <RecSongCard song={recommendation} />
                </Container>
              </Col>
            ))}
        </Row>
      )}
    </>
  );
}
