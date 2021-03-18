import React from 'react'

const Footer = ({ wrong }) => {
  return (
    <div className='footer'>
      <div className='container'>
        {wrong === null ? (
          ''
        ) : wrong ? (
          <div className='footer__text'>
            <span style={{ fontSize: '1rem', fontWeight: 'bold' }}>
              You got it
            </span>
            <span
              style={{
                fontSize: '3rem',
                marginLeft: '1rem',
                fontWeight: 'bold',
                color: '#d04141',
              }}
            >
              Wrong!
            </span>
          </div>
        ) : (
          <div className='footer__text'>
            <span style={{ fontSize: '1rem', fontWeight: 'bold' }}>
              You got it
            </span>
            <span
              style={{
                fontSize: '3rem',
                marginLeft: '1rem',
                fontWeight: 'bold',
                color: '#3bd16f',
              }}
            >
              Correct!
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

export default Footer
