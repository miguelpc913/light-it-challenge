import "./Spinner.css";

export default function Spinner() {
  return (
    <>
      <div
        className={`ldsSpinner  spinners`}
        role="alert"
        aria-live="assertive"
      >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}
