import Image from "next/image";
import Link from "next/link";
import heroImg from "/public/festivalLanding.jpg";
import styles from "../../styles/Home.module.css";
export default function Herosection() {
  return (
    <>
      <section>
        <div className={styles.herosection}>
          <Image src={heroImg} alt="festival" width={1512} height={830} />
          <h2>15/12</h2>

          <h3>
            WILL<br></br>YOU<br></br>MISS<br></br>IT?
          </h3>
          <Link className={styles.booknowBtn} value="Book now" href="/tickets">
            BOOK NOW
          </Link>
        </div>
      </section>
    </>
  );
}
