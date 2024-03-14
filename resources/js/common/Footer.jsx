import React from 'react'
import Logo from 'imgPath/npia Logo.jpg'

function Footer() {
    return (
        <>

  <footer id="footer" className="footer">

    <div className="container">
      <div className="row gy-4">
        <div className="col-lg-5 col-md-12 footer-info">
          <a href="index.html" className="logo d-flex align-items-center">
            <img src={Logo} alt="tecroost" height="180" />
          </a>
          <p>We eagerly await the opportunity to collaborate with clients, leveraging our expertise and advanced capabilities to meet their unique manufacturing requirements.</p>
          <div className="social-links d-flex mt-4">
            <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
            <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
            <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
            <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>

        <div className="col-lg-2 col-6 footer-links">
          <h4 className="clr-white">Useful Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Our Resources</a></li>
            <li><a href="#">Terms of service</a></li>
            <li><a href="#">Privacy policy</a></li>
          </ul>
        </div>

        <div className="col-lg-2 col-6 footer-links">
          <h4 className="clr-white">Our Products</h4>
          <ul>
            <li><a href="#">Plastic Parts</a></li>
            <li><a href="#">Magnesium Parts</a></li>
            <li><a href="#">Metal Body</a></li>
            <li><a href="#">Camera Cases</a></li>
            <li><a href="#">Smartwatch Cases</a></li>
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

