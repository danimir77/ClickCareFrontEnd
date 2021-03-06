import React, { useState } from "react";
// import { GoogleLogout } from "react-google-login";
import logo from "../../images/logonavbar.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
// import { useCookies } from "react-cookie";
import { logOut } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import jwt from "jsonwebtoken";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  //Hooks

  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const out = useSelector((state) => state.userSession);
  const auth = useAuth0();
  // const [cookies, setCookie, removeCookie] = useCookies();

  //Id
  const idUser = jwt.decode(localStorage.getItem("session"))?.id;

  const name = idUser ? jwt.decode(localStorage.getItem("session")) : "";
  console.log("name NAVBAR", name);

  //Handlers
  const onClick = () => {
    // dispatch(logOut());
    auth.logout();
    window.localStorage.clear();
    swal({
      title: "Logout Success",
      text: "Gracias por usar ClickCare",
    }).then(() => {
      window.location = "https://deploy-click-care.vercel.app/login";
    });
  };

  return (
    <div className="Navbar">
      <Link to="/">
        <img className="nav-logo" href="/" src={logo} height={60} alt="logo" />
      </Link>
      {name ? (
        <h3 className="bienvenidoUsuario">{`¡Hola ${name.name}!`}</h3>
      ) : null}
      <div className={`nav-items ${isOpen && "open"}`}>
        <Link to="/">
          <span>Inicio</span>
        </Link>
        <Link to="/about">
          <span>Nosotros</span>
        </Link>
        <Link to="/offers">
          <span>Ofertas</span>
        </Link>
        {/* <a href="#testimonials">Testimonio</a> */}
        <div className="containerButtonNav">
          {localStorage?.getItem("session") ? (
            <Link to={`/user/${idUser}`}>
              <button className="buttonOne buttonNavTwo">Profile</button>
            </Link>
          ) : (
            <Link to="/signin">
              <button className="buttonOne buttonNav">Registrate</button>
            </Link>
          )}

          {localStorage?.getItem("session") ? (
            <button
              className="buttonOne buttonNavTwo"
              onClick={() => onClick()}
            >
              Salir
            </button>
          ) : (
            <Link to="/login">
              <button className="buttonOne buttonNavTwo">Ingresa</button>
            </Link>
          )}
        </div>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
