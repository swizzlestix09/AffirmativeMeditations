import React, { useState } from "react";
import useSound from "use-sound";
import Button from "@material-ui/core/Button";
import SingingBowl from "../sounds/himalayan-singing-bowl-10.mp3";
import DaStreets from "../sounds/westvillagenyc.mp3";
import Erin from "../sounds/purring-happy-cat.mp3";

const MusicList = (props) => {
  const [playSingB, setPlayingSingB] = useState(false);
  const [playingDSts, setPlayingDsts] = useState(false);
  const [playingErin, setPlayingErin] = useState(false);
  const [song, setSong] = useState("");
  const [play, { stop }] = useSound(song);

  return (
    <div className="musicContainer" allow="autoplay">
      <Button allow="autoplay"
        className="song"
        onMouseDown={() => setSong(SingingBowl)}
        onClick={() => {
          playSingB ? stop() : play();
          setPlayingSingB(!playSingB);
        }}
      >
        SingingBowl
      </Button>
      <Button
        className="song"
        onMouseDown={() => setSong(DaStreets)}
        onClick={() => {
          playingDSts ? stop() : play();
          setPlayingDsts(!playingDSts);
        }}
      >
        Da Streets
      </Button>
      <Button
        className="song"
        onMouseDown={() => setSong(Erin)}
        onClick={() => {
          playingErin ? stop() : play();
          setPlayingErin(!playingErin);
        }}
      >
       Erin
      </Button>
    </div>
  );
};

export default MusicList;
