import ReactCardFlip from 'react-card-flip';
import { useState, version } from 'react';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => {
  const [isFlipped, setFlipped] = useState(false);
  const handleClick = () => {
    setFlipped(!isFlipped);
  }
  return(
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>
      Projects
    </SectionTitle>
    <GridContainer>
      {projects.map(({id , title, description, image, tags, visit, source})=>
        <BlogCard style={{height: "290px"}} key={id}>
          <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
            <div onMouseEnter={handleClick}>
              <Img src={image} />
              <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
              </TitleContent>
            </div>
            <div onMouseLeave={handleClick}>
            <CardInfo style={{textAlign: "center", alignItems: "center"}}>
              {description}
            </CardInfo>
            <TitleContent  style={{marginTop: "15px" , fontSize: "20px" , fontWeight: "bold"}}>
              Technologies
              </TitleContent>
              <TagList>
                {tags.map((tag , i)=>(
                <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
              <UtilityList>
                <ExternalLinks href={source}>Code</ExternalLinks>
                  {visit.length!=0? <ExternalLinks href={visit}>Demo
                </ExternalLinks> : null}
              </UtilityList>
            </div>
        </ReactCardFlip>
      </BlogCard>
      )}
    </GridContainer>
  </Section>
  )
};

export default Projects;