"use client";
import { useState, useEffect } from "react";
import styles from "./Reviews.module.css";

export default function Reviews() {
  const [selectedCountry, setSelectedCountry] = useState(null);

  function selectCountry(name) {
    console.log(name);
    setSelectedCountry(name);
  }

  return (
    <>
      <button onClick={() => selectCountry("England")}>England</button>
      <button onClick={() => selectCountry("Wales")}>Wales</button>
      <button onClick={() => selectCountry("Scotland")}>Scotland</button>
    </>
  );
}
