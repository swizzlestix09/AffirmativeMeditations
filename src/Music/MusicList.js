import React, { useState } from "react";
import useSound from "use-sound";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Sound from "react-sound";
import SingingBowl from "../sounds/himalayan-singing-bowl-10.mp3";
import DaStreets from "../sounds/westvillagenyc.mp3";
import Nature from "../sounds/cuckoo-the-nightingale-duet.mp3";
import Ocean from "../sounds/ocean-waves-between-rocks.mp3";
import Erin from "../sounds/purring-happy-cat.mp3";

const MusicList = (props) => {
  const [playSingB, setPlayingSingB] = useState(false);
  const [playingDSts, setPlayingDsts] = useState(false);
  const [playingNat, setPlayingNat] = useState(false);
  const [playingOc, setPlayingOc] = useState(false);
  const [playingErin, setPlayingErin] = useState(false);
  const [song, setSong] = useState("");
  const [play, { stop }] = useSound(song);

  return (
    <div className="musicContainer">
      <Button
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
        onMouseDown={() => setSong(Nature)}
        onClick={() => {
          playingNat ? stop() : play();
          setPlayingNat(!playingNat);
        }}
      >
       Nature
      </Button>
      <Button
        className="song"
        onMouseDown={() => setSong(Ocean)}
        onClick={() => {
          playingOc ? stop() : play();
          setPlayingOc(!playingOc);
        }}
      >
       Ocean
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
