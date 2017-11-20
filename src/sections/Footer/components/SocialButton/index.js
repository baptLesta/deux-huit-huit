import React, { Component } from 'react';
import css from './styles.scss';
import {string} from 'prop-types';

class SocialButton extends Component {
  static propTypes = {
    letter: string.isRequired,
    text: string,
    link: string.isRequired
  }

  constructor(props) {
    super();
  }

  render() {
    const {
      letter,
      text,
      link
    } = this.props;

    return (
      <a href={link} className={css.component}>
        <div className='letter' dangerouslySetInnerHTML={{__html: letter}}/>
        <div className='text' dangerouslySetInnerHTML={{__html: text}}/>
      </a>
    );
  }
}
export default SocialButton
