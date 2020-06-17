import React from "react";
import Input from "./Inputs";
const Meme = ({ positions, drop, dragOver, onClick, RandomId, img }) => {
  return (
    <div className="main">
      <div
        className="meme"
        onClick={(e) => onClick(e)}
        draggable={false}
        onDrop={drop}
        onDragOver={dragOver}
      >
        {positions.map((position) => (
          <Input key={position} styles={position} id={RandomId} />
        ))}
        <img draggable={false} src={img} alt="server down" />
      </div>
    </div>
  );
};

export default Meme;
