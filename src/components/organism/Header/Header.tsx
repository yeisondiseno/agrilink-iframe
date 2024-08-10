import React from 'react';
import Link from 'next/link';
// Components
import { HamburgerButton, Nav, LogoIcon } from '@/components/';
// Styles
import './Header.scss';

const Header = () => {
  return (
    <header className='o-header'>
      <div className='o-header-container max-block'>
        <Link href='./'>
          <LogoIcon width={241} />
        </Link>

        <div className='o-header-nav'>
          <Nav />
          <HamburgerButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
