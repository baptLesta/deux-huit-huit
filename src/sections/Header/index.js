import React, { Component } from 'react';
import css from './styles.scss';
import Logo from 'assets/img/flocon.jpg';

class Header extends Component {
  constructor(props) {
    super();

    this.isShow = true;
  }

  render() {
    return (
      <header className={css.component} ref={ (el) => this.$header = el}>
        <img alt='logo' className='logo' src={Logo}/>
      </header>
    );
  }
}
export default Header
