import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Header from './Header';
 

const Home = () => {
    return (
        <div>
            <Header></Header>
           <Banner></Banner>
           <BusinessSummary></BusinessSummary>
        </div>
    );
};

export default Home;