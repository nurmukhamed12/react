import React, { useState } from 'react';
import axios from 'axios';

const Form = ({ data, setData }) => {
    const [cityName, setCityName] = useState('');

    const getData = (city) => {
        let KEY = 'f4833cf990dc92ef43563c9b00da2a78';
        let APILink = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`;

        axios(APILink)
            .then(({ data }) => {
                console.log(data);
                setData(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    return (
        <div className='relative'>
            <input className='input'
                type="text"
                onChange={(event) => {
                    setCityName(event.target.value);
                }}
            />
            <button className='btn' onClick={() => getData(cityName)}>get weather</button>
        </div>
    );
}

export default Form;

