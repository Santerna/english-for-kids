/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/no-cycle */
/* eslint-disable react/button-has-type */
import React, { useState } from "react";
import cards from "../../cards";
import Layout from "../layout/layout";
import "./style.scss";

function ActionB(_props: any) {
  const [cat] = useState(cards.slice(0, 1).flat()[1]);
  const [info] = useState(cards.slice(1)[1]);
  return (
    <main>
      <h2>{cat}</h2>
      <Layout info={info} />
    </main>
  );
}

export default ActionB;
