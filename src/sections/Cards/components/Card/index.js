import React, { Component } from 'react';
import css from './styles.scss';
import {string} from 'prop-types';

import giftImage from 'assets/img/cards/wiskhy.png';
import smacImg from 'assets/img/cards/velo.png';
import ginImg from 'assets/img/cards/gin.png';

class Card extends Component {
  static propTypes = {
    content: string,
    title: string,
    img: string,
    link: string
  }
  
  constructor(props) {
    super();
  }

  get img() {
    let img;
    this.props.img === 'gift'
      && (img = giftImage);
    this.props.img === 'smac'
      && (img = smacImg);
    this.props.img === 'gin'
      && (img = ginImg);
    return img;
  }

  render() {
    return (
      <div className={css.component}>
        <div className='textContainer'>
          <div className='titleContainer'>
            <div className='title' dangerouslySetInnerHTML={{__html: this.props.title}}/>
          </div>
          <div className='content' dangerouslySetInnerHTML={{__html: this.props.content}}/>
        </div>
        <div className='imageContainer'>
          <div className='img' style={{backgroundImage: `url(${this.img})`}}/>
        </div>
      </div>
    );
  }
}
export default Card
