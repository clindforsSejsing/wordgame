import React, { useEffect, useState } from 'react';
// import './Timer.css';

function Timer(props) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []);
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, [count]);

  return (
    <>
      <h1>Tid: {count} sekunder</h1>;
    </>
  );
}
export { Timer };
