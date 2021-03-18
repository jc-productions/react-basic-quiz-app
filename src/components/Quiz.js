import React, { useEffect, useState } from 'react'
import './components.css'
import '../index.css'
import Arrow from './arrow.png'
const Quiz = ({
  question,
  incorrectAnswers,
  correctAsnwer,
  nextQuestion,
  handleAnswer,
  showAnswer,
  category,
}) => {
  const [suffledAnswers, setSuffledAnswers] = useState([])

  useEffect(() => {
    const suffled = () => {
      const answers = [correctAsnwer, ...incorrectAnswers]
      return answers.sort((a, b) => Math.random() - 0.5)
    }

    setSuffledAnswers(suffled())
  }, [correctAsnwer, incorrectAnswers])

  return (
    <div className='quiz'>
      <div className='quiz__question_container'>
        <p className='quiz__question_category'>{category}</p>
        <span
          className='quiz__question'
          dangerouslySetInnerHTML={{ __html: question }}
        />
      </div>
      <div className='quiz__answer_list'>
        {suffledAnswers.map((answer, i) => (
          <div
            key={i}
            onClick={() => handleAnswer(answer)}
            className={`quiz__answer_list_button ${
              showAnswer
                ? answer === correctAsnwer
                  ? 'quiz__answer_list_button_correct'
                  : 'quiz__answer_list_button_incorrect'
                : ''
            }`}
          >
            {i + 1} <span className='ho_divider'></span>{' '}
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </div>
        ))}
        {showAnswer ? (
          <img
            src={Arrow}
            className='quiz__answer_list_arrow'
            onClick={nextQuestion}
            alt='Arrow Right'
          />
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default Quiz
