import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Header from './Header';
import HomePageParts from './HomePageParts';
 

const Home = () => {
    return (
        <div>
            <Header></Header>
           <Banner></Banner>
           <HomePageParts></HomePageParts>
           <BusinessSummary></BusinessSummary>
        </div>
    );
};

export default Home;