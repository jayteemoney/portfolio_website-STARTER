import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
<Section row nopadding>
  <LeftSection>
    <SectionTitle main center>
      Welcome To <br />
      My Portfolio
    </SectionTitle>
    <SectionText>
     i am responsible for creating responsive, user-friendly interfaces that connect users with the functionality of a website or application.
    </SectionText>
    <Button onClick={()=> window.location="https://google.com"}>Learn more</Button>
  </LeftSection>

</Section>
);

export default Hero;