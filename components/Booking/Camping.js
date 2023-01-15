import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import styles from "../../styles/Booking.module.css";

export default function Camping({ areas }) {
  const { handleChange, totTicketAmount } = useContext(AppContext);

  return (
    <div className={styles.camping}>
      <h2>Camping</h2>
      <p>Select where you wanna set up your tent(s)</p>
      <div className={styles.campingAreas}>
        <div className={styles.areascontainer}>
          <label className={`${totTicketAmount > areas[0].available ? `disabled` : ``}`}>
            Svartheim
            <input
              type="radio"
              value={areas[0].area}
              name="camping"
              onChange={handleChange}
              disabled={totTicketAmount > areas[0].available}
            ></input>
          </label>
        </div>
        <div className={styles.areascontainer}>
          <label className={`${totTicketAmount > areas[1].available ? `disabled` : ``}`}>
            Nilfheim
            <input
              type="radio"
              value={areas[1].area}
              name="camping"
              onChange={handleChange}
              disabled={totTicketAmount > areas[1].available}
            ></input>
          </label>
        </div>
        <div className={styles.areascontainer}>
          <label className={`${totTicketAmount > areas[2].available ? `disabled` : ``}`}>
            Helheim
            <input
              type="radio"
              value={areas[2].area}
              name="camping"
              onChange={handleChange}
              disabled={totTicketAmount > areas[2].available}
            ></input>
          </label>
        </div>
        <div className={styles.areascontainer}>
          <label className={`${totTicketAmount > areas[3].available ? `disabled` : ``}`}>
            Muspelheim
            <input
              type="radio"
              value={areas[3].area}
              name="camping"
              onChange={handleChange}
              disabled={totTicketAmount > areas[3].available}
            ></input>
          </label>
        </div>
        <div className={styles.areascontainer}>
          <label className={`${totTicketAmount > areas[4].available ? `disabled` : ``}`}>
            Alfheim
            <input
              type="radio"
              value={areas[4].area}
              name="camping"
              onChange={handleChange}
              disabled={totTicketAmount > areas[4].available}
            ></input>
          </label>
        </div>
      </div>
    </div>
  );
}
