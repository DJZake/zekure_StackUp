import React from 'react'
import './index.css'
import Quizimg from './assets/126.jpg'
import {Link,Route, Routes} from 'react-router-dom'
import Quiz from './Quiz'
import Home from './home'
function takequiz() {
  return (
   <>
   <Home/>
    <div id="takequiz">
        
        <div className="container">
        
          <Link to="/home/takequiz/home/Quiz">
         <div className="randomquiz">
            <img src={Quizimg} alt="" />
            </div>
            </Link>
          
          <div className="joinquiz">
            <h2>Join Quiz</h2>
            <h4>Paste the Link</h4>
            <input type='text'></input>
            <input type="submit" />
          </div>
        </div>
       <Routes>
          <Route path='/Quiz' element={<Quiz/>}/>
        </Routes>
    </div>
    </>
    
  );
}

export default takequiz