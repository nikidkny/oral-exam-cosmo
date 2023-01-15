import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import React from "react";
import Personalinfo from "../Booking/Personalinfo";
import FloatingBasket from "../../components/Booking/FloatingBasket";

import styles from "../../styles/Booking.module.css";
export default function Basket() {
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
  const payload = { area: booking.camping, amount: +totTicketAmount };

  function reserveTicket() {
    if (totTicketAmount >= 1 && booking.camping === booking.camping) {
      fetch("https://bitter-moon-5524.fly.dev/reserve-spot", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((response) => response.json())
        // .then((response) => console.log(response))
        .then((response) => setReserveID(response.id))

        .catch((err) => console.error(err));
      setShowPersonalForm(true);
    }
  }
  console.log(reserveTicket);

  return (
    <>
      {showPersonalForm ? (
        <Personalinfo reserveID={reserveID} />
      ) : (
        <section className={styles.basketpop}>
          <h2>Basket</h2>
          <div>
            {booking.REGTicket >= 1 ? (
              <div className={styles.ticketorderbasket}>
                <h3>Regular pass</h3>
                <h5>
                  Ticket price: <span>{REGticketPrice}</span>,- DKK
                </h5>
              </div>
            ) : (
              <></>
            )}
            {booking.VIPTicket >= 1 ? (
              <div className={styles.ticketorderbasket}>
                <h3>VIP pass</h3>
                <h5>
                  Ticket price: <span>{VIPticketPrice}</span>,- DKK
                </h5>
              </div>
            ) : (
              <></>
            )}
            {(booking.VIPTicket >= 1) | (booking.REGTicket >= 1) ? (
              <div className={styles.ticketamountbasket}>
                <h5>Total number of tickets:</h5>
                <p>{totTicketAmount}</p>
              </div>
            ) : (
              <></>
            )}
          </div>

          <div className={styles.campingorderbasket}>
            <h4>Camping</h4>
            <p>{booking.camping}</p>
          </div>
          <div className={styles.greenorderbasket}>
            <h4>Green camping?</h4>
            <p>{checked === true ? "yes" : "no"}</p>
          </div>
          {booking.rentTent2 >= 1 ? (
            <div>
              <div className={styles.tent2orderbasket}>
                <h3>Tent(s) for 2</h3>
                <p>
                  <span>price: {rentTent2Price},- DKK</span>
                </p>
              </div>
              <div className={styles.tent2orderbasket}>
                <h5>Total number of rented tent(s)</h5>
                <p>{booking.rentTent2}</p>
              </div>
            </div>
          ) : (
            <></>
          )}
          {booking.rentTent3 >= 1 ? (
            <div>
              <div className={styles.tent3orderbasket}>
                <h3>Tent(s)for 3</h3>
                <p>
                  <span>price: {rentTent3Price},- DKK</span>
                </p>
              </div>
              <p>{booking.rentTent3}</p>
            </div>
          ) : (
            <></>
          )}

          <div className={styles.subtotalorderbasket}>
            <h5>Subtotal</h5>
            <p>{subtotal},- DKK</p>
          </div>
          <div className={styles.fixedorderbasket}>
            <h5>Fixed camping fee</h5>
            <p>{fixedPrice},- DKK</p>
          </div>
          <div className={styles.totalorderbasket}>
            <h3>Total</h3>
            <h3>{totalForpay},- DKK</h3>
          </div>
          <button className={styles.button} onClick={reserveTicket}>
            Next page: Personal Information
          </button>
          <FloatingBasket />
        </section>
      )}
    </>
  );
}
