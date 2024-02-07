import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Alert, Container } from "react-bootstrap";
import RecSongCard from "../components/RecSongCard";
import Loader from "../components/Loader";
import { getRecommendations } from "../actions/RecommendationActions";
import { useDispatch, useSelector } from "react-redux";

export default function RecommendationsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, songRecommendations, error } = useSelector(
    (state) => state.recommendations
  );

  useEffect(() => {
    dispatch(getRecommendations(id));
    console.log(songRecommendations);
  }, [dispatch, id]);

  return (
    <>
      <Row>
        {loading ? (
          <Loader />
        ) : error ? (
          <Alert variant="danger">{error}</Alert>
        ) : (
          songRecommendations &&
          songRecommendations.map((song) => (
            <Col key={song.id} sm={12} md={6} lg={4} xl={3}>
              <Container className="d-flex justify-content-center">
                <RecSongCard song={song} />
              </Container>
            </Col>
          ))
        )}
      </Row>
    </>
  );
}
