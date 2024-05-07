import React, { useState } from "react";
import classes from "./Project.module.css";

const ProjectCard = ({ cardInfo }) => {
  const [click, setClick] = useState(false);
  const [isClick, setIsClick] = useState(true);
  const handleClick = () => {
    setClick(isClick);
    setIsClick(click);
  };
  return (
    <div>
      <img
        src={cardInfo.image}
        alt={cardInfo.title}
        className={classes.image}
      />
      <p>
        {" "}
        <strong> Наименование товара: </strong>
        {cardInfo.title}
      </p>
      <span>
        {" "}
        <strong>Цена:</strong> {cardInfo.price}
      </span>
      <button onClick={handleClick}>MORE</button>
      {click && (
        <p>
          <strong>Описание: </strong> {cardInfo.description}
        </p>
      )}
    </div>
  );
};
export default ProjectCard;
