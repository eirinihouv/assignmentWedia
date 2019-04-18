import React from 'react'
import { Form } from './'
import welcome from '../imgs/welcome.png';

const Welcome = () => (
  <div className="welcome">
    <img className="welcome__icon" src={welcome}/>
    <div className="welcome__container">
      <Form />
      <div className="carousel__circle"></div>
      <div className="carousel__circle carousel__circle--active"></div>
      <div className="carousel__circle"></div>
      <div className="carousel__circle"></div>
    </div>
  </div>

);

export default Welcome;
