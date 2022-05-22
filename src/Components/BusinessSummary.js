import React from 'react';

const BusinessSummary = () => {
    return (
        // <div className='text-center  my-11'>
        //     <h2 className='text-3xl text-center font-bold text-primary my-5'><i>Business Summary</i></h2>
        //     <div className="stats shadow ">

        //         <div className="stat ">
        //             <div className="stat-figure text-primary">
        //                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
        //             </div>
        //             <div className="stat-title">Total Customer</div>
        //             <div className="stat-value text-primary">100+</div>

        //         </div>

        //         <div className="stat mx-5">
        //             <div className="stat-figure text-secondary">
        //                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
        //             </div>
        //             <div className="stat-title">Total Revenue</div>
        //             <div className="stat-value text-secondary">2.6M</div>
        //             <div className="stat-desc">10% revenew earn    last month</div>
        //         </div>

        //         <div className="stat ">
        //             <div className="stat-figure text-secondary">
        //                 <div className="avatar online">
        //                     <div className="w-16 rounded-full">
        //                         <img src="https://api.lorem.space/image/face?w=128&h=128" />
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="stat-title">Reviews</div>
        //             <div className="stat-value text-primary">2.6K</div>


        //         </div>

        //     </div>
        // </div>
        <div>
            <h2 className='text-center my-6 text-3xl font-bold text-primary'><i>Business Summary</i> </h2>
            <div className='sm:block md:grid grid-cols-2   lg:flex justify-around text-center my-20 '>
                <div >
                    <div className="avatar shadow-lg p-3 rounded-lg ">
                        <div className="w-24 rounded-full">
                            <img src="https://cdn.pixabay.com/photo/2017/11/10/05/46/group-2935521_960_720.png" />

                        </div>
                    </div>
                    <div className="stat-title">Total Customer</div>
                    <div className="stat-value text-primary">100+</div>
                    <div className="stat-desc">5 new customer big dill sign this month</div>
                </div>
                <div  >
                    <div className="avatar shadow-lg p-3 rounded-lg ">
                        <div className="w-24 rounded-full">
                            <img src="https://media.istockphoto.com/vectors/investment-profit-icon-vector-graphics-vector-id1261978582?s=612x612" />

                        </div>
                    </div>
                    <div className="stat-title">Annual Revenue</div>
                    <div className="stat-value text-primary">120M+ </div>
                    <div className="stat-desc">10% revenew earn    last month</div>
                </div>
                <div  >
                    <div className="avatar shadow-lg p-3 rounded-lg ">
                        <div className="w-24 rounded-full">
                            <img src="https://cdn.pixabay.com/photo/2017/09/29/23/41/user-satisfaction-2800863_960_720.png" />

                        </div>
                    </div>
                    <div className="stat-title">Reviews</div>
                    <div className="stat-value text-primary">40K+</div>
                    <div className="stat-desc">very satisfaction my customer</div>
                </div>
                <div  >
                    <div className="avatar shadow-lg p-3 rounded-lg ">
                        <div className="w-24 rounded-full">
                            <img src="https://media.istockphoto.com/vectors/bicycles-vector-id483584287?s=612x612" />

                        </div>
                    </div>
                    <div className="stat-title">Total Tools</div>
                    <div className="stat-value text-primary">50+ </div>
                    <div className="stat-desc">different tools upcomming</div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;