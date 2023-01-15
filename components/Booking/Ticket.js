import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import styles from "../../styles/Booking.module.css";

export default function Ticket() {
  const {
    show,
    handleChange,
    totTicketAmount,
    booking,
    RegPrice,
    VIPPrice,
    REGticketPrice,
    VIPticketPrice,
    totalOnlyTicketPrice,
  } = useContext(AppContext);
  console.log(totTicketAmount, REGticketPrice, VIPticketPrice);
  return (
    <div className={styles.ticketSec}>
      <h2>Tickets</h2>
      <p>There is a 99,- DKK fixed price per purchase</p>
      <div className={styles.ticketboxes}>
        <div className={styles.VIPticketbox}>
          <label htmlFor="VIPTicket"> VIP ticket(s)</label>
          <div className={styles.VIPticketlayout}>
            <h4>
              Price: <span>{VIPPrice}</span>,- DKK
            </h4>
            <input
              type="number"
              id="VIPTicket"
              name="VIPTicket"
              min={booking.REGTicket <= 0 ? 1 : 0}
              max="9"
              placeholder="0"
              required={booking.REGTicket <= 0 ? true : false}
              onChange={handleChange}
            ></input>
            <span>x {VIPPrice}</span>
            <br></br>
            {booking.VIPTicket > 0 ? (
              <output className={styles.detail}>
                VIP tickets already in basket: {booking.VIPTicket} <br></br> <span>*To remove tickets type in 0</span>
              </output>
            ) : (
              <br></br>
            )}
            <output>
              Total for VIP ticket(s):
              <span> {VIPticketPrice} </span>
            </output>
          </div>
        </div>
        <div className={styles.REGticketbox}>
          <label htmlFor="REGTicket">Regular ticket(s)</label>
          <div className={styles.REGticketlayout}>
            <h4>
              Price: <span>{RegPrice}</span>,- DKK
            </h4>
            <input
              type="number"
              id="REGTicket"
              name="REGTicket"
              min={booking.VIPTicket <= 0 ? 1 : 0}
              max="9"
              placeholder="0"
              required={booking.VIPTicket <= 0 ? true : false}
              onChange={handleChange}
            ></input>
            <span>x {RegPrice}</span>
            <br></br>
            {booking.REGTicket > 0 ? (
              <output className={styles.detail}>
                Regular tickets in basket: {booking.REGTicket} <br></br> <span>*To remove tickets type in 0</span>
              </output>
            ) : (
              <br></br>
            )}

            <output>
              Total for Regular ticket(s):
              <span> {REGticketPrice} </span>
            </output>
          </div>
        </div>
      </div>
      <div>
        <h3>
          The total number of tickets: <span>{totTicketAmount >= 0 ? totTicketAmount : " "}</span>
        </h3>
        {(booking.VIPTicket >= 1) | (booking.REGTicket >= 1) ? (
          <h3>
            The total price for all tickets: <span>{REGticketPrice + VIPticketPrice}</span>,- DKK
          </h3>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
