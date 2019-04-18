import React from 'react'
import { SmallListing } from './'
import smallListingImage from '../imgs/listingImage.png';

const PlacesToSee = () => (
  <div className="places-to-see">
    <h1 className="places-to-see__title">Fantastic Places to See</h1>
    <p className="places-to-see__subtitle">Find the best places to enjoy your passions</p>
    <div className="small-listings">
      <SmallListing
             smallListingImage={smallListingImage}
             smallListingType="BEACHES"
             smallListingName="Naxos Chora"
             smallListingDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the insdustry's standard dummy test ever since the..."
             />
      <SmallListing
             smallListingImage={smallListingImage}
             smallListingType="SCENERY"
             smallListingName="Rhodes"
             smallListingDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the insdustry's standard dummy test ever since the..."
             />
      <SmallListing
             smallListingImage={smallListingImage}
             smallListingType="RELAXATION"
             smallListingName="Fira"
             smallListingDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the insdustry's standard dummy test ever since the..."
             />
       <SmallListing
              smallListingImage={smallListingImage}
              smallListingType="BEACHES"
              smallListingName="Naxos Chora"
              smallListingDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the insdustry's standard dummy test ever since the..."
              />
       <SmallListing
              smallListingImage={smallListingImage}
              smallListingType="SCENERY"
              smallListingName="Rhodes"
              smallListingDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the insdustry's standard dummy test ever since the..."
              />
       <SmallListing
              smallListingImage={smallListingImage}
              smallListingType="RELAXATION"
              smallListingName="Fira"
              smallListingDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the insdustry's standard dummy test ever since the..."
              />
        <SmallListing
               smallListingImage={smallListingImage}
               smallListingType="BEACHES"
               smallListingName="Naxos Chora"
               smallListingDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the insdustry's standard dummy test ever since the..."
               />
        <SmallListing
               smallListingImage={smallListingImage}
               smallListingType="SCENERY"
               smallListingName="Rhodes"
               smallListingDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the insdustry's standard dummy test ever since the..."
               />
        <SmallListing
               smallListingImage={smallListingImage}
               smallListingType="RELAXATION"
               smallListingName="Fira"
               smallListingDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the insdustry's standard dummy test ever since the..."
               />
    </div>
  </div>
);

export default PlacesToSee;
