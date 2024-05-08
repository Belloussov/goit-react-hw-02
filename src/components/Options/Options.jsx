export default function Options({updateFeedback,totalFeedback}) {
  return (
    <div>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      {totalFeedback > 0 ? <button>Reset</button> : <div></div> } 
    </div>
  );
}
