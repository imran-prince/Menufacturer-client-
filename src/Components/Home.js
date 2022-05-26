import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Header from './Header';
import HomePageParts from './HomePageParts';
import HomePageReview from './HomePageReview';
 

const Home = () => {
    return (
        <div>
            <Header></Header>
           <Banner></Banner>
           <HomePageParts></HomePageParts>
           <BusinessSummary></BusinessSummary>
           <HomePageReview></HomePageReview>
        </div>
    );
};

export default Home;