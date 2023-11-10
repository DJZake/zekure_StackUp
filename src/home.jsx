import React from "react";
import User from "./assets/user.png";
import "./index.css";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div>
      <nav>
        <img src={User} className="user" alt="User"></img>
        <h5 className="uname">Username</h5>
        <h5 className="uname">Points: 0</h5>
        <div className="uline"></div>
        <Link to="/home/takequiz">
          <div className="takequiz">Take Quiz</div>
        </Link>
        <Link to="/home/createquiz">
          <div className="createquiz">Create Quiz</div>
        </Link>
        <Link to="/home/leaderboard">
          <div className="leaderboard">Leaderboard</div>
        </Link>
        <Link to="/">
          <div className="logout">Logout</div>
        </Link>
      </nav>
     
    </div>
  );
}
