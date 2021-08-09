import React, { cloneElement } from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>
      Projects
    </SectionTitle>
    <GridContainer>
      {projects.map(({id , title, description, image, tags, visit, source})=>
      <BlogCard key={id}>
        <Img src={image} />
        <TitleContent>
          <HeaderThree title>{title}</HeaderThree>
          <Hr />
        </TitleContent>
        <CardInfo>
           {description}
        </CardInfo>
        <div>
          <TitleContent  style={{marginTop: "15px"}}>
            Technologies
          </TitleContent>
          <TagList>
            {tags.map((tag , i)=>(
              <Tag key={i}>{tag}</Tag>
            ))}
          </TagList>
        </div>
        <UtilityList>
          <ExternalLinks href={source}>Code</ExternalLinks>
          {visit.length!=0? <ExternalLinks href={visit}>Demo</ExternalLinks> : null}
        </UtilityList>
      </BlogCard>
      )}
    </GridContainer>
  </Section>
);

export default Projects;