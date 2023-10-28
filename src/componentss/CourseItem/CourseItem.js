import React from "react";
import styles from "./CourseItem.module.css";

export default function CourseItem() {
  return (
    <div
      className={`${styles.course_item_container} text-bg-dark position-relative p-2 d-flex align-items-end justify-content-start`}
    >
      <div className={styles.course_item_content}>
        <h3 className={`${styles.course_item_content_title} mb-3`}>
          Data Analyst
        </h3>
        <p
          className={`${styles.course_item_content_rating} mb-1 d-flex align-items-center`}
        >
          <i className="fa-solid fa-star fa-xs" />
          <i className="fa-solid fa-star fa-xs" />
          <i className="fa-solid fa-star fa-xs" />
          <i className="fa-solid fa-star fa-xs" />
          <i className="fa-solid fa-star-half-stroke fa-xs" />
          <span className="ms-1">(1331)</span>
        </p>
        <p className={`${styles.course_item_content_description} m-0 p-0`}>
          3 Months, Intermediate
        </p>
      </div>

      <div className={`${styles.course_item_icon} position-absolute`}>
        <i className="fa-regular fa-heart fa-xl" />
      </div>
    </div>
  );
}
