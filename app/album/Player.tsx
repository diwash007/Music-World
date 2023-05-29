import React from "react";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import {
  MdRepeat,
  MdShuffle,
  MdSkipNext,
  MdSkipPrevious,
} from "react-icons/md";

function Player({
  isPlaying,
  handlePlay,
}: {
  isPlaying: boolean;
  handlePlay: () => void;
}) {
  return (
    <div className="fixed bottom-0 h-16 left-0 w-screen bg-white border border-t-2 flex justify-center items-center gap-3 animate-reveal">
      <MdShuffle size={20} />
      <MdSkipPrevious size={30} />
      {isPlaying ? (
        <FaPauseCircle
          size={40}
          className="text-primary cursor-pointer"
          onClick={handlePlay}
        />
      ) : (
        <FaPlayCircle
          size={40}
          className="text-primary cursor-pointer"
          onClick={handlePlay}
        />
      )}
      <MdSkipNext size={30} />
      <MdRepeat size={20} />
    </div>
  );
}

export default Player;
