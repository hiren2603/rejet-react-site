import React, { useState } from "react";
import classes from "./Navbar.module.css";
import logo from "../../assets/logo_s.png";
import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [laserMenu, setLaserMenu] = useState(false);

  
  const menuHandler = () => {
    if(window.innerWidth > 1024){
      setIsOpen(false)
    }else{
      setIsOpen(!isOpen);
    }
  };
  const multiToggle = () => {
    setDropdown(false);
    setIsOpen(false);
    setLaserMenu(false);
  };
  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <nav className={classes.nav}>
      <Link to="/" className={classes.logo__container}>
        <img className={classes.logo__img} src={logo} alt="logo" />
      </Link>
      <ul
        className={
          isOpen ? `${classes.mobile__link__container}` : `${classes.navlink__container}`
        }
      >
        <div className={classes.navlink}>
          <Link onClick={() => setIsOpen(false)} to="/">Home</Link>
        </div>
        <div className={classes.navlink}>
          <Link onClick={() => setIsOpen(false)} to="/about">About</Link>
        </div>
        <div
          className={classes.navlink}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <Link
            to="#"
            onClick={() => {
              setDropdown(true);
            }}
            // className={classes.navlink}
          >
            Products
          </Link>
          {dropdown && (
            <div className={classes.dropdown}>
              <div className={classes.dropdown__navlink}>
                <Link to="products/inkjet" onClick={multiToggle}>
                  InkJet
                </Link>
              </div>
              <div
                className={classes.dropdown__navlink}
                onMouseOver={() => {
                  setLaserMenu(true);
                }}
                onMouseLeave={() => {
                  setLaserMenu(false);
                }}
              >
                <Link to="#">Laser</Link>
                {laserMenu && (
                  <div className={classes.laser__dropdown}>
                    <div className={classes.dropdown__navlink}>
                      <Link
                        to="products/laser/co2"
                        onClick={multiToggle}
                        className={classes.laser_link}
                      >
                        CO2 Laser
                      </Link>
                    </div>
                    <div className={classes.dropdown__navlink}>
                      <Link
                        to="products/laser/fiber"
                        onClick={multiToggle}
                        className={classes.laser_link}
                      >
                        Fiber Laser
                      </Link>
                    </div>
                    <div className={classes.dropdown__navlink}>
                      <Link
                        to="products/laser/uv"
                        onClick={multiToggle}
                        className={classes.laser_link}>
                        UV Laser
                      </Link>
                    </div>
                    <div className={classes.dropdown__navlink}>
                      <Link
                        to="products/laser/desktop"
                        onClick={multiToggle}
                        className={classes.laser_link}
                      >
                        Desktop Laser
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <div className={classes.dropdown__navlink}>
                <Link
                  to="products/thermal"
                  onClick={multiToggle}
                  // className={classes.navlink}
                >
                  Thermal
                </Link>
              </div>
            </div>
          )}
        </div>
        <div className={classes.navlink}>
        <Link
          to="/applications"
          // className={classes.navlink}
          onClick={() => setIsOpen(false)}>
          Applications
        </Link>
        </div>
        <div className={classes.navlink}>
        <Link
          to="/ewaste-mgmt"
          // className={classes.navlink}
          onClick={() => setIsOpen(false)}>
          E-Waste Management
        </Link>
        </div>
        <div className={classes.navlink}>
        <Link
          to="/contact"
          // className={classes.navlink}
          onClick={() => setIsOpen(false)}>
          Contact
        </Link>
        </div>
        <div className={classes.button__container}>
          <a
            className={classes.contact__button}
            href="tel:769-827-1412"
            onClick={() => setIsOpen(false)}
          >
            <MdIcons.MdCall />
            Call Now
          </a>
          <a
            className={classes.contact__button}
            href="mailto:info@rejettech.com"
            onClick={() => setIsOpen(false)}
          >
            <MdIcons.MdOutlineMail />
            Send Mail
          </a>
        </div>
      </ul>
      <div className={classes.toggle__container}>
        {isOpen ? (
          <RiIcons.RiCloseFill onClick={menuHandler} size={30}/>
        ) : (
          <RiIcons.RiMenu3Line onClick={menuHandler} size={30}/>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
