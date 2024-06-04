import React from 'react'
import Navbar from '../Navbar/Navbar.js';

const Layout = ({ children }) => {
  return (
    <>
        <Navbar>
        </Navbar>
        <main>{children}</main>
    </>
  );
};

export default Layout;