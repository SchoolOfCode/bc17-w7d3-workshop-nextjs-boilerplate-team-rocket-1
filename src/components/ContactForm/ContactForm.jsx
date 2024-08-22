"use client";

import { useReducer, useState } from "react";
import styles from "./ContactForm.module.css";

const initialState = {
  data: {
    firstName: "",
    postcode: "",
    address: "",
    city: "",
    phoneNumber: "",
    email: "",
  },
  status: "editing",
};

function rocketReducer(state, action) {
  console.log("REDUCER ACTION" + action.type);

  switch (action.type) {
    case "CHANGE_FIELD":
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.fieldName]: action.payload.fieldValue,
        },
      };

    case "CHANGE_ERROR":
      console.log("REDUCER ERROR");
      return {
        ...state,
        status: "error",
      };

    case "FORM_SUBMITTING":
      console.log("REDUCER SUBMITTING");
      return {
        ...state,
        status: "submitting",
      };

    case "FORM_SUCCESS":
      console.log("REDUCER SUCCESS");
      return {
        ...state,
        status: "success",
      };

    default:
      return state;
  }
}

export default function ContactForm() {
  const [state, dispatch] = useReducer(rocketReducer, initialState);

  function handleChange(event) {
    dispatch({
      type: "CHANGE_FIELD",
      payload: {
        fieldName: event.target.name,
        fieldValue: event.target.value,
      },
    });
  }

  function handleSubmit(event) {
    event.preventDefault(); // Prevent form default behaviour (posting to itself/refreshing the page)

    if (
      // If an error occurred
      !state.data.firstName ||
      !state.data.postcode ||
      !state.data.address ||
      !state.data.city ||
      !state.data.phoneNumber ||
      !state.data.email
    ) {
      dispatch({
        type: "CHANGE_ERROR",
      });
      console.log("GOT HERE 1!!!");
      console.log(state.status);
      return;
    }

    console.log("GOT HERE 2!!!");

    // If we are still in this function (so no error), then submit the form
    dispatch({
      type: "FORM_SUBMITTING",
    });
    console.log("GOT HERE 3!!!");
    console.log(state.status);

    setTimeout(() => {
      dispatch({ type: "FORM_SUCCESS" });
      console.log("GOT HERE 4!!!");
      console.log(state.status);
    }, 3000);

    console.log(
      `Name: ${state.data.firstName}
      Postcode: ${state.data.postcode}
      Address: ${state.data.address}
      City: ${state.data.city}
      phoneNumber: ${state.data.phoneNumber}
      Email: ${state.data.email}`
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
              value={state.data.firstName}
              name="firstName"
              onChange={(event) => handleChange(event)}
            />
          </label>

          <label>
            Postcode:
            <input
              className={styles.inputBox}
              type="text"
              value={state.data.postcode}
              name="postcode"
              onChange={(event) => handleChange(event)}
            />
          </label>

          <label>
            Address:
            <input
              className={styles.inputBox}
              type="text"
              value={state.data.address}
              name="address"
              onChange={(event) => handleChange(event)}
            />
          </label>

          <label>
            City:
            <input
              className={styles.inputBox}
              type="text"
              value={state.data.city}
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
              value={state.data.phoneNumber}
              name="phoneNumber"
              onChange={(event) => handleChange(event)}
            />
          </label>

          <label>
            Email Address:
            <input
              className={styles.inputBox}
              type="email"
              value={state.data.email}
              name="email"
              onChange={(event) => handleChange(event)}
            />
          </label>
        </fieldset>

        <button type="submit" className={styles.button}>
          Book!
        </button>
        {state.status === "error" && <p>Fill in the form please!</p>}
      </form>
    </div>
  );
}
