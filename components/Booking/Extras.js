import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import styles from "../../styles/Booking.module.css";
export default function Extras(props) {
  const { handleChange, checkbox, checked, setChecked, tent2Price, tent3Price, greenPrice } = useContext(AppContext);

  return (
    <div className={styles.extras}>
      <h2>Extras for camping</h2>
      <div className={styles.setup}>
        <div>
          <h4>Rent some help</h4>
          <p>Rent a tent and get it all set up by the staff</p>
          <div className={styles.renthelpbox}>
            <label htmlFor="rentTent2">Tent(s) for 2 person</label>
            <p>
              <span>{tent2Price}</span>,- DKK
            </p>
            <input type="number" id="rentTent2" name="rentTent2" min="0" onChange={handleChange}></input>
          </div>
          <div className={styles.renthelpbox}>
            <label htmlFor="rentTent3">Tent(s) for 3 person</label>
            <p>
              <span>{tent3Price}</span>,- DKK
            </p>
            <input type="number" id="rentTent3" name="rentTent3" min="0" onChange={handleChange}></input>
          </div>
        </div>
        <br></br>
        <div>
          <p className={styles.greenlabel}>
            If being evironmentally conscious is close to your heart choose our green camping offer
          </p>
          <div className={styles.green}>
            <label htmlFor="greenCamping">Green Camping</label>
            <p>{greenPrice},- DKK</p>
            <div className={styles.checkboxContainer}>
              <input
                type="checkbox"
                value=" "
                id="greenCamping"
                name="greenCamping"
                onChange={handleChange}
                ref={checkbox}
                checked={checked}
                onClick={() => {
                  setChecked(!checked);
                }}
              ></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
