import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className="border-top mt-5">
      <div className="container mt-5">
        {/* Footer logo */}
        <div className="mb-4">
          <a className="" href="#">
            <img src="./assets/images/udacity.svg" alt="Udacity Logo" />
          </a>
        </div>

        {/* Footer navgation */}
        <div className={`${styles.footer_navigation} mb-5`}>
          <h3 className="mb-3">Resources</h3>
          <ul className="list-unstyled">
            <li>
              <a className="text-decoration-none text-secondary" href="#">
                Catalog
              </a>
            </li>
            <li>
              <a className="text-decoration-none text-secondary" href="#">
                Careers
              </a>
            </li>
            <li>
              <a className="text-decoration-none text-secondary" href="#">
                Help and FAQ
              </a>
            </li>
            <li>
              <a className="text-decoration-none text-secondary" href="#">
                Blog
              </a>
            </li>
            <li>
              <a className="text-decoration-none text-secondary" href="#">
                Scholarships
              </a>
            </li>
          </ul>
        </div>

        {/* Footer subscription */}
        <div
          className={`${styles.footer_subscription} d-flex justify-content-between align-items-end mb-5`}
        >
          <div className={`${styles.footer_subscription_form} w-50`}>
            <p className={`${styles.footer_subscription_form_title} mb-2 `}>
              Sign up to stay updated on the latest in technology
            </p>
            <form className="d-flex md-mb-2">
              <input
                className="form-control me-4"
                type="text"
                placeholder="Enter your email address"
              />
              <button className="btn btn-outline-primary w-50">
                Subscribe To Newsletter
              </button>
            </form>
          </div>

          <div className={styles.footer_subscription_social}>
            <ul className="list-unstyled m-0 d-flex">
              <li>
                <a className="text-decoration-none text-primary" href="#">
                  <i className="fa-brands fa-facebook fa-2xl" />
                </a>
              </li>
              <li>
                <a className="text-decoration-none text-primary" href="#">
                  <i className="fa-brands fa-twitter fa-2xl" />
                </a>
              </li>
              <li>
                <a className="text-decoration-none text-primary" href="#">
                  <i className="fa-brands fa-linkedin fa-2xl" />
                </a>
              </li>
              <li>
                <a className="text-decoration-none text-primary" href="#">
                  <i className="fa-brands fa-instagram fa-2xl" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer accordion */}
        <div className="accordion accordion-flush border" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button bg-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Featured Programs and Schools
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
