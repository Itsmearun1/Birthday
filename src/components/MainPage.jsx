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
        <h1 className="wish">Happy Birthday Al🎉, I Love You!</h1>
        <p className="birthday-wish">
          Here's to another amazing year ahead, filled with lots of success,
          happiness, and beautiful moments. You truly light up my days, and I'm
          so grateful to have you in my life .
        </p>
        <p className="quote">
          <i>
            "I hope you see things that startle you. I hope you feel things you
            never felt before. I hope you meet people with a different point of
            view. I hope you live a life you're proud of. If you find that
            you're not, I hope you have the strength to start all over again."
          </i>
        </p>
      </div>
      <Slideshow />
    </div>
  );
}

export default MainPage;
