import { BlogCard, CardInfo, GridContainer, HeaderThree, Hr, TitleContent, Img } from './PublicationStyles';
import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { publications } from '../../constants/constants';

const Publications = () => (
  <Section nopadding id="publications">
    <SectionTitle main>
      Publications
    </SectionTitle>
    <GridContainer>
      {publications.map(({id , title, description, image})=>
      <BlogCard style={{marginBottom: "20px"}} key={id}>
        <Img style={{height: "250px"}} src={image} />
        <TitleContent>
          <HeaderThree style={{marginTop: "10px"}} title>{title}</HeaderThree>
          <Hr />
        </TitleContent>
        <CardInfo style={{marginBottom: "30px"}}>
           {description}
        </CardInfo>
      </BlogCard>
      )}
    </GridContainer>
  </Section>
);

export default Publications;