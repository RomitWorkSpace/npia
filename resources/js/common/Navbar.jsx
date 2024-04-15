import React, { useState, useEffect  } from 'react'
import { Link } from 'react-router-dom'
import Logo from 'imgPath/npia Logo.jpg'


const Navbar = () => {
  const [dropdownData, setDropdownData] = useState([]);
  const [serviceData, setServiceData] = useState([]);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [clicked, setClicked] = useState(false);
  const [dropdown1Visible, setDropdown1Visible] = useState(false);
  const [dropdown2Visible, setDropdown2Visible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch('https://filmcitynow.com/api/industries');
        const data = await response.json();
        setDropdownData(data.industries);
        const res = await fetch('https://filmcitynow.com/api/services');
        const data1 = await res.json();
        setServiceData(data1.services);
      } catch (error) {
        console.error('Error fetching dropdown data:', error);
      }
    };

    fetchData();
  }, []);

useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 40);
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDropdown = (e, index) => {
    e.stopPropagation();
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const toggleIndustryDropdown = () =>{
      setDropdown1Visible(!dropdown1Visible);
  }

  const toggleServiceDropdown = () =>{
    setDropdown2Visible(!dropdown2Visible);
}

  const handleNav = () =>{
    if(!clicked){
        document.querySelector("body").classList.add("mobile-nav-active");
      }
      else{
        document.querySelector("body").classList.remove("mobile-nav-active");
      }
    setClicked(!clicked);
  }


  return (
    <>
    <header className='header_area'>
    <div className='container-fluid header-top p-2' style={{backgroundColor:'rgb(13 29 108)',color:'#ccc'}}>
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'>+91-8178126122 | admin@npia.in</div>
            </div>
        </div>
    </div>
    <div id="header" className={`header d-flex align-items-center ${isScrolled ? 'fixed-top' : ''}`}>
    <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

      <Link to="/" className="logo d-flex align-items-center">
        
        <img src={Logo} alt="NPIA" />
      </Link>
      <div className="" style={{zIndex:'9999'}} onClick={() => handleNav()}>
      <i className={ clicked ? "mobile-nav-toggle mobile-nav-show bi bi-x" : "mobile-nav-toggle mobile-nav-show bi bi-list"}></i>
      </div>
      <nav id="navbar" className="navbar">
        <ul>
          <li onClick={() => handleNav()}><Link to="/" className="active">HOME</Link></li>
          <li onClick={() => handleNav()}><Link to="/about">ABOUT</Link></li>
          <li><Link to="/products">PRODUCTS</Link></li>
          <li className="dropdown" onClick={() => toggleServiceDropdown()}><Link to="" id="down" className={dropdown2Visible ? 'active' : 'deactive'}><span>SERVICES</span> <i className="bi bi-chevron-down dropdown-indicator"></i></Link>
            <ul id="inner-down" className={dropdown2Visible ? 'dropdown-active' : 'dropdown-deactive'}>
                        {serviceData.map((service, index) => (
                          <li onClick={() => handleNav()}><Link to={`https://filmcitynow.com/service/${service.slug}`}>{service.name}</Link></li>
                          
                        ))}
            </ul>
          </li>

          <li className="dropdown" onClick={() => toggleIndustryDropdown()}><Link to="" id="down" className={dropdown1Visible ? 'active' : 'deactive'}><span>INDUSTRIES</span> <i className="bi bi-chevron-down dropdown-indicator"></i></Link>
            <ul id="inner-down" className={dropdown1Visible ? 'dropdown-active' : 'dropdown-deactive'}>
              
              
            
                    
                        {dropdownData.map((dropdown, index) => (
                          <li onClick={() => handleNav()}><Link to={`https://filmcitynow.com/industry/${dropdown.slug}`}>{dropdown.name}</Link></li>
                          
                        ))}
                    
             
              
            </ul>
          </li>


          <li onClick={() => handleNav()}><Link to="/contact">CONTACT</Link></li>
          <li onClick={() => handleNav()}><Link to="https://waykenrm.com/request-a-quote/" className="get-a-quote">Get a Quote</Link></li>
        </ul>
      </nav>

    </div>
    </div>
  </header>

    </>
  );
};

export default Navbar;

