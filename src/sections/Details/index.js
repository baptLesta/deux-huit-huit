import React, { Component } from 'react';
import css from './styles.scss';
import {bool} from 'prop-types';
//My COmponent
import Card from 'components/Card';

class Details extends Component {
  static propTypes = {
    columnRight: bool
  }

  static defaultProps = {
    columnRight: false
  }

  constructor(props) {
    super();
  }

  /**
   * Get additionn style
   * @return {Object} [description]
   */
  get style () {
    return (
      this.props.columnRight
      ? {justifyContent: 'flex-end'}
      : {}
    )
  }

  render() {
    return (
      <div className={css.component} style={this.style}>
        <Card {...this.props}/>
      </div>
    );
  }
}
export default Details
