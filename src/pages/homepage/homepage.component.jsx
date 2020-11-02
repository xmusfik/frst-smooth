import React, { useState } from 'react';
import Navbar from '../../components/navbar/navbar.component';
import SideBar from '../../components/sidebar/sidebar.components';

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
    </div>
  );
};

export default HomePage;
