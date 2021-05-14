import React from 'react';

const ClassHeader = () => {
    return (
        <div className="header-nav">
        <a href="/" className="logo link">YOGA</a>
        <nav className="main-nav">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="/index.html" className="nav-link link">Home</a>
            </li>
            <li className="nav-item">
              <a href="/class.html" className="nav-link link">Class</a>
            </li>
            <li className="nav-item">
              <a href="/aboutus.html" className="nav-link link">About us</a>
            </li>
            <li className="nav-item">
              <a href="/contact.html" className="nav-link link">Contact us</a>
            </li>
            <li className="nav-item">
              <a href="/blog.html" className="nav-link link">Blog</a>
            </li>
            
          </ul>
        </nav>
      </div>
    )
}

export default ClassHeader;