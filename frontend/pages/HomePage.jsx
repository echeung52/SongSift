import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import SearchBar from "../components/SearchBar";
import SearchSongCard from "../components/SearchSongCard";

export default function HomePage() {
  const [searchedSongs, setSearchedSongs] = useState([]);
  return (
    <>
      <SearchBar setSearchedSongs={setSearchedSongs} />
      <Row>
        {searchedSongs &&
          searchedSongs.map((song) => (
            <Col key={song.id} sm={12} md={6} lg={4} xl={3}>
              <SearchSongCard song={song} />
            </Col>
          ))}
      </Row>
    </>
  );
}
