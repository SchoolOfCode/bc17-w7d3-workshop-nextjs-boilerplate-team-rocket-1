"use client";

import { useReducer, useState } from "react";
import styles from "./ContactForm.module.css";

const initialState = {
  data: {
    firstName: "",
  },
  error: false,
};

function rocketReducer(state, action) {
  switch (action.type) {
    case "CHANGE_FIELD":
      return {
        data: {
          ...state.data,
          [action.payload.fieldName]: action.payload.fieldValue,
        },
      };
    default:
      return state;
  }
}

export default function ContactForm() {
  const [state, dispatch] = useReducer(rocketReducer, initialState);

  const [error, setError] = useState(false);

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

    if (!state.data.firstName) {
      setError(true);
      return;
    }

    if (error) {
      setError(false);
    }

    console.log(
      `Name: ${state.data.firstName}
    `
    );
    //  Postcode: ${postcode}
    //   Address: ${address}
    //   City: ${city}
    //   Phone number: ${phoneNumber}
    //   Email: ${email}`
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
        </fieldset>

        <fieldset className={styles.bottomFieldset}>
          <legend>Contact Information</legend>
        </fieldset>

        <button type="submit" className={styles.button}>
          Book!
        </button>
        {error && <p>Fill in the form please!</p>}
      </form>
    </div>
  );
}
