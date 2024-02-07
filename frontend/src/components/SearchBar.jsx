import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Form, InputGroup } from "react-bootstrap";
import { getSongs } from "../actions/SongSearchActions";
import { useDispatch } from "react-redux";

export default function SearchBar() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      dispatch(getSongs(input));
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
      <Button
        variant="outline-secondary"
        id="button-addon2"
        onClick={() => {
          dispatch(getSongs(input));
        }}
      >
        Search
      </Button>
    </InputGroup>
  );
}
