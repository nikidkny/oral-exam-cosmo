import { useRef, useState } from "react";

import Image from "next/image"; //this module automaticaly automise the img with Squoosh
import dark_theme_logo from "../public/dark_theme_logo.png"; // it is necesary import the images as so
import instagram from "../public/instagram-logo.svg";
import facebook from "../public/facebook-logo.svg";
import youtube from "../public/youtube-logo.svg";

function info(submit) {
  fetch("https://uyupfhdfzpeutsnwwvra.supabase.co/rest/v1/newslater", {
    method: "POST",
    headers: {
      apikey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV5dXBmaGRmenBldXRzbnd3dnJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzEzMDgxMTIsImV4cCI6MTk4Njg4NDExMn0.BdXYKUMwc0jBPYDHPgW0CyTcpAUlZGBsZC_NcdyVs6Y",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV5dXBmaGRmenBldXRzbnd3dnJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzEzMDgxMTIsImV4cCI6MTk4Njg4NDExMn0.BdXYKUMwc0jBPYDHPgW0CyTcpAUlZGBsZC_NcdyVs6Y",
      "Content-Type": "application/json",
      Prefer: "return=representation",
    },
    body: JSON.stringify(submit),
  });
}

export default function Footer() {
  const infoForm = useRef(); //with use reference we have now access to de DOM element

  function submit(e) {
    e.preventDefault();

    info({
      name: infoForm.current.elements.name.value, //the current Dom element
      email: infoForm.current.elements.email.value, //the current Dom element
    });
    (infoForm.current.elements.name.value = ""), (infoForm.current.elements.email.value = "");
  }

  return (
    <footer className="footer">
      <div className="container">
        <a href={"/"}>
          <Image
            src={dark_theme_logo}
            alt={""}
            width={"70"}
            height={"50"}
            priority
            sizes="(max-width: 700px) 100vw, 700px"
          />
        </a>
        <p className="accent1">Cosmo Festival the greatest festival of all the times.</p>
      </div>
      <div className="container">
        <h4 className="accent1">Sign up to our newsletter</h4>
        <p>Stay up to date with the new show, bands , promotions and more.</p>

        <form onSubmit={submit} ref={infoForm}>
          <input required className="input-footer border2" name="name" placeholder="John Doe" />

          <input required type="email" className="input-footer border2" name="email" placeholder="johndoe@mail.com" />
          <button className="button-footer accent1 border2">SUBMIT</button>
        </form>
      </div>
      <div className="container">
        <h4 className="accent1">Contact</h4>
        <ul>
          <li>Cosmo Festival </li>
          <li>Jagtej 16, 3000, Denmark</li>
          <li>hello@cosmofestival.com</li>
          <li>CVR: 33814860</li>
        </ul>
        <div className="iconContainer">
          <Image src={instagram} alt={""} width={"20"} height={"20"} priority sizes="(max-width: 700px) 100vw, 700px" />
          <Image src={facebook} alt={""} width={"20"} height={"20"} priority sizes="(max-width: 700px) 100vw, 700px" />
          <Image src={youtube} alt={""} width={"20"} height={"20"} priority sizes="(max-width: 700px) 100vw, 700px" />
        </div>
      </div>
    </footer>
  );
}
