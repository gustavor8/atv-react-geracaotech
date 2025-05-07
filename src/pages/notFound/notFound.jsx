import { useLocation } from "react-router-dom";

export default function NotFound() {
  const location = useLocation();

  return (
    <>
      <h2>404 - Página não encontrada</h2>
      <p>
        Rota acessada: <strong>{location.pathname}</strong> não existe.
      </p>
    </>
  );
}
