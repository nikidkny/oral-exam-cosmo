import Image from "next/image"; //this module automaticaly automise the img with Squoosh
import dark_theme_logo from "../public/dark_theme_logo.png"; // it is necesary import the images as so
import Anchor from "./Anchor";
// import Cart from "../booking/Cart";
import Nav from "./Nav";

export default function Header() {
  //it is not necesary to write an unit in the the width and the heigh properties

  return (
    <header>
      <div className="basket-container">
        <Anchor href={"/"}>
          <Image
            src={dark_theme_logo}
            alt={""}
            width={"auto"}
            height={"40"}
            priority
            sizes="(max-width: 700px) 100vw, 700px"
          />
        </Anchor>
        <div>
          <Nav />
          {/* <Cart /> */}
        </div>
      </div>
    </header>
  );
}
