import React, { useState } from "react";
import "./toggler.scss";

function Toggler(): JSX.Element {
  const [toggle, setToggle] = useState(false);
  const triggerToggle = () => setToggle(!toggle);
  return (
    <div className="toggle">
      <div className="mode">Train</div>
      <div
        className={`wrg-toggle ${toggle ? "wrg-toggle--checked" : ""}`}
        onChange={triggerToggle}
      >
        <div className="wrg-toggle-container">
          <div className="wrg-toggle-check">
            <span>🌜</span>
          </div>
          <div className="wrg-toggle-uncheck">
            <span>🌞</span>
          </div>
        </div>
        <div className="wrg-toggle-circle" />
        <input
          className="wrg-toggle-input"
          type="checkbox"
          aria-label="Toggle Button"
        />
      </div>
    </div>
  );
}

export default Toggler;
