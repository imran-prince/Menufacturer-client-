import React from 'react';
import { Accordion } from 'react-bootstrap';
const Blog = () => {
    return (
        <div id='Faq' className='container w-50 m-auto mt-5 mb-5 shadow-lg pt-2 pb-5  ' style={{ borderRadius: "20px" }}>
            {/* <PageTitle helmet='blog'></PageTitle> */}
            <h2 className='text-center m-5 text-warning '>Frequently asked Questions</h2>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Difference between Node.JS and Javascript ?
                    </Accordion.Header>
                    <Accordion.Body>
                        *** Javascript<br></br>
                        1.Javascript is a programming language that is used for writing scripts on the website.
                        2.Javascript can only be run in the browsers.
                        3.It is basically used on the client-side.
                        4.Javascript is capable enough to add HTML and play with the DOM.
                        5.Some of the javascript frameworks are RamdaJS, TypedJS, etc.
                        <hr />
                        *** Node.Js<br></br>
                        1.NodeJS is a Javascript runtime environment.
                        2.We can run Javascript outside the browser with the help of NodeJS.
                        3.Nodejs does not have capability to add HTML tags.
                        4.Nodejs is used in server-side development.
                        5.Nodejs is written in C, C++ and Javascript.


                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Difference between SQL and NoSQL
                        ?</Accordion.Header>
                    <Accordion.Body>
                        *** SQL <br></br>
                        1.RELATIONAL DATABASE MANAGEMENT SYSTEM RDBMS.
                        2.These databases have fixed or static or predefined schema.
                        3.These databases are best suited for complex queries.
                        4.Vertically Scalable.

                        <hr />
                        *** NoSQL<br></br>
                        1.Non-relational or distributed database system.
                        2.They have dynamic schema.
                        3.These databases are best suited for hierarchical data storage.
                        4.These databases are not so good for complex queries.
                        5.Horizontally scalable.


                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>What is the purpose of jwt and how does it work ?</Accordion.Header>
                    <Accordion.Body>
                        JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                        For beginning developers, JSON stands for JavaScript Object Notation and is a text-based format for transmitting data across web applications. It stores information in an easy-to-access manner, both for developers and computers. It can be used as a data format by any programming language and is quickly becoming the preferred syntax for APIs, surpassing XML.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>When should you use nodejs and when should you use mongodb ?</Accordion.Header>
                    <Accordion.Body>
                        There are many web servers built with nodejs that will then use MongoDB for storing data. MongoDB offers an API library that runs within a Nodejs application to give you programmatic access to MongoDB so you can create databases and then add, query, update or delete data from the MongoDB database.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

        </div>
    );
};

export default Blog;