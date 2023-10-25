import React from "react";
import Sidebar from "../../Component/Sidebar/Sidebar";

export default function HomePage() {
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between">
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

      <div className="row mt-5">
        <div className="col-3">
          <Sidebar />
        </div>
        <div className="col-9">
          <div className="row">
            <div className="col-4 mb-4">
              <div className="card text-bg-dark">
                <img
                  src="https://cdn.sanity.io/images/tlr8oxjg/production/fdf314615dab9455b1e163ae8ab698abde8453c8-1456x816.png?w=640&q=80&fit=clip&auto=format"
                  className="card-img"
                  alt="..."
                />
                <div className="card-img-overlay pt-5">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.asdasd
                  </p>
                  <p className="card-text">
                    <small>Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card text-bg-dark">
                <img
                  src="https://cdn.sanity.io/images/tlr8oxjg/production/fdf314615dab9455b1e163ae8ab698abde8453c8-1456x816.png?w=640&q=80&fit=clip&auto=format"
                  className="card-img"
                  alt="..."
                />
                <div className="card-img-overlay pt-5">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.asdasd
                  </p>
                  <p className="card-text">
                    <small>Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-4">
              <div className="card text-bg-dark">
                <img
                  src="https://cdn.sanity.io/images/tlr8oxjg/production/fdf314615dab9455b1e163ae8ab698abde8453c8-1456x816.png?w=640&q=80&fit=clip&auto=format"
                  className="card-img"
                  alt="..."
                />
                <div className="card-img-overlay pt-5">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.asdasd
                  </p>
                  <p className="card-text">
                    <small>Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card text-bg-dark">
                <img
                  src="https://cdn.sanity.io/images/tlr8oxjg/production/fdf314615dab9455b1e163ae8ab698abde8453c8-1456x816.png?w=640&q=80&fit=clip&auto=format"
                  className="card-img"
                  alt="..."
                />
                <div className="card-img-overlay pt-5">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.asdasd
                  </p>
                  <p className="card-text">
                    <small>Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-4">
              <div className="card text-bg-dark">
                <img
                  src="https://cdn.sanity.io/images/tlr8oxjg/production/fdf314615dab9455b1e163ae8ab698abde8453c8-1456x816.png?w=640&q=80&fit=clip&auto=format"
                  className="card-img"
                  alt="..."
                />
                <div className="card-img-overlay pt-5">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.asdasd
                  </p>
                  <p className="card-text">
                    <small>Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}
