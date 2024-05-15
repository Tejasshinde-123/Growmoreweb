import React from 'react'
import './CourseList.css'
import { FaReact,FaHtml5,FaCss3Alt,FaNodeJs,FaJava,FaPython ,FaAngular} from 'react-icons/fa';
import {SiDatabricks,SiMongodb} from 'react-icons/si';
import {DiMysql} from 'react-icons/di';
import {GiArtificialHive} from 'react-icons/gi';

function CourseList() {
  return (
    <>
    <div className="List">
        <div className="courses">
            <div className="round"><FaReact /></div>
            <div className="name">React</div>
        </div>
        <div className="courses">
            <div className="round"><FaHtml5 /></div>
            <div className="name">Html</div>
        </div>
        <div className="courses">
            <div className="round"><FaCss3Alt /></div>
            <div className="name">Css</div>
        </div>
        <div className="courses">
            <div className="round"><FaNodeJs/></div>
            <div className="name">Nodejs</div>
        </div>
        <div className="courses">
            <div className="round"><FaJava /></div>
            <div className="name">Java</div>
        </div>
        <div className="courses">
            <div className="round"><FaPython /></div>
            <div className="name">Python</div>
        </div>
        <div className="courses">
            <div className="round"><SiDatabricks /></div>
            <div className="name">DataScience</div>
        </div>
        <div className="courses">
            <div className="round"><GiArtificialHive /></div>
            <div className="name">AI</div>
        </div>
        <div className="courses">
            <div className="round"><DiMysql /></div>
            <div className="name">SQl</div>
        </div>
        <div className="courses">
            <div className="round"><SiMongodb /></div>
            <div className="name">Mongodb</div>
        </div>
        <div className="courses">
            <div className="round"><FaAngular /></div>
            <div className="name">Angular</div>
        </div>
    </div>
    </>
  )
}

export default CourseList