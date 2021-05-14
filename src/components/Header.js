import React from 'react';
import HeaderNav from './HeaderNav';

const Header = () => {
    return (
        <header className="main-header">
            <HeaderNav />
            <div className="hero-content">
                <h1 className="main-heading">
                    "YOGA THẢI ĐỘC
            <span className="main-heading-focus">
                        <br />THANH LỘC CƠ THỂ TỪ SÂU BÊN TRONG"
            </span>
                </h1>
                <p className="sub-heading"> Bob Harper</p>
                <a href=
                "https://fit.yogaplus.vn/ygp-dues-tra-truoc-0d/?itm_source=homepage&itm_medium=header&itm_campaign=yoga-thai-doc&itm_content=yoga-thai-doc&itm_term=img-1920x600&utm_source=Web" 
                className="hero-cta-link">TÌM HIỂU THÊM</a>
            </div>
        </header>
    )
}

export default Header;