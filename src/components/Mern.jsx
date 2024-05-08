import React from 'react';
import './Courses.css'; 

const Mern = () => {
  return (
    <>
    <div className="mernpic">
    <div className="card">
      <div className="card-title">MERN Stack Development Course</div>
      <div className="card-content">
        <ul>
          <li>Introduction to MERN Stack</li>
          <li>Setting Up MongoDB</li>
          <li>Building RESTful APIs with Node.js and Express.js</li>
          <li>Using React.js for Frontend Development</li>
          <li>Working with React Router</li>
          <li>State Management with Redux</li>
          <li>Authentication and Authorization</li>
          <li>Database Integration with MongoDB and Mongoose</li>
          <li>Deployment and Hosting</li>
          <li>Testing MERN Applications</li>
          <li>Real-world Projects</li>
        </ul>
      </div>
      <div className="card-footer">
        <button className="btn">Enroll Now</button>
      </div>
    </div>
    </div>
    </>
  );
};

export default Mern;
