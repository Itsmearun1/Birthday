import React, { useEffect } from "react";
import "./MainPage.css";
import Slideshow from "./Carousel";

const backgroundMusicUrl =
  "https://github.com/Itsmearun1/Birthday/raw/main/src/assets/ALICE%20birthday%20song%20%20Happy%20Birthday%20Alice.mp3";
function MainPage() {
  useEffect(() => {
    const audio = new Audio(backgroundMusicUrl);
    audio.loop = true;
    audio.play();

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  return (
    <div className="main-page">
      <div className="wishcard">
        <h1 className="wish">Happy Birthday Al, I Loveee You!</h1>
        <p>
          I hope you see things that startle you. I hope you feel things you
          never felt before. I hope you meet people with a different point of
          view. I hope you live a life you're proud of. If you find that you're
          not, I hope you have the strength to start all over again.
        </p>
        <p></p>
      </div>
      <Slideshow />
    </div>
  );
}

export default MainPage;
