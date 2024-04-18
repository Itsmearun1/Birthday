import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './Carousel.css'
const fadeImages = [
  { url: 'https://raw.githubusercontent.com/Itsmearun1/Birthday/main/src/assets/1.jpg', caption: 'First Slide' },
  { url: 'https://raw.githubusercontent.com/Itsmearun1/Birthday/main/src/assets/2.jpg', caption: 'Second Slide' },
  { url: 'https://raw.githubusercontent.com/Itsmearun1/Birthday/main/src/assets/3.jpg', caption: 'Third Slide' },
  { url: 'https://raw.githubusercontent.com/Itsmearun1/Birthday/main/src/assets/4.jpg', caption: 'Fourth Slide' },
  { url: 'https://raw.githubusercontent.com/Itsmearun1/Birthday/main/src/assets/5.jpg', caption: 'Fifth Slide' },
  { url: 'https://raw.githubusercontent.com/Itsmearun1/Birthday/main/src/assets/6.jpg', caption: 'Sixth Slide' },
  { url: 'https://raw.githubusercontent.com/Itsmearun1/Birthday/main/src/assets/7.jpg', caption: 'Seventh Slide' },
  { url: 'https://raw.githubusercontent.com/Itsmearun1/Birthday/main/src/assets/8.jpg', caption: 'Eighth Slide' },
  { url: 'https://raw.githubusercontent.com/Itsmearun1/Birthday/main/src/assets/9.jpg', caption: 'Ninth Slide' },
  { url: 'https://raw.githubusercontent.com/Itsmearun1/Birthday/main/src/assets/10.jpg', caption: 'Tenth Slide' },
  { url: 'https://raw.githubusercontent.com/Itsmearun1/Birthday/main/src/assets/11.jpg', caption: 'Eleventh Slide' },
  { url: 'https://raw.githubusercontent.com/Itsmearun1/Birthday/main/src/assets/12.jpg', caption: 'Twelfth Slide' },
  { url: 'https://raw.githubusercontent.com/Itsmearun1/Birthday/main/src/assets/13.jpg', caption: 'Thirteenth Slide' }
];



const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div key={index} className='parent'>
            <img style={{ width: '20%' }} src={fadeImage.url} />
          </div>
        ))}
      </Fade>
    </div>
  )
}
export default  Slideshow;