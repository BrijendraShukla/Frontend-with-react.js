import PropTypes from 'prop-types';
import React from 'react';

function NavScrollExample(props) {
  
  return (
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className='container-fluid'>
        <a className="navbar-brand" href="#">{props.navbar}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
            <li className="nav-item ">
              <a className="nav-link active"aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">{props.Something_else_here}</a>
            </li>     
          </ul> 
          <div className={`form-check form-switch text-${props.mode==='light'?'black':'light'}`}>
            <input type="checkbox" onClick={props.toggleMode} className="form-check-input" id="customSwitch1"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode==="light"?"Enabled light Mode":"Enabled Dark Mode"}</label>
          </div>   
        </div>
        </div>
      </nav>
  );  
  
}

NavScrollExample.propTypes= {navbar: PropTypes.string}
NavScrollExample.defaultProps={Something_else_here:''}

export default NavScrollExample;