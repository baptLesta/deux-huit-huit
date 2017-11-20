import React, { Component } from 'react';
import css from './styles.scss';
import {string, object} from 'prop-types';

class Input extends Component {
  static propTypes = {
    text: string,
    button: object
  }

  constructor(props) {
    super();
  }

  render() {
    const {
      text,
      button
    } = this.props;

    return (
      <div className={css.component}>
        <input type="text" name="nom" id="nom" placeholder={text}/>
        <button>{button.text}</button>
      </div>
    );
  }
}
export default Input
