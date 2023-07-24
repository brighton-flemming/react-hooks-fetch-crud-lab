import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questions, setQuestions] = useState([]);

  const handleDeleteItem = (questionId) => {
    fetch(`http://localhost:4000/questions/${questionId}`, {
      method: "DELETE",
    })
      .then((r) => r.json)
      .then(() => {
        const newQuestion = questions.filter(
          (question) => question.id !== questionId
        );
        setQuestions(newQuestion);
      });
  };

  const handleUpdateAnswer = ({ questionsId, correctIndex }) => {
    fetch(`http://localhost:4000/questions/${questionId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ correctIndex }),
    })
      .then((r) => r.json)
      .then((newQuestion) => {
        const newQuestion = questions.map((question) => {
          if (question.id === newQuestion.id) return newQuestion;
          return question;
        });

        setQuestions(newQuestion);
      });
  };

  const questionItems = questions.map((question) => (
    <QuestionItem
      key={question.id}
      question={question}
      onDeleteItem={handleDeleteItem}
      onUpdateAnswer={handleUpdateAnswer}
    />
  ));

  useEffect(() => {
    fetch(" http://localhost:4000/questions")
      .then((response) => response.json())
      .then((questions) => setQuestions(questions))
      .catch((error) => console.error("Error obtaining data:", error));
  }, []);

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionItems}/</ul>
    </section>
  );
}

export default QuestionList;
