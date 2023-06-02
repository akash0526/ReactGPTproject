import React from 'react'
import './feature.css';
import { Feature } from '../../components';
const featuresData  =[
  {
    title:'title1',
    text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, odio'
  },
  {
    title:'title2',
    text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, odio'
  },
  {
    title:'title3',
    text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, odio'
  },
  {
    title:'title4',
    text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, odio'
  }
]
const Features = () => {
  return (
    <div className='gpt3__features section__padding'>
        <div className='gpt3__features-heading'>
          <h1 className='gradient__text'>The Future is Now and You Just Need To Realize it. Step into Future today and make it happen</h1>
          <p> Request free Early Access</p>
        </div>
        <div className='gpt3__features-container'>
         {/* {featuresData.map(
          (item,index) =>(
            <Feature title={item.title} text={item.text} key={item.title + index } />
          ) 
         )}  */}
         {
          featuresData.map((item,index)=>(
            <Feature title={item.title} text={item.text} key = {item.title + index} />
          ))
         }
        </div>
    </div>
  )
}

export default Features
