import React from 'react'
import Logo from 'imgPath/npia Logo.jpg'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>

  <footer id="footer" className="footer">

    <div className="container">
      <div className="row gy-4">
        <div className="col-lg-5 col-md-12 footer-info">
          <Link to="/" className="logo d-flex align-items-center">
            <img src={Logo} alt="tecroost" height="180" />
          </Link>
          <p>At NPIA, we are dedicated to exceeding client expectations by providing exceptional quality, precision, and reliability. Our commitment to quality is evident in our rigorous quality control measures, ensuring that every product leaving our facility meets the highest industry standards.</p>
          <div className="social-links d-flex mt-4">
            <Link to="/" className="twitter"><i className="bi bi-twitter"></i></Link>
            <Link to="/" className="facebook"><i className="bi bi-facebook"></i></Link>
            <Link to="/" className="instagram"><i className="bi bi-instagram"></i></Link>
            <Link to="/" className="linkedin"><i className="bi bi-linkedin"></i></Link>
          </div>
        </div>

        <div className="col-lg-2 col-6 footer-links">
          <h4 className="clr-white">Useful Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/contact">Contact us</Link></li>
            <li><Link to="#">Privacy policy</Link></li>
          </ul>
        </div>

        <div className="col-lg-2 col-6 footer-links">
          <h4 className="clr-white">Our Products</h4>
          <ul>
            <li><Link to="#">Plastic Parts</Link></li>
            <li><Link to="#">Magnesium Parts</Link></li>
            <li><Link to="#">Metal Body</Link></li>
            <li><Link to="#">Camera Cases</Link></li>
            <li><Link to="#">Smartwatch Cases</Link></li>
          </ul>
        </div>

        <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
          <h4 className="clr-white">Contact Us</h4>
          <p>
          Plot No. 6, Sector 21,
Greater Noida, Gautam Budh Nagar,
UP - 201308 <br/><br/>
            <strong>Phone:</strong> +91-8178126122<br/>
            <strong>Email:</strong> admin@npia.in<br/>
          </p>

        </div>

      </div>
    </div>

    <div className="container mt-4">
      <div className="copyright">
        &copy; Copyright <strong><span>LTS</span></strong>. All Rights Reserved
      </div>
      <div className="credits">

        Designed by <a href="https://livetechservices.in" className="clr">LTS</a>
      </div>
    </div>

  </footer>
        </>
    )
}

export default Footer

