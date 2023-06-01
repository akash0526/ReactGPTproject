import React from 'react'
import './header.css';
import People from'../../assets/people.png';
import  Ai from '../../assets/ai.png';
const Header = () => {
  return (
    <div>
      <div className='gpt3__header section__padding' id='home'>
        <div className='gpt3__header-content'>
              <h1 className='gradient__text'>
                Lets Built Something New with GPT-3 OpenAI 
              </h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, perspiciatis iusto. Alias cum quam tempore illo sit qui labore nobis? Quaerat dolorum ex placeat esse optio? Vero illum voluptatibus ab.
              </p>
              <div className='gpt3__header-content__input'>
                <input type='email' placeholder='Your Email Address' />
                <button type='button'>Get Started</button>
              </div>
              <div className='gpt3__header-content__people'>
                <img src={People} alt='People' />
                <p>1000 people requested  aceess to visit in last 24 hours</p>
              </div>
              
        </div>
        <div className='gpt3__header-image'>
                <img src={Ai} alt='Ai' />
              </div>
      </div>
    </div>
  )
}

export default Header
