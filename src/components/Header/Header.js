'use client'; // If you're using App Router in Next.js 13+

import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span} from './HeaderStyles';

const Header = () => (
  <Container>
    {/* Logo Section */}
    <Div1>
      <Link href="/" className="flex items-center text-white no-underline">
        <DiCssdeck size="3rem" />
        <Span style={{ marginLeft: '10px', marginBottom: "2opx" }}>Portfolio</Span>
      </Link>
    </Div1>

    {/* Navigation Links */}
    <Div2>
      <li>
        <Link href="#projects" passHref legacyBehavior>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech" passHref legacyBehavior>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about" passHref legacyBehavior>
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>

    {/* Social Icons */}
    <Div3>
      <SocialIcons href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
