import React from 'react'
import './components.css'
import '../index.css'

const Header = ({ name, mark }) => {
  return (
    <div className='header'>
      <div className='container'>
        <div className='header__body'>
          <div>Welcome, {name}</div>
          <div>Wonderful Quiz App</div>
        </div>

        <div className='mark__container'>
          <div className='mark__inner'>
            <div className='mark__inner_percent'>{mark}%</div>
            <div>CORRECT</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
