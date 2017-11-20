import React, { Component } from 'react';
import css from './styles.scss';
import {} from 'prop-types';
import NavBarItems from 'assets/fr/navbar.json';
import {TweenMax} from 'gsap';

import MainNavButton from './components/MainNavButton';
import Link from '../components/Link'

class NavBarMobile extends Component {
  isMenuOpen = false;

  constructor(props) {
    super();
  }

  /**
   * display or Hide the Full screen mobile menu
   */
  handleClick = () => {
    this.$mainNavButton.toggleDisplayButton();
    if( !this.isMenuOpen ){
      this.isMenuOpen = true;
      TweenMax.fromTo(
        this.$menu, .7,
         { css:{ display: 'flex', top: "-100%" }},
         { css: { top: "0%" } }
      )
    } else {
      this.isMenuOpen = false;
      TweenMax.to(
        this.$menu, .7,
        { css: { top: "-100%", display: 'none'} }
      )
    }
  }

  /**
   * Handle the hide of the full screen mobile menu 
   * @return {[type]} [description]
   */
  handleHideMenu = () => {
    this.$mainNavButton.toggleDisplayButton();
    this.isMenuOpen = false;
    TweenMax.to(
      this.$menu, .7,
      { css: { top: "-100%", display: 'none'} }
    )
  }

  render() {
    return (
      <div className={css.component}>
        <MainNavButton ref={ (el) => this.$mainNavButton = el} handleClick={this.handleClick}/>
        <nav ref={ (el) => this.$menu = el}>
          { NavBarItems.navbar.map( (dataItem, index) => (
              <Link key={index} index={index} {...dataItem} handleHideMenu={this.handleHideMenu}/>
          ))}
        </nav>
      </div>
    );
  }
}
export default NavBarMobile
