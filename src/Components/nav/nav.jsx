import React, { useState, useEffect } from 'react';
import './nav.css';
import { ImHome } from 'react-icons/im';
import { FaUserSecret } from 'react-icons/fa';
import { FaBookReader } from 'react-icons/fa';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { BiSolidPhoneCall } from 'react-icons/bi';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.querySelector('#home');
      const aboutSection = document.querySelector('#about');
      const experienceSection = document.querySelector('#experience');
      const servicesSection = document.querySelector('#services');
      const contactSection = document.querySelector('#contact');

      const scrollPosition = window.scrollY + 50; // Add an offset for better accuracy

      if(
        scrollPosition >= homeSection.offsetTop && scrollPosition < aboutSection.offsetTop
      ){
        setActiveNav('#home');
      }else if (
        scrollPosition >= aboutSection.offsetTop && scrollPosition < experienceSection.offsetTop
      ){
        setActiveNav('#about');
      }else if (
        scrollPosition >= experienceSection.offsetTop && scrollPosition < servicesSection.offsetTop
      ){
        setActiveNav('#experience');
      }else if (
        scrollPosition >= servicesSection.offsetTop && scrollPosition < contactSection.offsetTop
      ){
        setActiveNav('#services');
      }else {
        setActiveNav('#contact');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <nav>
      <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav ==='#home' ? 'active' : ''}><ImHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav ==='#about' ? 'active' : ''}><FaUserSecret /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav ==='#experience' ? 'active' : ''}><FaBookReader /></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav ==='#services' ? 'active' : ''}><RiCustomerService2Fill /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav ==='#contact' ? 'active' : ''}><BiSolidPhoneCall /></a>
    </nav>
  );
};

export default Nav;
