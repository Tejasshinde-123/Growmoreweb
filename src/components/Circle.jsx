import React, { useEffect } from 'react';
import './Circle.css'
import { Link } from 'react-router-dom'
import { FaReact,FaHtml5,FaCss3Alt,FaNodeJs,FaJava,FaPython ,FaAngular} from 'react-icons/fa';
import {SiDatabricks,SiMongodb} from 'react-icons/si';
import {DiMysql} from 'react-icons/di';
import {GiArtificialHive} from 'react-icons/gi';
const Circle = () => {

  useEffect(() => {
    const courses = document.querySelectorAll('.course');

    const radius = 200;
    const totalCourses = courses.length;
    const angleIncrement = (2 * Math.PI) / totalCourses;

    courses.forEach((course, index) => {
      const angle = index * angleIncrement;
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);

      course.style.left = `${radius + x - course.offsetWidth / 2}px`;
      course.style.top = `${radius + y - course.offsetHeight / 2}px`;
    });
  }, []);

  return (
    <div className="container">
      <div className="circle" id="circle">
        <div className="course">
        <i><FaReact /></i>
         
        </div>
        <div className="course">
        <i ><FaHtml5 /></i>
        </div>
        <div className="course">
          <i><FaCss3Alt /></i>
        </div>
        <div className="course">
          <i><FaNodeJs /></i>
        </div>
        <div className="course">
          <i><FaJava /></i>
        </div>
        <div className="course">
         <Link to='/Pythons'><i><FaPython /></i></Link> 
        </div>
        <div className="course">
          <i><SiDatabricks /></i>
        </div>
        <div className="course">
         <i><GiArtificialHive /></i>
        </div>
        <div className="course">
         <i><DiMysql /></i>
        </div>
        <div className="course">
          <i><SiMongodb /></i>
        </div>
        <div className="course">
          <i><FaAngular /></i>
        </div>
      </div>
    </div>
  );
};

export default Circle;
