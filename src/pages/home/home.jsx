import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <h1 style={{ marginBottom: "15px" }}>Aqui seria a página Inicial</h1>
      <Link to="/contact">Contatos</Link>
      <Link to="/about">About</Link>
    </>
  );
}
