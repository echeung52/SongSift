import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Form, InputGroup } from "react-bootstrap";

export default function SearchBar({ setSearchedSongs }) {
  const [input, setInput] = useState("");

  const getSongs = async () => {
    try {
      if (input !== "") {
        const { data } = await axios.get(
          `https://www.song-sift.com/api/search/${input}`
        );
        setSearchedSongs(data);
      }
    } catch (error) {
      console.error("Error searching for songs: ", error);
    }
  };

  return (
    <InputGroup className="mb-3">
      <Form.Control
        placeholder="Search for song"
        onChange={(e) => {
          setInput(e.target.value);
        }}
        value={input}
      />
      <Button variant="outline-secondary" id="button-addon2" onClick={getSongs}>
        Search
      </Button>
    </InputGroup>
  );
}
