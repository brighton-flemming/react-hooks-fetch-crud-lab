import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";
import QuestionItem from "./QuestionItem";


function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  const handleAddQuestion = (newQuestion) => {
    console.log("New Question:", newQuestion);
  };


  const handleDeleteItem = (questionId) => {
    const updatedQuestions = questions.filter((question) => questionId) !== questionId
    setQuestions(updatedQuestions)
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddQuestion={handleAddQuestion}/> : <QuestionList />}
      {questions.map((question) => (
      <QuestionItem key={question.id} question={question} onDeleteItem={handleDeleteItem} />
      ))}
    </main>
  );
}

export default App;
