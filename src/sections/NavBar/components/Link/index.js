import React, { Component } from 'react';
import css from './styles.scss';
import {number, func, string} from 'prop-types';
import {NavLink} from 'react-router-dom';

class LinkNav extends Component {
  static propTypes = {
    index: number,
    handleHideMenu: func,
    tile: string
  }

  constructor(props) {
    super();
  }

  /**
   * Test if is dot exist (last index)
   * @return {Boolean}
   */
  get isDotExist() {
    return (
      this.props.index === 6
      ? false
      : true
    )
  }

  /**
   * Hande the hide of the menu, works for the mobile version
   */
  handleHideMenu = () => {
    this.props.handleHideMenu
      && this.props.handleHideMenu();
  }

  render() {
    const circleClasse = (
      this.isDotExist ? 'dot' : 'lastDot'
    )

    return (
      <div className={css.component}>
        <NavLink exact to={this.props.path} className='link' activeClassName='active' onClick={this.handleHideMenu}>
          {this.props.title}
        </NavLink>
        <div className={circleClasse}></div>
      </div>
    );
  }
}
export default LinkNav
