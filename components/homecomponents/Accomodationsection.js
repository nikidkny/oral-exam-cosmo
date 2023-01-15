import Image from "next/image";
import Link from "next/link";
import accomodationImg from "/public/accomodation.jpg";
import styles from "../../styles/Home.module.css";

export default function Acommodationsection() {
  return (
    <section className={styles.accomodationSec}>
      <div className={styles.accomodation}>
        <Image src={accomodationImg} alt="girl enjoying festival" width={800} height={800} />
        <h1>Acommodations</h1>
        <h2>CAMPING OPTIONS</h2>
        <p>
          You can enjoy the whole experience, with our 5 camping spaces. You dont need to look else were for
          accomodation. The feed of prebook a camping spot is 99,-.
        </p>
        <Link className={styles.btnmainac} href="/accomodation">
          READ MORE
        </Link>
      </div>
    </section>
  );
}
