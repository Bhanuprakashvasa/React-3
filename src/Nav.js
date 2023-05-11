import React from 'react'

const Nav = () => {

  return (
    <div className='container'><nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="navbar-logo" href="#">Start BootStrap</div>
        <button className="navbar-menu-toggle" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-menu-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Shop
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-link" href="#">All Products</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-link" href="#">Popular Items</a></li>
                <li><a className="dropdown-link" href="#">New Arrivals</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Nav