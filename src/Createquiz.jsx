import React, { useEffect, useState } from "react";
import "./index.css";
import Quizimg from "./assets/126.jpg";
import Home from "./home";
function Createquiz() {
  const [question, setQuestion] = useState("");
  const [op1, setOption1] = useState("");
  const [op2, setOption2] = useState("");
  const [op3, setOption3] = useState("");
  const [op4, setOption4] = useState("");
  const [crt, setCorrect] = useState("");
  const [loading, setLoading] = useState(false);

  // const handleQuestion = () => {
  //   fetch("http://127.0.0.1:5000/create", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ question, op1, op2, op3, op4, crt }),
  //   })
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("failed");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log("successful:", data);
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error.message);
  //     });
  // };
  const handleQuestion = async () => {
    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:5000/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question, op1, op2, op3, op4, crt }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit question");
      }

      const data = await response.json();
      console.log("Successful:", data);
      setQuestion("");
      setOption1("");
      setOption2("");
      setOption3("");
      setOption4("");
      setCorrect("");
    } catch (error) {
      console.error("Error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (<>
    <Home/>
    
    <div id="Createquiz">
      <div className="questionbox">
        <h5>Question No 1</h5>
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          required
          placeholder="Enter the Question"
        ></textarea>
        <input
          type="text"
          value={op1}
          onChange={(e) => setOption1(e.target.value)}
          required
          placeholder="Option 1"
        ></input>
        <input
          type="text"
          value={op2}
          onChange={(e) => setOption2(e.target.value)}
          required
          placeholder="Option 2"
        ></input>
        <input
          type="text"
          value={op3}
          onChange={(e) => setOption3(e.target.value)}
          required
          placeholder="Option 3"
        ></input>
        <input
          type="text"
          value={op4}
          onChange={(e) => setOption4(e.target.value)}
          required
          placeholder="Option 4"
        ></input>
        <div className="qstnline"></div>
        <input
          type="text"
          value={crt}
          onChange={(e) => setCorrect(e.target.value)}
          required
          placeholder="Correct Answer"
        ></input>
      </div>

      <div className="quizbox">
        <h4>+ Add QUIZ</h4>
      </div>
      <button className="s-buttonn" onClick={handleQuestion} disabled={loading}>
        Submit
      </button>
    </div></>
  );
}

export default Createquiz;
