import React from 'react'

const Listing = ({ listingImage, listingName, listingDescription, listingCapacityIcon, listingCapacity, listingRating, listingPrice }) => (
  <div className="listing">
    <img className="listing__image" src={listingImage}/>
    <div className="listing__info">
      <h2 className="listing__info__name">{listingName}</h2>
      <p className="listing__info__description">{listingDescription}</p>
      <div className="listing__capacity">
        <img className="listing__capacity__icon" src={listingCapacityIcon}/>
        <p>{listingCapacity}</p>
      </div>
    </div>
    <div className="listing__details">
    <p className="listing__rating">{listingRating}</p>
    <h3>€ {listingPrice}</h3>
    <button className="listing__button">Book Now</button>
    </div>
  </div>
);

export default Listing;
