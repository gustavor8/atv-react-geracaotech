import { Link } from "react-router-dom";
export default function Contact() {
  return (
    <>
      <h1 style={{ marginBottom: "15px" }}>Aqui seria a página Contatos</h1>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </>
  );
}
