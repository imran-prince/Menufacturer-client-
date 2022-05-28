import React from 'react';
const MyPortFolio = () => {
    return (
        <>
            <div className='flex justify-end mr-5'>
                <h1 class="text-4xl text-primary font-bold">MD Imran Hossain</h1>

            </div>
            <div>
                <p className='flex justify-end mr-5 text-xl text-secondary font-bold'>Email: csebubt35@gmail.com</p>
                
            </div>
            <p className='flex justify-end mr-5 text-xl text-secondary font-bold'>LinkedIn: <a href="https://www.linkedin.com/"><i className='text-primary'>cleck me</i></a></p>
            <div class="hero min-h-screen ">
                <div class="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/RTfk12P/imran.jpg" class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className='text-5xl font-bold text-center text-primary my-2'>Creer Objective</h1>
                        <div className='w-25 h-1 bg-secondary'>-</div>
                        <div className='bg-primary   font-bold p-10'>
                            <i> Experienced software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success. Well-versed in technology and writing code to create systems that are reliable and user-friendly. Skilled leader who has the proven ability to motivate, educate, and manage a team of professionals to build software programs and effectively track changes. Confident communicator, strategic thinker, and innovative creator to develop software that is customized to meet a company’s organizational needs, highlight their core competencies, and further their success.</i>
                        </div>

                        <h2 className='text-primary text-center font-bold text-3xl my-10'>Educational Background</h2>
                        <hr />
                        <p>
                            <div className='text-primary font-bold text-2xl'>
                                <h3 >University:-</h3>
                                <div className='w-25 h-1 bg-secondary'>-</div>
                                Bangladesh University of Business and Technology Dhaka <br />  Bangladesh
                                B.Sc. in Computer Science and Engineering;<br /> CGPA: 3.01/4.00
                            </div>  <br />
                            <div className='text-primary font-bold text-xl my-10'>
                                <h3 className=' font-bold text-2xl'>College:-</h3>
                                <div className='w-25 h-1 bg-secondary'>-</div>
                                Sheikh Amanullah Degree Collage Satkhira <br /> Bangladesh
                                Higher Secondary Certificate; GPA: 3.92/5.00 2016
                            </div>
                            <div className='text-primary font-bold text-xl'>
                                <h3 className=' font-bold text-2xl'>School:-</h3>
                                <div className='w-25 h-1 bg-secondary'>-</div>
                                Kamarali High School Satkhira  <br /> Bangladesh
                                Higher Secondary Certificate; GPA: 4.56.92/5.00 2013
                            </div>
                            <br />


                        </p>

                    </div>
                </div>

            </div>
            <div className='w-50 m-auto  '>
                <h1 className='text-center font-bold text-4xl text-primary my-5 '>Skills</h1>
                <hr />
                <ul className='w-50 bg-red-100 p-10'>
                    <li> <i>Programming Languages</i>: <span>C, C++, Java, Python, PHP,Laravel</span> </li>
                    <li> <i>Programing skill</i>  <span>: Basic Programming knowledge, Clear concept database and algorithm.
                    </span> </li>
                    <li> <i>Development Tools and Fields:</i> <span>HTM5, CSS3, Node.js,Express.js, Mongodb,React,Windows,Linux command.
                    </span> </li>
                    <li> <i>Problem Solving</i> <span>: Strong knowledge in data structure and algorithm. Solved more than thousand
                        competitive programming problems on different online judges URI, Hackerrank etc.
                    </span> </li>
                </ul>
            </div>
        </>
    );
};

export default MyPortFolio;