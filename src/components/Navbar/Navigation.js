import React from 'react'
import Sidenav from './Sidenav'
import './navbar.css'
const Navigation = ({setCategory}) => {
  return (
    <nav>
      <div>
        <Sidenav setCategory={setCategory}/>
      </div>
      <div className='logo'>
            <img src="/images/news_logo.png" className='logoImage' alt='logo'></img>
            <span className='aboutLogo'>
                <h4>NewsFeed</h4>
                <small>Stay informed</small>
            </span>
      </div>
    </nav>
  )
}

export default Navigation;