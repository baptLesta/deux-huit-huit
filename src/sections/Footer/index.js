import React, { Component } from 'react';
import css from './styles.scss';
import {} from 'prop-types';
//Datas
import {footerDatas} from 'assets/fr/footer.json';
//MyComponent
import Button from './components/Button';
import SocialButton from './components/SocialButton';
import Input from './components/Input';


class Footer extends Component {  
  constructor(props) {
    super();
  }

  render() {
    const {
      newsLetter,
      contact,
      legals
    } = footerDatas;

    return (
      <div className={css.component}>
        <div className='blockUp'>
            <div className='title' dangerouslySetInnerHTML={{__html: newsLetter.title}}/>
            <div className='content' dangerouslySetInnerHTML={{__html: newsLetter.content}}/>
          <Input {...newsLetter.input}/>
        </div>
        <div className='blockDown'>
          <div className='contact' dangerouslySetInnerHTML={{__html: contact.content}}/>
          <div className='buttonsContainer'>
            {
              contact.buttons.map( (button, index) => (
                <Button key={index} {...button}/>
              ))
            }
          </div>
          <div className='socialsContainer'>
            {
              contact.socialButtons.map( (button, index) => (
                <SocialButton key={index} {...button}/>
              ))
            }
          </div>
        </div>
        <div className='legal'>
          <div className='droit' dangerouslySetInnerHTML={{__html: legals.droits}}/>
          <div className='credits'>
            <a href={legals.credits.url} className='text' dangerouslySetInnerHTML={{__html: legals.credits.text}}/>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer
