import { useState, useEffect } from 'react'
import './App.css'
import CounterList from './components/CounterList'
import Footer from './components/Footer'
import Header from './components/Header'
import Quiz from './components/Quiz'
import Result from './components/Result'

function App() {
  const [data, setData] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [wrong, setWrong] = useState(null)

  useEffect(() => {
    const fetchData = () => {
      fetch(
        'https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple'
      )
        .then((res) => res.json())
        .then((data) => setData(data.results))
    }

    fetchData()
  }, [])

  const nextQuestion = () => {
    if (currentIndex < data.length) {
      setCurrentIndex(currentIndex + 1)
    }
    setShowAnswer(false)
    setWrong(null)
  }

  const handleAnswer = (answer) => {
    if (!showAnswer) {
      if (answer === data[currentIndex].correct_answer) {
        setScore(score + 1)
        setWrong(false)
      } else {
        setWrong(true)
      }
      setShowAnswer(true)
    }
  }

  const retake = () => {
    setScore(0)
    setCurrentIndex(0)
  }

  return (
    <>
      <Header
        name='Jason'
        mark={data && score ? Math.round((score * 100) / data.length) : 0}
      />
      <div className='container quiz__body'>
        {data && data.length !== 0 ? (
          currentIndex < data.length ? (
            <>
              <Quiz
                question={data[currentIndex].question}
                incorrectAnswers={data[currentIndex].incorrect_answers}
                correctAsnwer={data[currentIndex].correct_answer}
                nextQuestion={nextQuestion}
                handleAnswer={handleAnswer}
                showAnswer={showAnswer}
                category={data[currentIndex].category}
              />
              <CounterList
                totalQuestions={data.length}
                current={currentIndex}
              />
            </>
          ) : (
            <Result score={score} retake={retake} totalQuestion={data.length} />
          )
        ) : (
          'Loading...'
        )}
      </div>
      <Footer wrong={wrong} />
    </>
  )
}

export default App
