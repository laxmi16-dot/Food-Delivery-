import React from 'react';

const Login = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <form
        className="p-4 rounded shadow bg-white"
        style={{ width: '350px' }}
      >
        <h2 className="text-center fw-bold mb-4" style={{ color: '#1e3c72' }}>
          Login
        </h2>
        <div className="mb-3">
          <label htmlFor="email" className="form-label fw-semibold">
            Email Address
          </label>
          <input
            type="email"
            className="form-control border-0 shadow-sm"
            id="email"
            placeholder="Enter your email"
            required
            style={{ backgroundColor: '#f9f9f9' }}
          />
          <div id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label fw-semibold">
            Password
          </label>
          <input
            type="password"
            className="form-control border-0 shadow-sm"
            id="password"
            placeholder="Enter your password"
            required
            style={{ backgroundColor: '#f9f9f9' }}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="rememberMe"
          />
          <label className="form-check-label" htmlFor="rememberMe">
            Remember me
          </label>
        </div>
        <button
          type="submit"
          className="btn btn-primary w-100 shadow-sm fw-bold"
          style={{
            backgroundColor: '#1e3c72',
            borderColor: '#1e3c72',
            transition: 'background-color 0.3s',
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#2a5298')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#1e3c72')}
        >
          Login
        </button>
        <div className="text-center mt-3">
          <a
            href="/register"
            className="text-decoration-none"
            style={{ color: '#1e3c72', fontWeight: '500' }}
          >
            Don't have an account? Register
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
