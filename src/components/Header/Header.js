import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillMediumSquare } from 'react-icons/ai';
import { FaLaptopCode } from 'react-icons/fa';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{display: "flex" , alignItems: "center" , color: "white" , marginBottom: "18px" }}>
          <FaLaptopCode style={{marginRight: "10px"}} size="3rem"/>
          <Span>Welcome</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#experience">
          <NavLink>Experience</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
    <SocialIcons href="https://github.com/aditee-singh">
        <AiFillGithub size="3rem" />
    </SocialIcons>
    <SocialIcons href="https://www.linkedin.com/in/aditee-singh-9a034319b/">
        <AiFillLinkedin size="3rem" />
    </SocialIcons>
    <SocialIcons href="https://medium.com/@singhaditee33">
        <AiFillMediumSquare size="3rem" />
    </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
