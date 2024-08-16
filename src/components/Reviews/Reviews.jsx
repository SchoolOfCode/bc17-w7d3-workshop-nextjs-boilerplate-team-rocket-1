"use client";
import { useState, useEffect } from "react";
import styles from "./Reviews.module.css";

export default function Reviews() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [reviewData, setReviewData] = useState(null);

  function selectCountry(name) {
    console.log(name);
    setSelectedCountry(name);
  }

  useEffect(() => {
    if (selectedCountry) {
      fetch(
        `https://seal-app-336e8.ondigitalocean.app/reviews?country=scotland`)
      .then(response => response.json())
      .then(data=>{setReviewData(data);
        console.log(data)
      }) 
     
     
    
        
        
     
    }
  }, [selectedCountry]);

  return (
    <>
      <button onClick={() => selectCountry("England")}>England</button>
      <button onClick={() => selectCountry("Wales")}>Wales</button>
      <button onClick={() => selectCountry("Scotland")}>Scotland</button>
    </>
  );
}
