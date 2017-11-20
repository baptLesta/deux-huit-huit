import React, { Component } from 'react';
import css from './styles.scss';
import {string} from 'prop-types';

class Button extends Component {
  static propTypes = {
    title: string.isRequired,
    link: string.isRequired
  }

  constructor(props) {
    super();
  }

  render() {
    const {
      title,
      link
    } = this.props;

    return (
      <div className={css.component}>
        <a href={link} >
          {title}
        </a>
      </div>
    );
  }
}
export default Button
