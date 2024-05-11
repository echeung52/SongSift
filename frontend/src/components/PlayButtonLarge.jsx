import { useState, useEffect } from "react";
import playSVG from "../assets/play.svg";
import pauseSVG from "../assets/pause.svg";

export default function PlayButtonLarge({ previewUrl }) {
  const [audio, setAudio] = useState(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const newAudio = new Audio(previewUrl);
    newAudio.onended = () => setPlaying(false);
    setAudio(newAudio);
    console.log(previewUrl);
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
      className="m-3"
    >
      <img
        src={playing ? pauseSVG : playSVG}
        alt={playing ? "Pause" : "Play"}
        style={{ width: "75px", height: "75px" }}
      />
    </button>
  );
}
