import React from 'react';

const ContactFooter = () => {
  return (
        <div>
        <div className="footer-border" />
        <div className="footer-content-container">
          <div className="footer-content">
            <a href="/" className="link footer-logo">yoga</a>
            <p className="company-desc">Phương Thức Liên Hệ</p>
            <table className="footer-contact-info">
              <tbody><tr>
                  <td><i className="fas fa-envelope" /></td>
                  <td>yogaplus@yogaplus.vn</td>
                </tr>
                <tr>
                  <td><i className="fas fa-phone-alt" /></td>
                  <td>1900 6934<br />(028) 7107 9899</td>
                </tr>
                <tr>
                  <td><i className="fas fa-map-marker-alt" /></td>
                  <td>Trung tâm Yoga Plus Thảo Điền Pearl Plaza<br />Tầng 3, 12 Quốc Hương, P. Thảo Điền, Q. 2,
                    TP.HCM.</td>
                </tr>
              </tbody></table>
          </div>
          <div className="footer-nav-container">
            <p className="footer-title">Liên Kết Hữu Ích</p>
            <nav className="footer-nav">
              <ul className="footer-nav-list">
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
        </div>
        <div className="social-nav-container">
          <ul className="social-nav-list">
            <li className="social-nav-list">
              <a href="https://www.facebook.com/yogaplusvn?utm_source=Web" className="link social-link">
                <i className="fab fa-facebook-square" />
              </a>
            </li>
            <li className="social-nav-list">
              <a href="http://www.yogaplus.vn/" className="link social-link">
                <i className="fas fa-globe" />
              </a>
            </li>
            <li className="social-nav-list">
              <a href="https://www.youtube.com/channel/UCfo1brftylZ05nr9aOo5pag" className="link social-link">
                <i className="fab fa-youtube" />
              </a>
            </li>
          </ul>
        </div>
        <div className="copyright">
          <p className="copy-text">Copyright ©2021 Yoga Plus</p>
        </div>
      </div>
    )
}

export default ContactFooter;