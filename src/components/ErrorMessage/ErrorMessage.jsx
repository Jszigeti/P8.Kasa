import { NavLink } from "react-router-dom";

function ErrorMessage() {
  return (
    <main id="error-page">
      <div>404</div>
      <span>Oups! La page que vous demandez n'existe pas.</span>
      <NavLink to="/">
        <p>Retourner sur la page d'accueil</p>
      </NavLink>
    </main>
  );
}

export default ErrorMessage;
