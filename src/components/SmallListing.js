import React from 'react'

const SmallListing = ({ smallListingImage, smallListingType, smallListingName, smallListingDescription }) => (
  <div className="small-listing">
    <img className="small-listing__image" src={smallListingImage}/>
    <p className="small-listing__type">{smallListingType}</p>
    <h2 className="small-listing__name">{smallListingName}</h2>
    <p className="small-listing__description">{smallListingDescription}</p>
    <div>
      <a className="small-listing__link" href="/html/">Find out more...</a>
    </div>
  </div>
);

export default SmallListing;
