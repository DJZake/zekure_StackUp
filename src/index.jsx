import React from 'react'
import Takequiz from "./takequiz";
import Createquiz from "./Createquiz";
import Leaderboard from "./Leaderboard";
import Home from './home';
import Quiz from "./Quiz";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import App from './App';

function index() {
  return (
    <BrowserRouter>
    <Routes>
    <Route index element={<App />} />
    <Route path="/home" element={<Home />} />
    <Route path="home/takequiz" element={<Takequiz />} />
    <Route path="/home/quiz" element={<Quiz />} />
    <Route path="/home/createquiz" element={<Createquiz />} />
    <Route path="home/leaderboard" element={<Leaderboard />} />
    <Route path='home/Quiz' element={<Quiz/>}/>
    <Route path='/home/takequiz/home/Quiz' element={<Quiz/>}/>

  </Routes>
  </BrowserRouter>
  )
}

export default index