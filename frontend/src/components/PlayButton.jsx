import { useState, useEffect } from "react";
import playSVG from "../assets/play.svg";
import pauseSVG from "../assets/pause.svg";

export default function PlayButton({ previewUrl }) {
  const [audio, setAudio] = useState(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    // Create a new Audio object only once when the component mounts
    const newAudio = new Audio(previewUrl);
    newAudio.onended = () => setPlaying(false); // Handle when the audio finishes playing
    setAudio(newAudio);

    // Clean up the audio object when the component unmounts
    return () => {
      newAudio.pause();
      setAudio(null);
    };
  }, []);

  const togglePlay = () => {
    if (audio) {
      if (!playing) {
        audio.play();
        setPlaying(true);
      } else {
        audio.pause();
        setPlaying(false);
      }
    }
  };
  if (!previewUrl) {
    return null;
  }
  return (
    <button
      style={{ background: "none", border: "none" }}
      onClick={togglePlay}
      className="m-2"
    >
      <img
        src={playing ? pauseSVG : playSVG}
        alt={playing ? "Pause" : "Play"}
        style={{ width: "35px", height: "35px" }}
      />
    </button>
  );
}
