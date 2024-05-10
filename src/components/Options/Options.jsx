import css from "./Options.module.css";

export default function Options({
  updateFeedback,
  totalFeedback,
  handelReset,
}) {
  return (
    <div className={css.container}>
      <button className={css.button} onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button className={css.button} onClick={() => updateFeedback("neutral")}>
        Neutral
      </button>
      <button className={css.button} onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      {totalFeedback !== 0 ? (
        <button className={css.button} onClick={handelReset}>
          Reset
        </button>
      ) : (
        <div></div>
      )}
    </div>
  );
}
