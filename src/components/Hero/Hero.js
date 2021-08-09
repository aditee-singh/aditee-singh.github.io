import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding >
    <LeftSection>
      <SectionTitle main center>
        Hello There! <br /> I am Aditee Singh.
      </SectionTitle>
      <SectionText>
        I am a sophomore at JSSATE, Noida. Trying to come up with optimized solutions to real-world problems by combining them with Full Stack development. 
      </SectionText>
      <Button>Get CV</Button>
    </LeftSection>
  </Section>
);

export default Hero;