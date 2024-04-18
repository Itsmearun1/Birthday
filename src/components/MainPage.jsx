import React, { useEffect } from "react";
import "./MainPage.css";
import Slideshow from "./Carousel";

const backgroundMusicUrl = "https://raw.githubusercontent.com/your-username/your-repository-name/master/background_music.mp3";

function MainPage() {
  useEffect(() => {
    const audio = new Audio(backgroundMusicUrl);
    audio.loop = true;
    audio.play();

    return () => {
      // Clean up the audio when the component unmounts
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  return (
    <div className="main-page">
      <div className="wishcard">
        <h1 className="wish">Happy Birthday to you Al!</h1>
      </div>

      <Slideshow />
    </div>
  );
}

export default MainPage;
