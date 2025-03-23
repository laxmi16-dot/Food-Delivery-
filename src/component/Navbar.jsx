import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-dark shadow"
      style={{ padding: '1rem 2rem' }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand text-light fw-bold fs-4" to="/">
          Quick<span style={{ color: '#f39c12' }}>Delivery</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon text-white"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className="nav-link text-light fw-semibold"
                to="/Home"
                style={{ padding: '0.5rem 1rem' }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-light fw-semibold"
                to="/Login"
                style={{ padding: '0.5rem 1rem' }}
              >
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-light fw-semibold"
                to="/Restaurants"
                style={{ padding: '0.5rem 1rem' }}
              >
                Restaurants
              </Link>
            </li>
          </ul>
          <form className="d-flex ms-lg-3" role="search">
            <input
              className="form-control border-0 rounded-start shadow-sm"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ backgroundColor: '#333', color: '#f5f5f5', width: '200px' }}
            />
            <button
              className="btn btn-warning rounded-end shadow-sm"
              type="submit"
              style={{ padding: '0.5rem 1rem' }}
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
