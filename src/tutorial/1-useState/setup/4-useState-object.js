import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = React.useState({
    name: 'peter',
    age: '24',
    message: 'hi hi hi there2@@2!'
  })

  // const [name, setName] = React.useState('peter')
  // const [age, setAge] = React.useState(24)
  // const [message, setMessage] = React.useState('helllo there')

  console.log(person)
  const changeMessage = () => {
    setPerson({...person, message: 'hello world'})
    //setMessage('hi');
  }
  return <>
    <h3>{person.name}</h3>
    <h3>{person.age}</h3>
    <h3>{person.message}</h3>
    <button className='btn' onClick={changeMessage}>change message</button>
  </>;
};

export default UseStateObject;
