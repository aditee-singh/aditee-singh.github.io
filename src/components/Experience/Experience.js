import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, TitleContent, Img } from './ExperienceStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { experience } from '../../constants/constants';

const Experience = () => (
  <Section nopadding id="experience">
    <SectionTitle main>
      Experience
    </SectionTitle>
    <GridContainer>
      {experience.map(({id , title, description, image, time})=>
      <BlogCard style={{marginBottom: "20px"}} key={id}>
        <Img style={{height: "250px"}} src={image} />
        <TitleContent>
          <HeaderThree style={{marginTop: "10px"}} title>{title}</HeaderThree>
          <Hr />
        </TitleContent>
        <CardInfo style={{marginBottom: "30px"}}>
           {description}
        </CardInfo>
        <ExternalLinks href="">{time}</ExternalLinks>
      </BlogCard>
      )}
    </GridContainer>
  </Section>
);

export default Experience;