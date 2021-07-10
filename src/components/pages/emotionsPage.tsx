/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useState } from "react";
import cards from "../../cards";
import Layout from "../layout/layout";
import "./style.scss";

function Emotions(_props: any): JSX.Element {
  const [cat] = useState(cards.slice(0, 1).flat()[5]);
  const [info] = useState(cards.slice(1)[5]);
  return (
    <main>
      <h2>{cat}</h2>
      <Layout info={info} />
    </main>
  );
}

export default Emotions;
