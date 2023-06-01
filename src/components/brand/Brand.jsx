import React from 'react'
import './brand.css';
import { google,slack,atlassian,dropbox,spotify } from './imports';
const Brand = () => {
  return (
    <div className='gpt3__brand  section__padding'>
      <div>
        <img src={google} alt='google' />
      </div>
      <div>
        <img src={slack} alt='Slack' />
      </div>
      <div>
        <img src={atlassian} alt='Atlassian' />
      </div>
      <div>
        <img src={dropbox} alt='Dropbox' />
      </div>
      <div>
        <img src={spotify} alt='Spotify' />
      </div>
    </div>
  )
}

export default Brand;
