/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/no-cycle */
/* eslint-disable react/button-has-type */
import React, { useState } from "react";
import cards from "../../cards";
import Layout from "../layout/layout";
import "./style.scss";

function AnimalsB(_props: any) {
  const [cat] = useState(cards.slice(0, 1).flat()[3]);
  const [info] = useState(cards.slice(1)[3]);
  return (
    <main>
      <h2>{cat}</h2>
      <Layout info={info} />
    </main>
  );
}

export default AnimalsB;
