import React from "react";
import styles from "../../styles/Booking.module.css";

export default function PersonalForm(props) {
  return (
    <section className={styles.infoform}>
      <h5>Regular tickets</h5>
      <legend className={styles.legend}>
        {props.index === 0 ? "Personal information" : `Guest ${props.index} information`}
      </legend>
      <label className={styles.labels} htmlFor={`regname_${props.index}`}>
        Full name
        <input
          type="text"
          name={`regname_${props.index}`}
          id={`regname_${props.index}`}
          placeholder="Insert your full name"
          minLength="2"
          required
          className="input-text"
        />
      </label>
      <label className={styles.labels} htmlFor={`regemail_${props.index}`}>
        Email
        <input
          type="email"
          name={`regemail_${props.index}`}
          id={`regemail_${props.index}`}
          placeholder="Email address"
          required
          className="input-text"
        />
      </label>

      <label className={styles.labels} htmlFor={`regdob_${props.index}`}>
        Date of birth
        <input
          type="date"
          name={`regdob_${props.index}`}
          id={`regdob_${props.index}`}
          placeholder="Date of birth (DD/MM/YY)"
          max="2004-12-01"
          required
          className="input-text"
        />
      </label>
    </section>
  );
}
