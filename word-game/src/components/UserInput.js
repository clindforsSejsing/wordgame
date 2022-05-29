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
        shadow-xl bg-slate-100 mt-10 p-2 w-42 h-10 font-serif font-medium text-2x md:ml-52"
        value={props.inputText}
        onChange={(event) => changedHandler(event)}
      ></input>
    </>
  );
}

export { UserInput };
