// import { error } from "console";
import React from "react";

function QuestionItem({ question, onDeleteItem, onUpdateAnswer }) {
  const { id, prompt, answers, correctIndex } = question;

  
  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  const handleDeleteItem = () => onDeleteItem(id);
  const handleUpdateAnswer = (e) => onUpdateAnswer(id, parseInt(e.target.value))

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}
        onUpdateAnswer={handleUpdateAnswer}>{options}</select>
      </label>
      <button className="remove" onClick={handleDeleteItem}>Delete Question</button>
    </li>
  )
}

export default QuestionItem
