"use client";

import { useState } from "react";
import "./page.css";

export default function ContactForm() {

  const [ firstName, setFirstName ] = useState("")
  const [ postcode, setPostcode ] = useState("")
  const [ address, setAddress ] = useState("")
  const [ city, setCity ] = useState("")



  function handleChange(event) {

    if (event.target.name==='name') {
      setFirstName(event.target.value)
      console.log(event.target.name);
    } 
    if (event.target.name==='postcode') {
      setPostcode(event.target.value)
      console.log(event.target.name);
    } 
    if (event.target.name==='address') {
      setAddress(event.target.value)
    } 
    if (event.target.name==='city') {
      setCity(event.target.value)
    } 
  }

  return (
    <>
      <h1>Design Booking</h1>
      <form>
        <fieldset>
          <legend>Personal Information</legend>
          
          <label>Name:
            <input type="text" value={firstName} name="name" onChange={(event) => handleChange(event)} />
          </label>

          <label>Postcode:
            <input type="text" value={postcode} name="postcode" onChange={(event) => handleChange(event)}/>
          </label>

          <label>House/Flat Number and Street Number:
            <input type="text" value={address} name="address" onChange={(event) => handleChange(event)}/>
          </label>

          <label>City:
            <input type="text" value={city} name="city" onChange={(event) => handleChange(event)}/>
          </label>

        </fieldset>

        <fieldset>
          <legend>Contact Information</legend>
          
          <label>Phone Number:
            <input type="tel" value=""/>
          </label>

          <label>Email Address:
            <input type="email" value=""/>
          </label>

        </fieldset>

        <button>Rockets</button>
    



      </form>
    </>
  );
}
