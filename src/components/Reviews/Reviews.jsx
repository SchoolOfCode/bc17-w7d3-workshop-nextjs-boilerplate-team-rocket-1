"use client";
import { useState, useEffect } from "react";
import styles from "./Reviews.module.css";

function Thingreview() {
  
}

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
        `https://seal-app-336e8.ondigitalocean.app/reviews?country=${selectedCountry}`)
      .then(response => response.json())
      .then(data=>{setReviewData(data);
      }) 
    }
  }, [selectedCountry]);

  return (
    <>
    <article>
    <h3>Trusted</h3>
    <h4>We've got thousands  of happy customers all over the Uk. Choose your country to see the latest review</h4>
      <button onClick={() => selectCountry("England")}>England</button>
      <button onClick={() => selectCountry("Wales")}>Wales</button>
      <button onClick={() => selectCountry("Scotland")}>Scotland</button>
      {selectedCountry && console.log(reviewData.author)}
        </article>
    </>
      );
}
