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
        shadow-xl bg-gray-200 mt-10 p-2 ml-6 w-42 h-10"
        value={props.inputText}
        onChange={(event) => changedHandler(event)}
      ></input>
    </>
  );
}

export { UserInput };
