import React, { useState, useEffect } from 'react';
import { data } from '../../../data';
import { Link, useParams } from 'react-router-dom';
//import person from "../final/Person";
const Person = () => {
    const [name,setName] = useState('default name')
    const {id} = useParams()

    useEffect(()=>{
        const newPerson = data
            .find(
                (person) => {
                    return person.id === parseInt(id)})
        setName(newPerson.name)
    },[])
    return (
        <div>
            <h1>{name}</h1>
            <Link to='/people' className='btn'>BACK TO PEOPLE</Link>
        </div>
    );
};

export default Person;
