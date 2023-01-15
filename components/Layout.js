import { Children } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <>
      <Header>
        <Nav />
      </Header>
      <div>{children}</div>
    </>
  );
}
