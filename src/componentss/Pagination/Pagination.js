import React from "react";
import styles from "./Pagination.module.css";

export default function Pagination() {
  return (
    <div className={`${styles.pagination}`}>
      <button type="button" class="btn btn-outline-primary">
        <i className="fa-solid fa-arrow-left" />
      </button>

      <select className="form-select w-25 p-2">
        <option selected>Page 1 of 20</option>
        <option value={1}>Page 1</option>
        <option value={2}>Page 2</option>
        <option value={3}>Page 3</option>
      </select>

      <button type="button" class="btn btn-outline-primary">
        <i className="fa-solid fa-arrow-right" />
      </button>
    </div>
  );
}
