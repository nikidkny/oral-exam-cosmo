import Anchor from "./Anchor";

export default function Nav() {
  return (
    <>
      <nav className="nav">
        <ul>
          <Anchor className="anchor" href={"/home"}>
            HOME
          </Anchor>
        </ul>
      </nav>
    </>
  );
}
