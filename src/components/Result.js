import React from 'react'

const Result = ({ score, totalQuestion, retake }) => {
  return (
    <div className='result__container'>
      <div className='result__content'>
        Total Correct
        <span className='result__score'>{score}</span> / {totalQuestion}
        <div className='result__button' onClick={retake}>
          Click Here To Retry
        </div>
      </div>
    </div>
  )
}

export default Result
