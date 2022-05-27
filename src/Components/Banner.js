import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div className="hero  min-h-screen banner" >
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">  Princes Parts Limited.</h1>
                        <p className="mb-5">A manufacturer is a person or company that produces finished goods from raw materials by using various tools, equipment, and processes, and then sells the goods to consumers.</p>
                         
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;