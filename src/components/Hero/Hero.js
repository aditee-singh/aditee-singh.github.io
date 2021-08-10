import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, CVLink } from './HeroStyles';

const Hero = () => (
  <Section row nopadding >
    <LeftSection>
      <SectionTitle main center>
        Hello There! <br /> I am Aditee Singh.
      </SectionTitle>
      <SectionText>
        I am a sophomore at JSSATE, Noida. Trying to come up with optimized solutions to real-world problems by 
        combining them with Full Stack development. Outside of the tech-world I have a keen interest in sports, music and cooking. 
      </SectionText>
      <CVLink href="https://drive.google.com/file/d/13ltjnPNC7-6BSNkKF_cQHwEWigorQ5tw/view">Get CV</CVLink>
    </LeftSection>
  </Section>
);

export default Hero;