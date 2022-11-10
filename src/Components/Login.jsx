import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles_login.css";

function Login(props) {
  const [user, setUser] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [message, setMessage] = useState({
    user: "",
    pass: ""
  });
  console.log(props.data);

  const database = [
    { username: "user1", password: "1234" },
    { username: "user2", password: "1234" }
  ];
  function handelSubmit(event) {
    event.preventDefault();

    var { name, pass } = document.forms[0];

    setUser(name.value);
    const userdata = props.data.find((user) => user.username === name.value);

    if (userdata) {
      if (userdata.password !== pass.value) {
        setMessage({ user: "", pass: "Votre mot de passe est incorrect." });
      } else {
        setIsSubmitted(true);
        setMessage({ user: "", pass: "" });
      }
    } else {
      setMessage({ pass: "", user: "Votre ident est incorrect." });
    }
  }
  const Renderform = (
    <div className="login-form">
      <div className="title">Connexion</div>
      <div className="form">
        <form onSubmit={handelSubmit}>
          <div className="input-container">
            <label>L'identifiant </label>
            <input type="text" name="name" required />
            <div className="message">{message.user}</div>
          </div>
          <div className="input-container">
            <label>Mot de passe</label>
            <input type="password" name="pass" required />
            <div className="message">{message.pass}</div>
          </div>
          <div className="button-container">
            <input type="submit" value="Se connecter" />
          </div>
          <Link to={"/Inscription"} style={{ textDecoration: "none" }}>
            <p className="toInscription">Inscription</p>
          </Link>
        </form>
      </div>
    </div>
  );
  return (
    <div className="login">
      {isSubmitted ? (
        <div>
          <div className="title">Accueil</div> <div>Bonjour {user}</div>
        </div>
      ) : (
        Renderform
      )}
    </div>
  );
}
export default Login;
