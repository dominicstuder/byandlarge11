// Navbar.js

import React, { useState } from "react"
import NavbarLinks from "./NavbarLinks"
// import Logo from "./Logo"
import styled from 'styled-components'

const Navigation = styled.nav`
  width: 100%;
  height: 100vh;
  background: white;
  display: flex;
  `
const Toggle = styled.div``
const Navbox = styled.div``
const Hamburger = styled.div``


const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <Navigation>
     
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <Navbox>
          <NavbarLinks />
        </Navbox>
      ) : (
        <Navbox open>
          <NavbarLinks />
        </Navbox>
      )}
    </Navigation>
  )
}

export default Navbar