import React, { Component } from 'react';
import css from './styles.scss';
import {} from 'prop-types';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import TweenOne from 'rc-tween-one';
//My Component
import Slide from './components/Slide';
//Data
import {slides} from 'assets/fr/slider.json';

class Slider extends Component {
  settings = {
    showArrows: false,
    showStatus: false,
    autoPlay: true,
    showThumbs: false,
    swipeScrollTolerance: 7
  }

  constructor(props) {
    super();
  }

  render() {
    return (
      <div className={css.component}>
        <TweenOne animation={{ y: 0, opacity: 1 }} key="1" style={{ transform: 'translateY(100px)', opacity: 0 }}>
          <Carousel {...this.settings}>
            <Slide {...slides[0]} />
            <Slide {...slides[1]} />
            <Slide {...slides[2]} />
            <Slide {...slides[0]} />
            <Slide {...slides[0]} />
          </Carousel>
        </TweenOne>
      </div>
    );
  }
}
export default Slider
