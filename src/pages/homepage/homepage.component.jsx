import React, { useState } from 'react';
import HeroSection from '../../components/hero-section/hero-section.components';
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
} from '../../components/info-section/data';
import InfoSection from '../../components/info-section/info-section.component';
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
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
    </div>
  );
};

export default HomePage;
