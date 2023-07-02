import React from "react";

export default function Progress({ index, numQuestions, points, maxPoints }) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + 1}></progress>
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        Points: {points} / {maxPoints}
      </p>
    </header>
  );
}
