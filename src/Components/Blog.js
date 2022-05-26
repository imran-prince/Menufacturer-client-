import React from 'react';
import { Accordion } from 'react-bootstrap';
const Blog = () => {
    return (
        <div id='Faq' className='container w-50 m-auto mt-5 mb-5 shadow-lg px-10 pb-5  ' style={{ borderRadius: "20px" }}>

            <h2 className='text-center m-5 text-primary text-3xl font-bold '><i>Frequently asked Questions</i></h2>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header className='text-red-400'>1. How will you improve the performance of a React Application ?
                        <hr />
                    </Accordion.Header>
                    <Accordion.Body>
                        1 . Keeping component state local where necessary.<br></br>
                        2 . Memoizing React components to prevent unnecessary re-renders.<br></br>
                        3.Code-splitting in React using dynamic import()<br></br>
                        4. Windowing or list virtualization in React.<br></br>
                        5. Lazy loading images in React<br></br>


                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header className='text-red-400'>2.What are the different ways to manage a state in a React application
                        ?</Accordion.Header>
                    <hr />
                    <Accordion.Body>
                        1. Local state.<br></br>
                        2. Global state.<br></br>
                        3. Server state.<br></br>
                        4.URL state.<br></br>




                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header className='text-red-400'>3. How does prototypical inheritance work ?</Accordion.Header>
                    <hr />
                    <Accordion.Body>
                        The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the prototype of an object, we use Object. getPrototypeOf and Object.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header  className='text-red-400'>4.What is a unit test? Why should write unit tests?</Accordion.Header>
                    <hr />
                    <Accordion.Body>
                        Unit tests are typically automated tests written and run by software developers to ensure that a section of an application known as the unit meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header  className='text-red-400'>5.You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</Accordion.Header>
                    <hr />
                    <Accordion.Body>
                    At first this product searching by name .if search name includes in array then find out that product.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

        </div>
    );
};

export default Blog;