import React, { Component } from 'react';
import css from './styles.scss';
import {} from 'prop-types';
import ScrollAnim from 'rc-scroll-anim';
import {article} from 'assets/fr/article.json'
//MyComponent
import Card from 'components/Card';
import imgArticle from 'assets/img/article.png'

const Parallax = ScrollAnim.Parallax;


class Article extends Component {
  state = {
    isMobile: false
  }

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

  get settingsAnimArticle () {
    if (!this.state.isMobile) {
      return (
        { y: -200, playScale: [-1, 3] }
      )
    } else {
      return (
          { y: -120, playScale: [-1, 3] }
      )
    }
  }

  get styleArticle () {
    if (!this.state.isMobile) {
      return (
        { transform: 'translateY(200px)' }
      )
    } else {
      return (
          { transform: 'translateY(130px)' }
      )
    }
  }

  render() {
    return (
      <div className={css.component}>
        <div className='imageColumn'>
          <Parallax animation={this.settingsAnimArticle} key="1" style={this.styleArticle}>
            <img alt='Bouteille Cidre de Glace' src={imgArticle}/>
          </Parallax>
        </div>
        <Parallax animation={{ y: 130, playScale: [-1, 3] }} key="1" style={{ transform: 'translateY(-200px)' }}>
          <div className='contentColumn'>
            <div className='title' dangerouslySetInnerHTML={{__html: article.title}}/>
            <Card {...article.card} withoutParallax />
          </div>
      </Parallax>
      </div>
    );
  }
}
export default Article;
