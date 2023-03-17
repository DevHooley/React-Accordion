import React, { useState } from "react";
import question from "./components/Question";
import data from "./components/Data";
import SingleQuestion from "./components/Question";

function App() {
  const [question, setQuestion] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>question and answers about login</h3>
        <section className="info">
          {question.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}
export default App;
