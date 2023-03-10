// import styles from "../styles/Home.module.css";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

export default function Ticketsmain() {
  return (
    <>
      <section className={styles.tickets}>
        <div className={styles.cards}>
          <div className={styles.card1}>
            <p>Regular Pass</p>
          </div>
          <div className={styles.card2}>
            <p>VIP Pass</p>
          </div>
        </div>
        <div className={styles.desc}>
          <h2>Tickets</h2>
          <h3>WHAT YOU NEED TO KNOW !</h3>
          <p>
            Cosmo Festival is one of the most popular music festivals in Europe. Every year the event gathers the best
            artists and biggest DJs in electronic music. This in an event that never ends, with music 24/7 and vibes of
            the greatests faces with the best electronic music in our 3 stages.<br></br>
            <br></br>
            Cosmo Festival is an event for 18 and older. Your name is going to be printed in the ticket so your name
            should coincide with your name on your ID.<br></br>If your are looking for the bigwig experience, our VIP
            ticket is for you! Enjoy extra services as VIP, such as:<br></br>
          </p>
          <ul>
            <li>
              <p>Exlucive VIP entrance & exit points </p>
            </li>
            <li>
              <p>Area with unobstructed view close to the stages</p>
            </li>
            <li>
              <p>Reserved VIP zones and tables</p>
            </li>
            <li>
              <p>Special Bar services</p>
            </li>
            <li>
              <p>and much more</p>
            </li>
          </ul>
          <div>
            <Link className={styles.btnmain} href="/tickets">
              BOOK NOW
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
