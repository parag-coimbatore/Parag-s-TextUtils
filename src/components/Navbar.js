import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>  
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/">{props.contact}</a>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/about">{props.about}</Link>
              </li>
              {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Courses
                </a>
                 <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/">{props.stotra1}</a></li>
                  <li><a className="dropdown-item" href="/">vishnu Sashtrnama</a></li>
                  <li><a className="dropdown-item" href="/">Nakha stuti</a></li>
                  <li><a className="dropdown-item" href="/">Venkatesh Stotra</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="/">Logout</a></li>

                </ul>
              </li> */}
              {/* <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li> */}
            </ul>
            {/* <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button type="button" className="btn btn-primary">Search</button>
            </form> */}

              <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}> 
                <input className="form-check-input" onClick = {props.toggleMode} type="checkbox"  id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
              </div>
            
          </div>
        </div>
      </nav> 
    )
}

Navbar.propTypes = {title: PropTypes.string.isRequired, 
                    contact: PropTypes.string,
                  }
                  Navbar.defaultProps = {
      title: 'Set title here',
      aboutText: 'About text here'
      };