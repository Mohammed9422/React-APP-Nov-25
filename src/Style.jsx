import React from "react";
import styles from "./button.module.css"; //

const Style = () => {
  let styleObj = {
    backgroundColor: "slateblue",
    color: "white",
    fontSize: "27px",
    border: "1px solid grey",
    padding:"10px"
  };
  return (
    <div style={styleObj}>
      <h2>lorem Ipusm</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
        doloremque?
      </p>
      <button className={styles.button}>Buy Hosting</button>
    </div>
  );
};

export default Style;
