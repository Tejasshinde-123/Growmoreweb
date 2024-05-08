import React from 'react';
import './Courses.css'; 

const Pythons = () => {
  return (
    <>
    <div className="pythonpics">
    <div className="card">
      <div className="card-title">Python Programming Course</div>
      <div className="card-content">
        <ul>
          <li>Python Basics and Syntax</li>
          <li>Data Types and Data Structures</li>
          <li>Control Flow and Loops</li>
          <li>Functions and Modules</li>
          <li>File Handling</li>
          <li>Object-Oriented Programming (OOP)</li>
          <li>Error Handling and Exceptions</li>
          <li>Python Libraries (e.g., NumPy, Pandas)</li>
          <li>Web Scraping with Python</li>
          <li>Building Web Applications with Flask/Django</li>
          <li>Machine Learning with Python</li>
          <li>Project Work and Portfolio Building</li>
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

export default Pythons;
