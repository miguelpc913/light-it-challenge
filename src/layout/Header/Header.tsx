import { FiActivity } from "react-icons/fi";
import "./Header.css";

export default function Header() {
  return (
    <header className="app-header">
      <div className="app-header__container">
        <div className="app-header__brand">
          <FiActivity className="app-header__icon" aria-hidden="true" />
          <h1 className="app-header__title">Patient Management System</h1>
        </div>
        <p className="app-header__tagline">
          Secure and efficient patient data management
        </p>
      </div>
    </header>
  );
}
