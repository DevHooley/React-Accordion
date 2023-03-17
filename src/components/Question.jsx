import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import data from "./data";
// import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlinePlus /> : <AiOutlineMinus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};
export default question;
