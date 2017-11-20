import React, { Component } from 'react';
import css from './styles.scss';
import {} from 'prop-types';

import TweenOne from 'rc-tween-one';

class OtherPage extends Component {
  static propTypes = {

  }

  static defaultProps = {
    title: 'Titre de l\'autre page'
  }

  state = {

  }

  constructor(props) {
    super();
  }

  componentWillUnmount() {
    console.log('test');
  }

  render() {
    return (
      <div className={css.component}>
        <TweenOne className="demo" animation={{ y: -40, opacity: 1 }} key="1"
            style={{ transform: 'translateY(100px)', opacity: 0 }}>
        {   this.props.title}
        </TweenOne>
      </div>
    );
  }
}
export default OtherPage
