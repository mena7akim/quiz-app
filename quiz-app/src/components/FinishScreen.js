import React from "react";

export default function FinishScreen({
  points,
  maxPoints,
  highestScore,
  dispatch,
}) {
  const percentage = (points / maxPoints) * 100;
  return (
    <>
      <p className="result">
        You Scored <strong>{points}</strong> out of {maxPoints} (
        {Math.ceil(percentage)}%)
      </p>
      <p className="highscore">Highest Score: {highestScore} Points</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        restart
      </button>
    </>
  );
}
