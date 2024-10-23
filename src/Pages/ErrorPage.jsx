import { Link, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  if (error.status === 404) {
    return (
      <section className="section">
        <h1>404</h1>
        <p>Page introuvable</p>
        <Link to="/">Retour à l&apos;accueil</Link>
      </section>
    );
  }
  return (
    <section className="section">
      <p>Une erreur s&apos;est produite</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/">Retour à l&apos;accueil</Link>
    </section>
  );
}
export default ErrorPage;
