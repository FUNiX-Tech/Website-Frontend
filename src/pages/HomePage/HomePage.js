import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import CourseList from "../../components/CourseList/CourseList";
import styles from "./HomePage.module.css";
import Pagination from "../../components/Pagination/Pagination";

export default function HomePage() {
  return (
    <div className={`${styles.home_page} container`}>
      <div className="d-flex justify-content-between mb-3">
        <h1>All Programs</h1>
        <div className="dropdown">
          <button
            className="btn btn-outline-dark dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Sort by Most Popular
          </button>
          <ul className="dropdown-menu w-100">
            <li>
              <a className="dropdown-item" href="#">
                Most Popular
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Highest Rated
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Recently Updated
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="col-3">
          <Sidebar />
        </div>
        <div className="col-9">
          <CourseList />
          <Pagination />
        </div>
      </div>
    </div>
  );
}
