import { Link } from "react-router-dom";
export default function About() {
  return (
    <>
      <h1 style={{ marginBottom: "15px" }}>Aqui seria a página Contatos</h1>
      <Link to="/">Home</Link>
      <Link to="/contacts">Contatos</Link>
    </>
  );
}
