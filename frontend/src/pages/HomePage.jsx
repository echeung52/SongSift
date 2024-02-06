import { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import SearchBar from "../components/SearchBar";
import SearchSongCard from "../components/SearchSongCard";

export default function HomePage() {
  const [searchedSongs, setSearchedSongs] = useState([]);

  useEffect(() => {
    const searchedSongs = JSON.parse(localStorage.getItem("searchedSongs"));
    if (searchedSongs) {
      setSearchedSongs(searchedSongs);
    }
  }, []);
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
          {searchedSongs &&
            searchedSongs.map((song) => (
              <Col key={song.id} sm={12} md={6} lg={4} xl={3}>
                <Container className="d-flex justify-content-center">
                  <SearchSongCard song={song} />
                </Container>
              </Col>
            ))}
        </Row>
      </div>
    </>
  );
}
