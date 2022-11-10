import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Inscription() {
  const [user, setUser] = useState("");
  const [password, setPass] = useState("");
  const [date, setdate] = useState("");
  const [ville, setVille] = useState("");
  const [users, setUsers] = useState([{ username: "", password: "" }]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();
  function handelSubmit(event) {
    event.preventDefault();
    var { name, pass, date, ville } = document.forms[0];
    setUser(name.value);
    setdate(date.value);
    setPass(pass.value);
    setVille(ville.value);
    setIsSubmitted(true);
    setUsers([
      {
        username: name.value,
        password: pass.value
      }
    ]);
    navigate("/");
  }

  return (
    <div className="inscription">
      <div className="inscription-form">
        <h1>Inscription</h1>
        <form onSubmit={handelSubmit}>
          <table>
            <tbody>
              <tr className="identifiant">
                <td>L'identifiant</td>
                <td>
                  <input type="text" name="name" required />
                </td>
              </tr>
              <tr className="password">
                <td>Mot de passe</td>
                <td>
                  <input type="password" name="pass" />
                </td>
              </tr>
              <tr className="date">
                <td>Date de naissance</td>
                <td>
                  <input type="date" name="date" required />
                </td>
              </tr>
              <tr className="hell" value="casablanca">
                <td>
                  <label>Ville</label>
                </td>
                <td>
                  <select name="ville">
                    <option value="casablanca">Casablanca</option>
                    <option value="Rabat">Rabat</option>
                    <option value="Tiznit">Agadir</option>
                  </select>
                </td>
              </tr>
              <tr className="appi">
                <td>
                  <label>Genre</label>
                </td>
                <td>
                  <input type="radio" name="genre" value="homme" />
                  Homme
                  <input type="radio" name="genre" value="Femme" />
                  Femme
                </td>
              </tr>
              <tr className="ajah">
                <td>
                  <label>Loisire</label>
                </td>
                <td>
                  <input type="checkbox" value="Loisirs" />
                  Sport
                  <input type="checkbox" value="Loisirs" />
                  Lecture
                  <input type="checkbox" value="Loisirs" />
                  Musique
                </td>
              </tr>
              <tr className="btn">
                <td> </td>
                <td>
                  <input type="submit" value="S'insrire" />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
}
