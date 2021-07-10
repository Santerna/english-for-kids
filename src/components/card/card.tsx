/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import "./card.scss";

interface Info {
  word: string;
  translation: string;
  image: string;
  audioSrc: string;
}

const Card = ({ info }: any): JSX.Element => {
  const [cardSide, setSide] = useState(true);
  const addClass = () => {
    setSide(!cardSide);
  };
  return (
    <>
      {info.map((card: Info) => {
        const { word, translation, image, audioSrc } = card;
        const imgSrc = `../../assets/${image}`;
        const aSrc = `../../assets/${audioSrc}`;
        const sound = new Audio(aSrc);
        return (
          <div
            className={!cardSide ? "card flipped" : "card"}
            key={word}
            onClick={() => sound.play()}
          >
            <div className="card__front">
              <img src={imgSrc} alt={word} />
              <div className="title">{word}</div>
              <div id="rotate" className="rotate" onClick={() => addClass()} />
              <audio src={aSrc} />
            </div>
            <div className="card__back" key={translation}>
              <div className="word__translation">{translation}</div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
