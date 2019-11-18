import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { truncate } from "../Utils/helper";
import { defaultTextSize, defaultTitleSize } from "../Utils/constants";
import "../App.css";

export default function CardView({ post }) {
  const [isActive, setIsActive] = useState(false);
  const { score, by, title, text } = post;

  const handleClick = () => {
    isActive ? setIsActive(false) : setIsActive(true);
  };

  return (
    <Card
      onClick={handleClick}
      border={isActive ? "primary" : ""}
      className={isActive ? "active" : ""}
    >
      <Card.Header className="card-header">
        <div className="card-header-score">
          <p>{score}</p>
        </div>
        <div className="card-header-title">
          <Card.Title>
            {isActive ? title : truncate(title, defaultTitleSize)}
          </Card.Title>
          <Card.Subtitle className="mb-0 text-muted">{by}</Card.Subtitle>
        </div>
      </Card.Header>
      <Card.Body>
        <p>{isActive ? text : truncate(text, defaultTextSize)}</p>
      </Card.Body>
    </Card>
  );
}
