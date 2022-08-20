import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {

  const [firsName, setFirsName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(email,firsName);

    if(firsName && email){
      const person = {
        id: new Date().getTime().toString(),
        firsName: firsName,
        email: email
      } // or {firstName, email}
      console.log(person)
      setPeople((people) => {
        return [...people, person]
      });
      setFirsName('')
      setEmail('')
    } else {
      console.log('empty values')
    }
  }

  return <>
    <article>
      <form className='form' onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor='firstName'>Name: </label>
          <input
              type='text'
              id='firstName'
              name='firstName'
              value={firsName}
              onChange={(e) => setFirsName(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor='email'>Email: </label>
          <input
              type='text'
              id='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type='submit'>add person</button>
      </form>
      {
        people.map((person) =>{
          const {id, firsName, email} = person
          return <div className='item' key={id}>
            <h4>{firsName}</h4>
            <p>{email}</p>
          </div>
      })
      }
    </article>
  </>;
};

export default ControlledInputs;
