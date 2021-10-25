import React               from 'react';
import wolf                from '../logo.png';
// font awesome
//import { FontAwesomeIcon } from '@fontawesome/react-fontawesome';
//import { FaBars }        from '@fontawesome/free-solid-svg-icons';
import { FaBeer } from 'react-icons/fa';



export const Navbar = () => {
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
          
            <FontAwesomeIcon icon={FaBeer} style={{ color: '#fff' }} />

          </button>

            <ul className="navbar-nav ml-auto">
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
                  services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  how work
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  contact
                </a>
              </li>
            </ul>
          </div>
        
      </nav>
    );
}


export default Navbar;

