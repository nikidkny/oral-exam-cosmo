import { useContext, useState, useRef } from "react";
import React from "react";
import CountDown from "./CountDown";
import { AppContext } from "../context/AppContext";
import Payment from "./Payment";
import VIPPersonalForm from "./VIPPersonalform";
import REGPersonalForm from "./REGPersonalform";
import styles from "../../styles/Booking.module.css";
import Thanks from "./Thanks";
import FloatingBasket from "../../components/Booking/FloatingBasket";

export default function Personalinfo({ seconds }) {
  const {
    reserveID,
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
    showThanks,
    setShowThanks,
  } = useContext(AppContext);

  const [show, setShow] = useState(false);
  const fullfillres = useRef();

  async function fullfillReservation() {
    const url = "https://localhost:8000";
    const url2 = "https://udfchraccrfladlsvbzh.supabase.co";
    const bookedTicket = {};
    const res = await fetch(url + "/fullfill-reservation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: reserveID,
      }),
    });

    function collectTicketData(ticketVer, formElements, numOfTickets) {
      let processed = 0;
      return Array.from(formElements).reduce((guest, e, i) => {
        if (i % 2 === 0) {
          processed++;
          if (processed > numOfTickets) return guest;
          guest.push({
            fullname: formElements[i].value,
            email: formElements[i + 1].value,
            ticketVer: ticketVer,
          });
        }
        return guest;
      }, []);
    }

    const regguest = collectTicketData("regular", fullfillres.current.elements, booking.REGTicket);
    const vipguest = collectTicketData("VIP", fullfillres.current.elements, booking.VIPTicket);
    console.log(regguest, vipguest);
    const options = {
      method: "POST",
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkZmNocmFjY3JmbGFkbHN2YnpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzA4NzQzODEsImV4cCI6MTk4NjQ1MDM4MX0.0eTW-TRibvc-FFW6XlCaTEfX52g-3SsrjMh3t7XXvIw",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkZmNocmFjY3JmbGFkbHN2YnpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzA4NzQzODEsImV4cCI6MTk4NjQ1MDM4MX0.0eTW-TRibvc-FFW6XlCaTEfX52g-3SsrjMh3t7XXvIw",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        REGTicket: +booking.REGTicket,
        VIPTicket: +booking.VIPTicket,
        rentTent3: +booking.rentTent2,
        rentTent2: +booking.rentTent3,
        camping: booking.camping,
        regguest: regguest,
        vipguest: vipguest,
        // greenCamping: booking.greenCamping,
      }),
    };

    fetch(url2 + "/rest/v1/order", options)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));

    console.log(reserveID.id);
    return await res.json();
  }
  async function submit(e) {
    e.preventDefault();
    fullfillReservation();
    setShowThanks(true);
  }
  // display of personal form as many times as there is in the basket
  function displayREGPersform() {
    let personalInfoREG = [];
    for (let i = 0; i < booking.REGTicket; i++) {
      personalInfoREG.push(<REGPersonalForm index={i} key={i} />);
    }
    return personalInfoREG;
  }
  function displayVIPPersform() {
    let personalInfoVIP = [];
    for (let i = 0; i < booking.VIPTicket; i++) {
      personalInfoVIP.push(<VIPPersonalForm index={i} key={i} />);
    }
    return personalInfoVIP;
  }
  return (
    <section className={styles.personalinfofull}>
      {showThanks ? (
        <Thanks />
      ) : (
        <div>
          <div>
            <h2>Personal information</h2>
          </div>
          <div className={styles.personalcardlayout}>
            <section className={styles.ordersummary}>
              <h2>Order summary</h2>
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
                <h3>Camping</h3>
                <p>{booking.camping}</p>
              </div>
              <div className={styles.greenorderbasket}>
                <h3>Green camping?</h3>
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
            </section>
            <div>
              <CountDown seconds={300} />
              <form ref={fullfillres} onSubmit={submit}>
                <div className={styles.personalformlayout}>
                  {displayREGPersform()}
                  {displayVIPPersform()}
                </div>
                <hr></hr>
                <Payment />
                <button className={styles.button}>PAY</button>
              </form>
            </div>
          </div>
          <FloatingBasket />
        </div>
      )}
    </section>
  );
}
