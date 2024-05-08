import React from 'react'
import './Portfolio.css'
function Portfolio() {
  return (
    <>
    <div className="Container1">
     <div className="card1">
        <div className="code">
          <h3>Quiz App</h3>
          <p>Actual Output</p>
          <img src="/pics/quizoutput.jpg" alt="" />
        </div>
        <h2>Quiz App Project</h2>
        <p>
          This project is a simple quiz application built using HTML, CSS, and
          JavaScript. It allows users to take quizzes on various topics. The
          app provides multiple-choice questions and gives instant feedback on
          the answers selected by the user.
        </p>
      </div>
      <div className="card1">
      <div className="code">
        <h3>Calculator</h3>
        <p>Actual Output</p>
        <img src="/pics/Untitled.png" alt="" />
      </div>
      <h2>Calculator Project</h2>
      <p>
        This project is a simple countdown application built using HTML, CSS,
        and JavaScript.
      </p>
      <p>
        The app provides a user-friendly interface with a date-time picker for
        selecting the target date and time. it updates in real-time until the
        time is reached.
      </p>
      <p>
        This project demonstrates fundamental concepts of web development such
        as DOM manipulation
      </p>
    </div>
    <div className="card1">
      <div className="code">
        <h3>Calculator</h3>
        <p>Actual Output</p>
        <img src="/pics/Caloutput.jpg" alt="" />
      </div>
      <h2>Calculator Project</h2>
      <p>
        This project is a simple calculator app built using HTML, CSS, and
        JavaScript. It allows users to perform basic arithmetic operations such
        as addition, subtraction, multiplication, and division. The calculator
        also supports parentheses for complex expressions.
      </p>
    </div>
    </div>
    </>
  )
}

export default Portfolio