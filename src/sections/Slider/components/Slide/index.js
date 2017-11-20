import React, { Component } from 'react';
import css from './styles.scss';
import {string} from 'prop-types';
//My Component
import Card from 'components/Card';
import sliderImg from 'assets/img/slider.jpg';


class Slide extends Component {
  static propTypes = {
    title: string,
    content: string
  }

  render() {
    return (
      <div className={css.component}>
        <div className='img' style={{backgroundImage: `url(${sliderImg})`}}/>
        <div className='contentColumn'>
          <div className='title' dangerouslySetInnerHTML={{__html: this.props.title}}/>
          <Card withoutParallax {...this.props}/>
        </div>
      </div>
    );
  }
}
export default Slide
