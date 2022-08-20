import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = React.useState(0)
  useEffect(() => {
    console.log('call useEffect')
    if (value > 0) {
      document.title = (`New Messages(${value})`);
    }
  }, [value]);

  useEffect(() => {
    console.log('run only one time when render page')
  }, []) //because dependent list is empty

  return <>
    <h1>{value}</h1>
    <button className='btn' onClick={() => setValue((value + 1))}>click me</button>
  </>;
};

export default UseEffectBasics;
