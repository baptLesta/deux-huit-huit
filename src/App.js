import React, { Component } from 'react';
import css from './App.scss';
import {} from 'prop-types';
import {Route} from 'react-router-dom';
//My Component
import NavBar from 'sections/NavBar';
import Slider from 'sections/Slider';
import Citation from 'sections/Citation';
import Details from 'sections/Details';
import Footer from 'sections/Footer';
import Article from 'sections/Article';
import Cards from 'sections/Cards';
import Header from 'sections/Header';
import OnLineDetails from 'sections/OnLineDetails';

import OtherPage from 'pages/OtherPage'

import {citationsData} from 'assets/fr/citation.json';
import {block1, block2, block3} from "assets/fr/details.json"

class App extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className={css.component}>
        <Header />
        <NavBar ref={ (el) => this.$navbar = el}/>
        <Route name='test' exact path='/' render={ () => (
          <div>
            <Slider />
            <Citation {...citationsData[0]}/>
            <Details {...block1}/>
            <Citation withMargin {...citationsData[1]}/>
            <Details columnRight {...block2}/>
            <Citation {...citationsData[2]}/>
            <OnLineDetails {...block3}/>
            <Article />
            <Cards />
            <Footer />
          </div>
        )}
        />
        <Route path='/produits' render={ () => (<OtherPage title='Page Cidrerie'/>)} />
        <Route path='/histoire' render={ () => (<OtherPage title='Page Histoire'/>)} />
        <Route path='/recettes' render={ () => (<OtherPage title='Page Recettes'/>)} />
        <Route path='/journal' render={ () => (<OtherPage title='Page Journal'/>)} />
        <Route path='/location' render={ () => (<OtherPage title='Page Location'/>)} />
        <Route path='/contact' render={ () => (<OtherPage title='Page Contact'/>)} />

      </div>
    );
  }
}
export default App
