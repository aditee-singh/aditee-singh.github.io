import React from 'react';
import { DiNodejsSmall, DiReact, DiCodeigniter } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I love exploring new technologies. I am open to learn and work on new technologies as long as it is interesting.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
          Reactjs <br/>  Nextjs <br/>  Jquery  <br/> CSS  <br/> HTML
        </ListParagraph>
      </ListItem>
      <ListItem>
        <DiNodejsSmall size="3rem" />
        <ListTitle>Back-End</ListTitle>
        <ListParagraph>
          Nodejs
        </ListParagraph>
      </ListItem>
      <ListItem>
        <DiCodeigniter size="3rem" />
        <ListTitle>Programming</ListTitle>
        <ListParagraph>
          C++
        </ListParagraph>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
