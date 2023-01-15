import Head from "next/head";
import { useState } from "react";
import styles from "../../styles/Home.module.css";
import Herosection from "../../components/homecomponents/Herosection";
import Days from "../../components/homecomponents/Days";
import Lineup from "../../components/homecomponents/Lineup";
import Ticketsmain from "../../components/homecomponents/Ticketsmain";
import Accomodationsection from "../../components/homecomponents/Accomodationsection";
import Footer from "../../components/Footer";

export default function Home({ areas, schedule, bands }) {
  const [filter, setFilter] = useState("mon");

  return (
    <>
      <Head>
        <title>The Festival | Home</title>
        <meta name="description" content="This is my KEA thrid semester Frontend Elective exam" />
        <meta name="keywords" content="festival, music, exam, reactjs, nextjs"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className={styles.main}>
        <Herosection />
        <Days setFilter={setFilter} />
        <Lineup bands={bands} schedule={schedule} filter={filter} />
        <Ticketsmain />
        <Accomodationsection />
      </main>
      <Footer />
    </>
  );
}
export async function getServerSideProps() {
  const [
    scheduleRes,
    bandsRes,
    // ,areasRes
  ] = await Promise.all([
    fetch(`https://bitter-moon-5524.fly.dev/schedule`),
    //fetch("http://localhost:8080/schedule"),

    fetch(`https://bitter-moon-5524.fly.dev/bands`),
    //fetch("http://localhost:8080/bands"),

    // fetch(`https://bitter-moon-5524.fly.dev/available-spots`),
    //fetch("http://localhost:8080/available-spots"),
  ]);

  const [
    schedule,
    bands,
    // , areas
  ] = await Promise.all([
    scheduleRes.json(),
    bandsRes.json(),
    // , areasRes.json()
  ]);

  return {
    props: {
      schedule,
      bands,
      // , areas
    },
  };
}
