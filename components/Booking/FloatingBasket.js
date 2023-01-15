import React, { useContext } from "react";
import styles from "../../styles/Booking.module.css";
import Image from "next/image";
import carticon from "../../public/cart-logo.svg";
import { AppContext } from "../context/AppContext";
import cross from "../../public/cross-icon.svg";

export default function FloatingBasket() {
  const { setShowForm, showForm, totTicketAmount } = useContext(AppContext);
  return (
    <button className={styles.hide} onClick={() => setShowForm(!showForm)}>
      {!showForm ? (
        <div className={styles.floatingBasket}>
          <span>{totTicketAmount > 0 ? totTicketAmount : 0}</span>
          <Image className={styles.cartIcon} src={carticon} width={50} height={50} alt="basket-logo" />
        </div>
      ) : (
        <Image src={cross} className={styles.closebasket} width={80} height={80} alt="close basket icon" />
      )}
    </button>
  );
}
