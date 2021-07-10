/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import "./layout.scss";
import Card from "../card/card";

function Layout(_props: any): JSX.Element {
  const { info } = _props;
  return (
    <div className="main">
      <Card info={info} />
    </div>
  );
}

export default Layout;
