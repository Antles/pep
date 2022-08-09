import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPep } from "./pepSlice";

const Pep = () => {
  const pepMessage = useSelector((state) => state.pep.pepMessage);
  const dispatch = useDispatch();

  const handlePepClick = () => {
    // tell pep reducer to get a new pep!
    dispatch(getPep());
  };

  const copyToClipboard = () => {
    // create a new input element so then we can store the text from the pep message
    let temp = document.createElement("input");
    temp.setAttribute("value", pepMessage);
    document.body.appendChild(temp);

    // Highlight its content
    temp.select();

    // Copy the highlighted text
    document.execCommand("copy");

    // Remove it from the body
    document.body.removeChild(temp);
  };

  return (
    <div>
      <div className="center">
        <h1 className="pepMessage" id="pep">
          {pepMessage}
        </h1>
        <div className="ui button" onClick={handlePepClick}>
          Pep!
        </div>
        <div className="ui button" onClick={copyToClipboard()}>
          Copy To Clipboard
        </div>
      </div>
    </div>
  );
};

export default Pep;
