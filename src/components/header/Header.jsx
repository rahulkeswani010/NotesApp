import React from 'react';

import {Link} from 'react-router-dom';
import '../../App.css'
export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark text-light bg-dark">
        <Link className="navbar-brand notesbrand" to="/">
       Keepy Notes
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">
                Show Notes<span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="addnotes">
              Add Notes
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}