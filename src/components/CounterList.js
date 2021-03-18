import React from 'react'
import './components.css'
import '../index.css'

const CounterList = ({ totalQuestions, current }) => {
  const returnNode = () => {
    let node = []
    for (let i = 0; i < totalQuestions; i++) {
      node.push(
        <div
          key={i}
          className={`counter_list__node  ${
            current === i ? 'current_node' : ''
          }  `}
        >
          <span className='counter_list__node_text'>{i + 1}</span>
        </div>
      )
    }
    return node
  }

  return <div className='counter_list'>{returnNode()}</div>
}

export default CounterList
