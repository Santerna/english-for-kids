/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { Link, Router } from "react-router-dom";
import "./style.scss";
import cards from "../../cards";

function MainPage(): JSX.Element {
  const [info] = useState(cards.slice(1)[0]);
  return (
    <main>
      <h2>Categories</h2>
      <section className="main-categories">
        <Link to="/actionA">
          <div className="cat-card">
            <img src="../../assets/img/dance.jpg" alt="cat" />
            <div className="cat-card__title">Actions (Set A)</div>
          </div>
        </Link>
        <Link to="/actionB">
          <div className="cat-card">
            <img src="../../assets/img/open.jpg" alt="cat" />
            <div className="cat-card__title">Actions (Set B)</div>
          </div>
        </Link>
        <Link to="/animalsA">
          <div className="cat-card">
            <img src="../../assets/img/cat.jpg" alt="cat" />
            <div className="cat-card__title">Animals (Set A)</div>
          </div>
        </Link>
        <Link to="/animalsB">
          <div className="cat-card">
            <img src="../../assets/img/bird.jpg" alt="cat" />
            <div className="cat-card__title">Animals (Set B)</div>
          </div>
        </Link>
        <Link to="/clothes">
          <div className="cat-card">
            <img src="../../assets/img/dress.jpg" alt="cat" />
            <div className="cat-card__title">Clothes</div>
          </div>
        </Link>
        <Link to="/emotions">
          <div className="cat-card">
            <img src="../../assets/img/happy.jpg" alt="cat" />
            <div className="cat-card__title">Emotions</div>
          </div>
        </Link>
        <div className="cat-card">
          <img src="../../assets/img/dance.jpg" alt="cat" />
          <div className="cat-card__title">Actions (Set A)</div>
        </div>
        <div className="cat-card">
          <img src="../../assets/img/dance.jpg" alt="cat" />
          <div className="cat-card__title">Actions (Set A)</div>
        </div>
      </section>
    </main>
  );
}

export default MainPage;
