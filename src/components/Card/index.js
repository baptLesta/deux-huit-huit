import React, { Component } from 'react';
import css from './styles.scss';
import {string, object, bool} from 'prop-types';
import Arrow from 'components/Arrow';
import ScrollAnim from 'rc-scroll-anim';

const Parallax = ScrollAnim.Parallax;

class Card extends Component {
  static propTypes = {
    content: string.isRequired,
    arrow: object,
    withoutParallax: bool
  }

  static defaultProps = {
    withoutParallax: false
  }

  constructor(props) {
    super();
  }

  render() {
    if (this.props.withoutParallax) {
      return (
        <div className={css.component}>
            <div className='content' dangerouslySetInnerHTML={{__html: this.props.content}}/>
            <Arrow {...this.props.arrow}/>
        </div>
      )
    } else {
      return (
        <div className={css.component}>
          <Parallax animation={{ y: 0, opacity: 1 }}style={{ transform: 'translateY(100px)', opacity: 0 }} >
            <div className='content' dangerouslySetInnerHTML={{__html: this.props.content}}/>
            <Arrow {...this.props.arrow}/>
          </Parallax>
        </div>

      )
    }
  }
}
export default Card
