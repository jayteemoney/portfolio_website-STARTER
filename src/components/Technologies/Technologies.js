import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id ="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>As a front-end developer, I craft responsive, interactive user interfaces using HTML, CSS, JavaScript, and frameworks like React and Tailwind. I utilize Git, Webpack, and Figma to streamline development, optimize performance, and bring designs to life.

</SectionText>
<List>
  <ListItem>
    <DiReact size="3rem" />
    <ListContainer>
      <ListTitle>Front-End</ListTitle>
      <ListParagraph>
        Experience with <br />
        React.js
      </ListParagraph>
    </ListContainer>
  </ListItem>
  <ListItem>
    <DiFirebase size="3rem" />
    <ListContainer>
      <ListTitle>Blockchain</ListTitle>
      <ListParagraph>
        Experience with <br />
        Solidity Smart contracts
      </ListParagraph>
    </ListContainer>
  </ListItem>
  <ListItem>
    <DiReact size="3rem" />
    <ListContainer>
      <ListTitle>Front-End</ListTitle>
      <ListParagraph>
        Experience with <br />
        APIs: Fetch or Axios for integrating backend data.
      </ListParagraph>
    </ListContainer>
  </ListItem>
</List>
  </Section>
);

export default Technologies;
