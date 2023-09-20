import React from "react"
import { Navbar } from "react-bootstrap"
import Menu from "./Menu"
const SiteNavbar = ({buttonBlock,darkLogo,customLogo,defaultLogo}) => {

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        className="site-navbar"
      >
        <Navbar.Brand href="/">

          {defaultLogo ? (<img src={defaultLogo.src} alt="site-brand"/>) : customLogo ? (
            <img src={customLogo.src} alt="site-brand" />
          ) : (
            <img src="image/logo/logo.png" alt="site-brand" height={64}/>
          )}
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="hamburgur"
          style={{ backgroundColor: '#333333' }}
        />
        <Menu button={buttonBlock}/>
      </Navbar>
    </>
  )
}

export default SiteNavbar
