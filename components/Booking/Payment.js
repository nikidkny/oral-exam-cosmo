import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import styles from "../../styles/Booking.module.css";
export default function Payment() {
  const {
    reserveID,
    setReserveID,
    showPersonalForm,
    setShowPersonalForm,
    checked,
    greenPrice,
    tent2Price,
    tent3Price,
    totTickets,
    booking,
    RegPrice,
    VIPPrice,
    REGticketPrice,
    VIPticketPrice,
    rentTent2Price,
    rentTent3Price,
    fixedPrice,
    totTicketAmount,
  } = useContext(AppContext);

  return (
    <>
      <section className={styles.payment}>
        <div>
          <h2>Credit Card Details</h2>
        </div>
        <div className={styles.paymentformlayout}>
          <label className={styles.labels} htmlFor="name">
            Cardholder`s name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Full name"
            minLength="2"
            className="input-text"
            required
          />
          <label className={styles.labels} htmlFor="card-number">
            Card number
          </label>
          <input
            type="text"
            name="card-number"
            id="card-number"
            placeholder="123 456 789"
            minLength="9"
            maxLength="11"
            className="input-text"
            required
          />
          <label className={styles.labels} htmlFor="cvv">
            CVV
          </label>
          <input
            type="text"
            name="cvv"
            id="cvv"
            placeholder="CVV"
            minLength="3"
            maxLength="3"
            className="input-text"
            required
          />
          <label className={styles.labels} htmlFor="date">
            Expiration date
          </label>
          <input type="date" name="date" id="date" className="input-text" required />
        </div>
      </section>
    </>
  );
}
