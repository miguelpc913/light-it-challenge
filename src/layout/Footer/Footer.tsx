import { FiHeart, FiShield, FiLock } from "react-icons/fi";
import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="app-footer">
      <div className="app-footer__container">
        <div className="app-footer__content">
          <div className="app-footer__section">
            <h3 className="app-footer__heading">Patient Care</h3>
            <p className="app-footer__text">
              Dedicated to providing secure and efficient patient data
              management solutions for healthcare professionals.
            </p>
          </div>

          <div className="app-footer__section">
            <h3 className="app-footer__heading">Security & Privacy</h3>
            <div className="app-footer__features">
              <div className="app-footer__feature">
                <FiShield className="app-footer__feature-icon" aria-hidden="true" />
                <span>HIPAA Compliant</span>
              </div>
              <div className="app-footer__feature">
                <FiLock className="app-footer__feature-icon" aria-hidden="true" />
                <span>Encrypted Data</span>
              </div>
            </div>
          </div>

          <div className="app-footer__section">
            <h3 className="app-footer__heading">About</h3>
            <p className="app-footer__text">
              Built with modern web technologies to ensure reliability,
              performance, and user experience.
            </p>
          </div>
        </div>

        <div className="app-footer__divider" />

        <div className="app-footer__bottom">
          <p className="app-footer__copyright">
            <FiHeart className="app-footer__heart-icon" aria-hidden="true" />
            <span>
              © {currentYear} Patient Management System. All rights reserved.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
