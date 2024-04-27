"use client";

import classes from "./image-picker.module.css";
import { useRef } from "react";

export default function ImagePicker({ label, name }) {
  const imgInput = useRef();

  function handlePickClick() {
    imgInput.current.click();
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imgInput}
        />
        <button className={classes.button} onClick={handlePickClick}>
          Pick an Image
        </button>
      </div>
    </div>
  );
}
