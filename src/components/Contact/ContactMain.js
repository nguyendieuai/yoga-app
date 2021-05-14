import React from 'react';

const ContactFooter = () => {
  return (
    <div className="contact-container">
        <div className="contact-info-container">
          <table className="contact-info">
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
        <div className="contact-form-container">
          <form action="#" className="contact-form">
            <div className="cntact-input-container">
              <input type="text" className="input" placeholder="Name" />
            </div>
            <div className="cntact-input-container">
              <input type="email" className="input" placeholder="Email" />
            </div>
            <div className="contact-input-container">
              <textarea className="msg-input" cols={30} rows={10} placeholder="Your message" defaultValue={""} />
            </div>
            <div className="cntact-input-container">
              <input type="submit" className="input" defaultValue="Send" />
            </div>
          </form>
        </div>
      </div>
        
  )
}

export default ContactFooter;