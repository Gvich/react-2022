import React, { useState } from 'react';

// useState - function
// component nae must be uppercase
// must be in the function/component body
// cannot call conditionally

const UseStateBasics = () => {
  const [text, setText] = useState('random title')
  const handleClick  = () => {
    if (text === 'random title'){
      setText('hello world')
    } else {
      setText('random title')
    }
  }
  return (
      <React.Fragment>
        <h1>{text}</h1>
        <button className='btn' onClick={handleClick}>
          change title
        </button>
      </React.Fragment>
  )
};

export default UseStateBasics;
