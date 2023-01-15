import React from "react";
import styles from "../../styles/Booking.module.css";

export default function PersonalForm(props) {
  return (
    <section className={styles.infoform}>
      <h5>VIP tickets</h5>
      <legend className={styles.legend}>
        {props.index === 0 ? "Personal information" : `Guest ${props.index} information`}
      </legend>
      <label className={styles.labels} htmlFor={`vipname_${props.index}`}>
        Full name
        <input
          type="text"
          name={`vipname_${props.index}`}
          id={`vipname_${props.index}`}
          placeholder="Insert your full name"
          minLength="2"
          required
          className="input-text"
        />
      </label>
      <label className={styles.labels} htmlFor={`vipemail_${props.index}`}>
        Email
        <input
          type="email"
          name={`vipemail_${props.index}`}
          id={`vipemail_${props.index}`}
          placeholder="Email address"
          required
          className="input-text"
        />
      </label>

      <label className={styles.labels} htmlFor={`vipdob_${props.index}`}>
        Date of birth
        <input
          type="date"
          name={`vipdob_${props.index}`}
          id={`vipdob_${props.index}`}
          placeholder="Date of birth (DD/MM/YY)"
          max="2004-12-01"
          required
          className="input-text"
        />
      </label>
    </section>
  );
}
