import React, { useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";


function App() {
  const navigate=useNavigate();
    const [action, setAction] = useState("Login");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        fetch("http://127.0.0.1:5000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Login failed");
                }
                return response.json();
            })
            .then((data) => {
              console.log('success',data[email]);
                navigate('/home')
            })
            .catch((error) => {
              window.alert("email and password does'nt match!")
                console.error("Error:", error.message);
            });
    };

    const handleRegister = () => {
        fetch("http://127.0.0.1:5000/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Registration failed");
                }
                return response.json();
            })
            .then((data) => {
                console.log("Registration successful:", data);
                navigate('/home')
                
            })
            .catch((error) => {
                console.error("Error:", error.message);
            });
    };

    return (
    <div className="homepage">
      <h1>Quiz Master</h1>
      <div className="underline"></div>
      <button
        className={action === "Login" ? "submit white" : "submit"}
        onClick={() => setAction("Login")}>
        Login
      </button>
      <button
        className={action === "Register" ? "submit white" : "submit"}
        onClick={() => setAction("Register")}
      >
        Register
      </button>
      {action === "Register" ? (
        <div></div>
      ) : (
        <div>
          <div className="box">
            <input
              type="mail"
              className="password"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            ></input>
          </div>
          <div className="box">
            <input
              type="password"
              className="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            ></input>
          </div>
          <button className="btn" onClick={handleLogin}>
                    Login
          </button>
        </div>
      )}

      {action === "Login" ? (
        <div></div>
      ) : (
        <div>
          <div className="box">
            <input
              type="text"
              className="username"
              placeholder="Username"
              required
            ></input>
          </div>
          <div className="box">
            <input
              type="mail"
              className="password"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            ></input>
          </div>
          <div className="box">
            <input
              type="password"
              className="password"
              placeholder="Password"
              required
            ></input>
          </div>
          <div className="box">
            <input
              type="password"
              className="re-password"
              placeholder="Confirm Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            ></input>
          </div>
          <button className="btn" onClick={handleRegister}>
                    Register
          </button>
        </div>
      )}
    </div>
    );
}

export default App;
