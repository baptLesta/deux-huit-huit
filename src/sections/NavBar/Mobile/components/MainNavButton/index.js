import React, { Component } from 'react';
import css from './styles.scss';
import {} from 'prop-types';

class MainNavButton extends Component {
  static propTypes = {

  }

  static defaultProps = {

  }

  isOpen = false;

  constructor(props) {
    super();
  }

  handleClick = () => {
    this.props.handleClick();
  }

  toggleDisplayButton = () => {
    this.$button.classList.toggle('open');
  }

  render() {
    return (
      <div className={css.component}>
        <div className="button" onClick={this.handleClick} ref={ (el) => this.$button = el}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    );
  }
}
export default MainNavButton
