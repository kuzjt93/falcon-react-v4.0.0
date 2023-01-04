import React from 'react';
import Hero from './Hero';
import NavbarStandard from './NavbarStandard';
import Partners from './Partners';
import Processes from './Processes';
import Services from './Services';
import Testimonial from './Testimonial';
import Cta from './Cta';
import FooterStandard from './FooterStandard';

const Landing = () => {
  return (
    <>
      <NavbarStandard />
      <Hero />
      <Partners />
      <Processes />
      <Services />
      <Testimonial />
      <Cta />
      <FooterStandard />
    </>
  );
};

export default Landing;
