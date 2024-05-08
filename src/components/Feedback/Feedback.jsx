export default function Feedback({feedback:{good, neutral, bad}} ) {
  return (
    <div>
      <p>Good : {good}</p>
      <p>Neutral : {neutral}</p>
      <p>Bad : {bad}</p>
    </div>
  );
}
