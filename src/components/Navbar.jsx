import { NavLink } from "react-router-dom";
export default function Navbar() {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : "no-active");
  return (
    <div>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "no-active")}
        to="/"
      >
        Home
      </NavLink>
      {" - "}
      <NavLink className={setActiveClass} to="/personajes">
        Personajes
      </NavLink>
      {" - "}
      <NavLink className={setActiveClass} to="/contact">
        Contact
      </NavLink>
      <NavLink className={setActiveClass} to="/admin">
        {" "}
        Administración{" "}
      </NavLink>{" "}
      <NavLink className={setActiveClass} to="/login">
        Login{" "}
      </NavLink>
    </div>
  );
}
