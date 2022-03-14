import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import "./carousel.scss"

export default class extends React.Component {
  render() {
    return (
      <div>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={100}
          totalSlides={3}
        >
          <Slider>
            <Slide index={0}>
              <img className='slider-first' src="https://promo-theme.com/plaxer/wp-content/uploads/2019/12/bg.jpg" alt='' />
              <div className='component-of-carousel'>
                <h2 className='h2-text'>
                  <p className='number-of-cart pb-3'>01</p>Games with idea & <br /> memorable design.
                </h2>
                <button className='btn-first-carousel-section'>Watch Now</button>
              </div>
            </Slide>
            <Slide index={1}>
              <img className='slider-second' src='img/robo.jpg' alt='' />
              <div className='component-of-carousel'>
                <h2 className='h2-text'>
                  <p className='number-of-cart'>02</p>The New Game & <br /> awesome concept.
                </h2>
                <button className='btn-first-carousel-section'>Watch Now</button>
              </div>
            </Slide>
            <Slide index={2}>
              <img className='slider-third' src='img/tank.jpg' alt='' />
              <div className='component-of-carousel'>
                <h2 className='h2-text'>
                  <p className='number-of-cart'>03</p>Play with us in <br /> all new games.
                </h2>
                <button className='btn-first-carousel-section'>Watch Now</button>
              </div>
            </Slide>
          </Slider>
          <div className='two-elder-childs'>
            <ButtonBack className='btn-back noselect buttons'><spam>←</spam></ButtonBack>
            <ButtonNext className='btn-next noselect button'><spam>→</spam></ButtonNext>
          </div>
        </CarouselProvider>
      </div>
    );
  }
}