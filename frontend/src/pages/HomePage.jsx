import { useState, useEffect } from "react";
import { Row, Col, Container, Alert } from "react-bootstrap";
import Loader from "../components/Loader";
import SearchBar from "../components/SearchBar";
import SearchSongCard from "../components/SearchSongCard";
import { useSelector } from "react-redux";

export default function HomePage() {
  const [songs, setSearchedSongs] = useState([]);
  const { loading, searchedSongs, error } = useSelector(
    (state) => state.searchedSongs
  );

  return (
    <>
      <h2 className="text-center">SongSift</h2>
      <p className="text-center">
        Search for your favorite track and you will find new songs you will
        love!{" "}
      </p>
      <SearchBar setSearchedSongs={setSearchedSongs} />
      <div>
        <Row>
          {loading ? (
            error ? (
              <Alert variant="danger">{error}</Alert>
            ) : (
              <Loader />
            )
          ) : (
            searchedSongs &&
            searchedSongs.map((song) => (
              <Col key={song.id} sm={12} md={6} lg={4} xl={3}>
                <Container className="d-flex justify-content-center">
                  <SearchSongCard song={song} />
                </Container>
              </Col>
            ))
          )}
        </Row>
      </div>
    </>
  );
}
