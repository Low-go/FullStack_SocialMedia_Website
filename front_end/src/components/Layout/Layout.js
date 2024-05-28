import React from 'react'
import Navbar from './Navbar/Navbar.js';

const Layout = ({ children }) => {
  return (
    <>
        <Navbar>
        <main>{children}</main>
        </Navbar>
    </>
  );
};

export default Layout;