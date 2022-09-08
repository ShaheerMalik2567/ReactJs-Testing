import { useState } from "react";
import Output from "./output";

const Greetings = () => {
  const [changedText, setChangedText] = useState(false);

  const changeHandler = () => {
    setChangedText(true);
  };

  return (
    <div>
      <h1>Hello</h1>
      {!changedText && <Output>Welcome to Shaheer's Website</Output>}
      {changedText && <Output>The text is Changed</Output>}

      <button onClick={changeHandler}>Change Text!</button>
    </div>
  );
};

export default Greetings;
