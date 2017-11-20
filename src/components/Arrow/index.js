import React, { Component } from 'react';
import css from './styles.scss';
import {string} from 'prop-types';
import {Link} from 'react-router-dom';
import {Linear, TimelineLite, TweenMax} from 'gsap';

class Arrow extends Component {
  static propTypes = {
    text: string
  }

  isHover = false;

  constructor(props) {
    super();
  }

  componentDidMount() {
    this.intervalId = setInterval(this.animateArrow, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  /**
   * Animate Arrow when Mouse Enter
   */
  handleMouseEnter = () => {
    this.isHover = true;
    TweenMax.to(this.$bar, .3, {
      width: '50px',
      ease: Linear.easeOut
    })
  }

  /**
   * Animate Arrow when Mouse Leave
   * Come Back to the initial position
   */
  handleMouseLeave = () => {
    setTimeout( () => this.isHover = false, 2000);
    TweenMax.to(this.$bar, .3, {
      width: '36px',
      ease: Linear.easeOut
    })
  }

  /**
   * Animate the arrow
   */
  animateArrow = () => {
    if (!this.isHover) {
      var tl = new TimelineLite();

      tl.to(this.$bar, .3, {
        width: '42px',
        ease: Linear.easeOut
      });
      tl.to(this.$bar, .3, {
        width: '36px',
        ease: Linear.easeOut
      })
    }
  }

  render() {
    const {
      text,
      path
    } = this.props;

    return (
      <div className={css.component}>
        <Link to={path} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
          <div className='content' dangerouslySetInnerHTML={{__html: text}} />
          <div className="arrow" >
            <div className='bar' ref={ (el) => this.$bar = el}/>
            <div className='angle' ref={ (el) => this.$angle = el}/>
          </div>
        </Link>
      </div>
    );
  }
}
export default Arrow
