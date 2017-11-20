import React, { Component } from 'react';
import css from './styles.scss';
import {string, object} from 'prop-types';
import Arrow from 'components/Arrow';
import ScrollAnim from 'rc-scroll-anim';

const Parallax = ScrollAnim.Parallax;

class OnLineDetails extends Component {
  static propTypes = {
    content: string.isRequired,
    arrow: object
  }

  constructor(props) {
    super();
  }

  /**
   * Get string classes of the card
   * @return {string}
   */
  get cardClasses() {
    return (
      [css.component, 'onLine'].join(' ')
    )
  }

  render() {
    return (
      <div className={this.cardClasses}>
        <Parallax animation={{ y: 0, x: '0px', opacity: 1, playScale: [-2, 1] }} style={{ transform: 'translate(-120px, 100px)', opacity: 0 }}>
          <div className='content' dangerouslySetInnerHTML={{__html: this.props.content}}/>
        </Parallax>
        <Parallax animation={{ y: 0, x: '0px', opacity: 1, playScale: [-2, 1] }} style={{ transform: 'translate(120px, 100px)', opacity: 0 }}>
          <Arrow {...this.props.arrow} center/>
        </Parallax>
      </div>
  )

  }
}
export default OnLineDetails
