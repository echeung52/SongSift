import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Form, InputGroup } from "react-bootstrap";

export default function SearchBar({ setSearchedSongs }) {
  const [input, setInput] = useState("");

  useEffect(() => {
    const input = localStorage.getItem("searchInput");
    if (input) {
      setInput(input);
    }
  }, []);

  const getSongs = async () => {
    try {
      if (input !== "") {
        const { data } = await axios.get(
          `https://www.song-sift.com/api/search/${input}`
        );
        setSearchedSongs(data);
        localStorage.setItem("searchInput", input);
        localStorage.setItem("searchedSongs", JSON.stringify(data));
      }
    } catch (error) {
      console.error("Error searching for songs: ", error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      getSongs();
    }
  };
  return (
    <InputGroup className="mb-3 mt-3">
      <Form.Control
        placeholder="Search for song"
        onChange={(e) => {
          setInput(e.target.value);
        }}
        onKeyDown={handleKeyPress}
        value={input}
      />
      <Button variant="outline-secondary" id="button-addon2" onClick={getSongs}>
        Search
      </Button>
    </InputGroup>
  );
}
