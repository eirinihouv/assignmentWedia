import React from 'react'
import { Listing } from './'
import listingImage from '../imgs/listingImage.png';
import listingCapacityIcon from '../imgs/listingCapacityIcon.png';

const PlacesToStay = () => (
  <div className="places-to-stay">
    <h1 className="places-to-stay__title">Fantastic Places to Stay</h1>
    <p className="places-to-stay__subtitle">Top Destinations for homes and appartments</p>
    <Listing listingImage={listingImage}
             listingName="Holiday Home"
             listingDescription="Acropolis house is a vacation home featuring WiFi and a terrace located in Athnes. The property is 201m from Acropolis Museum and features views of the city."
             listingCapacityIcon={listingCapacityIcon}
             listingCapacity="Twin/Double Room"
             listingRating="Very Good 8.3"
             listingPrice="150"
             />
    <Listing listingImage={listingImage}
              listingName="Holiday Home"
              listingDescription="Acropolis house is a vacation home featuring WiFi and a terrace located in Athnes. The property is 201m from Acropolis Museum and features views of the city."
              listingCapacityIcon={listingCapacityIcon}
              listingCapacity="Twin/Double Room"
              listingRating="Very Good 8.3"
              listingPrice="150"
              />
    <Listing listingImage={listingImage}
             listingName="Holiday Home"
             listingDescription="Acropolis house is a vacation home featuring WiFi and a terrace located in Athnes. The property is 201m from Acropolis Museum and features views of the city."
             listingCapacityIcon={listingCapacityIcon}
             listingCapacity="Twin/Double Room"
             listingRating="Very Good 8.3"
             listingPrice="150"
             />
  </div>
);

export default PlacesToStay;
