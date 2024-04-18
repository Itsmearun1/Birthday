import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './Carousel.css'
const fadeImages = [
  {
    url: 'https://raw.githubusercontent.com/Itsmearun1/Birthday/main/src/assets/IMG-20230104-WA0016.jpg',
    caption: 'First Slide'
  },
  {
    url: 'https://raw.githubusercontent.com/Itsmearun1/Birthday/main/src/assets/IMG-20230122-WA0028.jpg',
    caption: 'Second Slide'
  },
  {
    url: 'https://raw.githubusercontent.com/Itsmearun1/Birthday/main/src/assets/IMG-20230828-WA0020.jpg',
    caption: 'Third Slide'
  },
  {
    url: 'https://raw.githubusercontent.com/Itsmearun1/Birthday/main/src/assets/IMG-20230903-WA0148.jpg',
    caption: 'Fourth Slide'
  },
  {
    url: 'https://raw.githubusercontent.com/Itsmearun1/Birthday/main/src/assets/IMG-20231224-WA0050.jpg',
    caption: 'Fifth Slide'
  },
  {
    url: 'https://raw.githubusercontent.com/Itsmearun1/Birthday/main/src/assets/IMG_20230908_234953.jpg',
    caption: 'Sixth Slide'
  },
  {
    url: 'https://raw.githubusercontent.com/Itsmearun1/Birthday/main/src/assets/IMG_20240113_143324.jpg',
    caption: 'Seventh Slide'
  },
  {
    url: 'https://raw.githubusercontent.com/Itsmearun1/Birthday/main/src/assets/IMG_20240113_180729.jpg',
    caption: 'Eighth Slide'
  },
  {
    url: 'https://raw.githubusercontent.com/Itsmearun1/Birthday/main/src/assets/img1.jpg',
    caption: 'Ninth Slide'
  },
  {
    url: 'https://raw.githubusercontent.com/Itsmearun1/Birthday/main/src/assets/img2.jpg',
    caption: 'Tenth Slide'
  },
  {
    url: 'https://raw.githubusercontent.com/Itsmearun1/Birthday/main/src/assets/img3.jpg',
    caption: 'Eleventh Slide'
  }
];


const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div key={index} style={{border:"10px solid red"}} className='parent'>
            <img style={{ width: '20%' }} src={fadeImage.url} />
          </div>
        ))}
      </Fade>
    </div>
  )
}
export default  Slideshow;