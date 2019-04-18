import React from 'react'
import search from '../imgs/search.svg';
import calendar from '../imgs/calendar.svg';

const Form = () => (
  <div className="form">
    <h1 className="form__title">Find the best deals</h1>
    <div>
    <p className="form__subtitle">Search destination</p>
    <div className="form__search">
      <img className="form__search__icon" src={search}/>
    </div>
    </div>
    <div className="form__dates">
      <div className="form__dates__checkin">
      <p className="form__subtitle">Check-in</p>
      <div className="form__checkin">
        <img className="form__checkin__icon" src={calendar}/>
      </div>
      </div>
      <div className="form__dates__checkout">
      <p className="form__subtitle">Check-out</p>
      <div className="form__checkout">
        <img className="form__checkout__icon" src={calendar}/>
      </div>
      </div>
    </div>
    <button className="form__button">Search</button>
  </div>
);

export default Form;
