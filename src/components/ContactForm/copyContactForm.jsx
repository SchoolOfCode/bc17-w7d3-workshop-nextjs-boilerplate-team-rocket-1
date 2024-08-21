"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [postcode, setPostcode] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  function handleChange(event) {
    if (event.target.name === "name") {
      setFirstName(event.target.value);
    }
    if (event.target.name === "postcode") {
      setPostcode(event.target.value);
    }
    if (event.target.name === "address") {
      setAddress(event.target.value);
    }
    if (event.target.name === "city") {
      setCity(event.target.value);
    }
    if (event.target.name === "tel") {
      setPhoneNumber(event.target.value);
    }
    if (event.target.name === "email") {
      setEmail(event.target.value);
    }
  }

  function handleSubmit(event) {
    event.preventDefault(); // Prevent form default behaviour (posting to itself/refreshing the page)

    if (
      !firstName ||
      !postcode ||
      !address ||
      !city ||
      !phoneNumber ||
      !email
    ) {
      setError(true);
      return;
    }

    if (error) {
      setError(false);
    }

    console.log(
      `Name: ${firstName}
      Postcode: ${postcode}
      Address: ${address}
      City: ${city}
      Phone number: ${phoneNumber}
      Email: ${email}`
    );
  }

  return (
    <div className={styles.wrapper}>
      <h1>Design Booking</h1>
      <form onSubmit={(event) => handleSubmit(event)}>
        <fieldset>
          <legend>Personal Information</legend>

          <label>
            Name:
            <input
              className={styles.inputBox}
              type="text"
              value={firstName}
              name="name"
              onChange={(event) => handleChange(event)}
            />
          </label>

          <label>
            Postcode:
            <input
              className={styles.inputBox}
              type="text"
              value={postcode}
              name="postcode"
              onChange={(event) => handleChange(event)}
            />
          </label>

          <label>
            House/Flat Number and Street Number:
            <input
              className={styles.inputBox}
              type="text"
              value={address}
              name="address"
              onChange={(event) => handleChange(event)}
            />
          </label>

          <label>
            City:
            <input
              className={styles.inputBox}
              type="text"
              value={city}
              name="city"
              onChange={(event) => handleChange(event)}
            />
          </label>
        </fieldset>

        <fieldset className={styles.bottomFieldset}>
          <legend>Contact Information</legend>

          <label>
            Phone Number:
            <input
              className={styles.inputBox}
              type="tel"
              value={phoneNumber}
              name="tel"
              onChange={(event) => handleChange(event)}
            />
          </label>

          <label>
            Email Address:
            <input
              className={styles.inputBox}
              type="email"
              value={email}
              name="email"
              onChange={(event) => handleChange(event)}
            />
          </label>
        </fieldset>

        <button type="submit" className={styles.button}>Book!</button>
        {error && <p>Fill in the form please!</p>}
      </form>
    </div>
  );
}
