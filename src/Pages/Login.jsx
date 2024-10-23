import { Form, useNavigation } from "react-router-dom";

function Login() {
  const { state } = useNavigation();

  return (
    <section className="section">
      <Form className="form" method="POST">
        <h5>Login</h5>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            nom
          </label>
          <input type="text" className="form-input" id="name" name="name" />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input type="email" className="form-input" id="email" name="email" />
        </div>
        <button
          type="submit"
          className="btn btn-block"
          disabled={state === "submitting"}
        >
          {state === "submitting" ? "connextion en cours..." : "se connecter"}
        </button>
      </Form>
    </section>
  );
}
export default Login;
