function LettersFromUser(props) {
  const elements = [];

  if (props.word) {
    for (let i = 0; i < props.word.length; i++) {
      elements.push(
        <div
          className="box-border h-16 w-16 p-4 border-4 rounded-lg shadow-xl"
          key={i}
          id={i}
        >
          {[i + 1]}
        </div>
      );
    }
  }

  return <>{elements}</>;
}

export { LettersFromUser };
