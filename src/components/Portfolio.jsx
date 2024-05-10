import React from 'react';
import './Portfolio.css'; // Import your CSS file if you have one

function Portfolio() {
  return (
    <>
    <div className="all">
    <div className='uppercards'>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="card1">
            <div className="cardheader">
              <h2 className="project-title">Calculator</h2>
            </div>
            <div className="card-content1">
              <p className="project-description">
                This project is a simple calculator app built using HTML, CSS, and JavaScript. 
                It allows users to perform basic arithmetic operations such as addition, subtraction, multiplication,
                and division. The calculator also supports parentheses for complex expressions.
              </p>
              <div>
                <h3>Technologies used:</h3>
              </div>
              <div className="languages-used">
                <span className="language">HTML</span>
                <span className="language">CSS</span>
                <span className="language">JavaScript</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flip-card-back">
          <img className='images' src="/pics/Calculator.jpg"  />
        </div>
      </div>
    </div>


<div className="flip-card">
<div className="flip-card-inner">
  <div className="flip-card-front">
    <div className="card1">
      <div className="cardheader">
        <h2 className="project-title">Countdown_Timer</h2>
      </div>
      <div className="card-content1">
        <p className="project-description">
        This project is a simple cuntdown timer built using HTML, CSS, and JavaScript. 
        The timer typically includes elements such as days, 
        hours, minutes, and seconds, and it dynamically updates in real-time until the 
        target time is reached. It provides a visual representation of the 
        time remaining.
        </p>
        <div>
          <h3>Technologies used:</h3>
        </div>
        <div className="languages-used">
          <span className="language">HTML</span>
          <span className="language">CSS</span>
          <span className="language">JavaScript</span>
        </div>
      </div>
    </div>
  </div>
  <div className="flip-card-back">
    <img className='images' src="/pics/Countdowntimer.jpg"  />
  </div>
</div>
</div>
</div>

<div className='lowercards'>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="card1">
            <div className="cardheader">
              <h2 className="project-title">Quiz</h2>
            </div>
            <div className="card-content1">
              <p className="project-description">
              This project is a simple quiz application built using HTML, 
        CSS, and JavaScript. It allows users to take quizzes on various topics.
         The app provides multiple-choice questions and gives inst
        ant feedback on the answers selected by the user.
              </p>
              <div>
                <h3>Technologies used:</h3>
              </div>
              <div className="languages-used">
                <span className="language">HTML</span>
                <span className="language">CSS</span>
                <span className="language">JavaScript</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flip-card-back">
          <img className='images' src="/pics/Quiz.png"  />
        </div>
      </div>
    </div>


<div className="flip-card">
<div className="flip-card-inner">
  <div className="flip-card-front">
    <div className="card1">
      <div className="cardheader">
        <h2 className="project-title">Weather_App</h2>
      </div>
      <div className="card-content1">
        <p className="project-description">
        A weather app created with HTML, CSS, and JavaScript .
         weather data such as temperature, humidity, and wind speed is displayed.
         JavaScript fetches weather data from an API based on the user's location input
          and dynamically updates the displayed information
        </p>
        <div>
          <h3>Technologies used:</h3>
        </div>
        <div className="languages-used">
          <span className="language">HTML</span>
          <span className="language">CSS</span>
          <span className="language">JavaScript</span>
        </div>
      </div>
    </div>
  </div>
  <div className="flip-card-back">
    <img className='images' src="/pics/Weatherapp.jpg"  />
  </div>
</div>
</div>
</div>
</div>
</>
  );
}

export default Portfolio;
