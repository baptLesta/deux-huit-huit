import React, { Component } from 'react';
import css from './styles.scss';
import {string} from 'prop-types';

import tonneauImg from 'assets/img/tonneau.jpg';
import mountainImg from 'assets/img/moutain.jpg';
import coupleImg from 'assets/img/couple.jpg';
import ScrollAnim from 'rc-scroll-anim';

const Parallax = ScrollAnim.Parallax;

class Citaion extends Component {
  static propTypes = {
    title: string,
    img: string
  }

  constructor(props) {
    super();
    let isMobile = false;
    document.body.clientWidth < 764 && (isMobile = true);
    this.state = {
      isMobile: isMobile
    }
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
        this.setState({
            isMobile: document.body.clientWidth < 764
        });
    });
  }

  get settingsStartAnimation () {
    if (!this.state.isMobile) {
      return (
        {transform: 'translateY(100px)'}      )
    } else {
      return (
          { transform: 'translateY(50px)', playScale: [-1, 1] }
      )
    }
  }

  /**
   * Get Background Image of the instance of the card
   * @return {string} [description]
   */
  get img() {
    let img;
    this.props.img === 'mountain'
      && (img = mountainImg);
    this.props.img === 'tonneau'
        && (img = tonneauImg);
    this.props.img === 'couple'
        && (img = coupleImg);
    return img;
  }

  /**
   * Get  all Classes of the block
   * @return {string}
   */
  get class () {
    return (
      this.props.withMargin
      ? [css.component, 'withMargin'].join(' ')
      : css.component
    )
  }

  render() {
    return (
      <div className={this.class} style={{backgroundImage: `url(${this.img})`}} >
        <Parallax animation={{ y: 0}} key="1" style={this.settingsStartAnimation}>
          <div className='' dangerouslySetInnerHTML={{__html: this.props.title}}/>
        </Parallax>
      </div>
    );
  }
}
export default Citaion
