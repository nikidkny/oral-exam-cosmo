import Camping from "../../components/Booking/Camping";
import Extras from "../../components/Booking/Extras";
import Ticket from "../../components/Booking/Ticket";
import styles from "../../styles/Booking.module.css";
import FloatingBasket from "../../components/Booking/FloatingBasket";
import Basket from "../../components/Booking/Basket";
import { useContext } from "react";
import { AppContext } from "../../components/context/AppContext";

export default function Booking({ areas }) {
  //--------- states
  const { addToBasket, showForm } = useContext(AppContext);

  return (
    <>
      <section className={styles.ticketpage}>
        {showForm ? (
          <Basket />
        ) : (
          <form onSubmit={addToBasket}>
            <Ticket />
            <hr></hr>
            <Camping areas={areas} />
            <hr></hr>
            <Extras />
            <FloatingBasket />
          </form>
        )}
      </section>
    </>
  );
}
// Fetching areas from Available spots
export async function getServerSideProps() {
  /* This function runs before the component bands is render
  - fetch the data
  - wait for that data
  - once we have the data, it put into the component
  - so the component can render with that data inside it  */
  const res = await fetch("https://bitter-moon-5524.fly.dev/available-spots");
  //const res = await fetch("http://localhost:8080/available-spots");
  const data = await res.json();

  /* - we return a value for this function 
- that value is got we have a props property we give the property a value
- that value is going to be an object 
- inside the objecint to be an object so we can past all the properties that we need*/
  return {
    props: { areas: data },
  };
}
