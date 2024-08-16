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
        `https://seal-app-336e8.ondigitalocean.app/reviews?country=${selectedCountry}`
      )
        .then((response) => response.json())
        .then((data) => {
          setReviewData(data);
        });
    }
  }, [selectedCountry]);

  return (
    <div className={styles.wrapper}>
      <article className={styles.reviewArticle}>
        <h2>Trusted</h2>
        <h3>
          We've got thousands of happy customers all over the Uk. Choose your
          country to see the latest review
        </h3>
        <button onClick={() => selectCountry("England")}>England</button>
        <button onClick={() => selectCountry("Wales")}>Wales</button>
        <button onClick={() => selectCountry("Scotland")}>Scotland</button>
        <h4>{reviewData && reviewData.text}</h4>
        <p>
          {reviewData && reviewData.author} {reviewData && reviewData.location}
        </p>
      </article>
    </div>
  );
}
