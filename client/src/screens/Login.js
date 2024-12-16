import React, { useState } from "react";

export default function Login() {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <div className="shadow-lg p-4 mb-5 bg-white rounded">
        <h2>{isRegister ? "Register" : "Login"}</h2>
        <form>
          {isRegister && (
            <div className="form-group">
              <label>Name</label>
              <input type="text" className="form-control" placeholder="Enter your name" />
            </div>
          )}
          <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Enter your password" />
          </div>
          <button type="submit" className="btn btn-primary mt-3">
            {isRegister ? "Register" : "Login"}
          </button>
        </form>
        <div className="mt-3">
          <p>
            {isRegister ? "Already have an account?" : "Don't have an account?"}{" "}
            <span
              className="text-primary"
              style={{ cursor: "pointer" }}
              onClick={() => setIsRegister(!isRegister)}
            >
              {isRegister ? "Login" : "Register"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
