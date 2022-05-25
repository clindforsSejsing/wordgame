// import './UserInput.css';

function UserInput(props) {
  let changedHandler = (event) => {
    props.changeText(event.target.value);
  };

  return (
    <>
      <label htmlFor="guess"></label>
      <input
        type="text"
        className="rounded
        shadow-xl bg-pink-500"
        value={props.inputText}
        onChange={(event) => changedHandler(event)}
      ></input>
    </>
  );
}

export { UserInput };
