import React from "react";
import "./../header.css";
const Header = () => {
  return (
    <React.Fragment>
      <h2 className="h">Meme Generator</h2>
      <div className="header">
        <div className="text">
          The meme maker is the tool to create funny memes without much hard
          work the directives to use are <br />
          <ul>
            <li>Select the meme by clicking on generate </li>
            <li>Click on the input button</li>
            <li>Drag the input box to desired location in border box</li>
            <li>Type the content</li>
            <li>Done!</li>
          </ul>
        </div>
        <div className="svg">
          <img src="c-app\src\components\undraw_Designer_by46.svg" alt="" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
