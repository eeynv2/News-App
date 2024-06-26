import React from 'react'
import PropTypes from 'prop-types'

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">News App</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">{props.firstNav}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href='/'>{props.secondNav}</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

Navbar.propTypes = {
    firstNav : PropTypes.string,
    secondNav : PropTypes.string
}

export default Navbar

