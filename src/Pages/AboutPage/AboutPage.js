import './AboutPage.css'
import React from 'react'
import galactic from './galactic.jpg'
import Likes from '../../Components/Likes/Likes'


export default function AboutPage(){
    return(
      <div className='abuot'>
          <div className='wrap'>
              <div className='card'>
                  <div className='card-image'>
                      <img src={galactic} alt='galactic'/>
                    
                      <Likes/>
                  </div>

              </div>

          </div>

      </div>
    )
}
