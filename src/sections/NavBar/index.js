import React, { Component } from 'react';
import css from './styles.scss';
import {} from 'prop-types';
import NavBarItems from 'assets/fr/navbar.json';
//MyComponent
import Link from './components/Link';
import NavBarMobile from './Mobile'

class NavBar extends Component {
  constructor(props) {
    super();

    let isMobile = false;
    document.body.clientWidth < 764 && (isMobile = true);
    this.state = {
      isMobile: isMobile
    }
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
        this.setState({
            isMobile: document.body.clientWidth < 764
        });
    });
  }

  render() {
    return (
      <div className={css.component}>
        {!this.state.isMobile &&
          <nav>
            { NavBarItems.navbar.map( (dataItem, index) => (
              <Link key={index} index={index} {...dataItem}/>
            ))}
          </nav> }
        {
          this.state.isMobile && <NavBarMobile />
        }

      </div>
    );
  }
}
export default NavBar
