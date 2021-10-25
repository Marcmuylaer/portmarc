import React, { Component } from 'react'
import wolf                from '../logo.png';
// React font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars }          from '@fortawesome/free-solid-svg-icons';
import { FaBeer }          from 'react-icons/fa';



export default class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="contenaire ">
          <a className="navbar-brand" href="#">
            <img className="wolf" src={wolf} alt="wolf..." />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >    
          
            <FontAwesomeIcon icon={faBars} style={{ color: '#fff' }} />

          </button>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About-me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Experience
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact-us
                </a>
              </li>
            </ul>
          </div>
      </nav>
    )
  }
}




