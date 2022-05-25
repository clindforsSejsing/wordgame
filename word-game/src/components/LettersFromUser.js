import './LettersFromUser.css';
import '../../src/assets/main.css';

function LettersFromUser(props) {
  const elements = [];

  if (props.word) {
    for (let i = 0; i < props.word.length; i++) {
      elements.push(
        <div key={i} id={i} className="flex-1 w-4 bg-yellow-600">
          {[i + 1]}
        </div>
      );
    }
  }

  return <>{elements}</>;
}

export { LettersFromUser };
