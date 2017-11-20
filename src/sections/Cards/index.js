import React, { Component } from 'react';
import css from './styles.scss';
import {cards} from 'assets/fr/cards';
import ScrollAnim from 'rc-scroll-anim';
//MyComponent
import Card from './components/Card';

const Parallax = ScrollAnim.Parallax;


class Cards extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className={css.component}>
        {
          cards.map ((cardData, index) => (
            <Parallax animation={{ y: -50, opacity: 1 }} key={index} style={{ transform: 'translateY(50px)', opacity: 0 }}>
              <Card {...cardData}/>
            </Parallax>
          ))
        }
      </div>
    );
  }
}
export default Cards
