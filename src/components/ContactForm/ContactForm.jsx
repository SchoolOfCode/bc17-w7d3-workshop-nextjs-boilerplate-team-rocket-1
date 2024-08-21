"use client";

import { useState } from "react";
//import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [postcode, setPostcode] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

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
    <>
      <h1>Design Booking</h1>
      <form onSubmit={(event) => handleSubmit(event)}>
        <fieldset>
          <legend>Personal Information</legend>

          <label>
            Name:
            <input
              type="text"
              value={firstName}
              name="name"
              onChange={(event) => handleChange(event)}
            />
          </label>

          <label>
            Postcode:
            <input
              type="text"
              value={postcode}
              name="postcode"
              onChange={(event) => handleChange(event)}
            />
          </label>

          <label>
            House/Flat Number and Street Number:
            <input
              type="text"
              value={address}
              name="address"
              onChange={(event) => handleChange(event)}
            />
          </label>

          <label>
            City:
            <input
              type="text"
              value={city}
              name="city"
              onChange={(event) => handleChange(event)}
            />
          </label>
        </fieldset>

        <fieldset>
          <legend>Contact Information</legend>

          <label>
            Phone Number:
            <input
              type="tel"
              value={phoneNumber}
              name="tel"
              onChange={(event) => handleChange(event)}
            />
          </label>

          <label>
            Email Address:
            <input
              type="email"
              value={email}
              name="email"
              onChange={(event) => handleChange(event)}
            />
          </label>
        </fieldset>

        <button type="submit">Book!</button>
        {(firstName==='' || postcode==='' || address==='' || city==='' ||phoneNumber==='' || email==='' )&& <p>Fil in the form please!</p> }
      </form>
    </>
  );
}
