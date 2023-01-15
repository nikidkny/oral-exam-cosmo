import Link from "next/link";
import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import styles from "../../styles/Booking.module.css";

export default function Thanks() {
  const {
    reserveID,
    setReserveID,
    showPersonalForm,
    setShowPersonalForm,
    checked,
    booking,
    REGticketPrice,
    VIPticketPrice,
    rentTent2Price,
    rentTent3Price,
    fixedPrice,
    totTicketAmount,
    subtotal,
    totalForpay,
  } = useContext(AppContext);
  return (
    <section className={styles.thanks}>
      <h2> Thank you for your purchase!</h2>
      <h2>See you at Cosmo!</h2>
      <Link className={styles.buttonthanks} href={"/home"}>
        Back to home page
      </Link>
    </section>
  );
}
