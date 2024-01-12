import React, { useState } from 'react';
import { Logo, Button, Input } from '@/components';
import { OutsideClickDetector } from '@/containers';
import Link from 'next/link';
import { BUTTON_TYPE, INPUT_TYPE } from '@/types/global.types';
import Search from '@/assets/search';
import useWindowSize from '@/hooks/useWindowSize';
function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  const { width } = useWindowSize();

  const clickOutside = () => {
    if (!openNav) {
      setOpenNav(false);
    }
  };

  return (
    <nav className='navbar'>
      <div className='navbar__main'>
        <Link href='/'>
          <Logo />
        </Link>
        <button
          onClick={() => {
            setOpenNav((prev) => !prev);
          }}
          className={`navbar__menu ${openNav && 'open'}`}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className='navbar__search'>
        <Input type={width <= 900 ? INPUT_TYPE.BASIC : INPUT_TYPE.SEARCH} placeholder='find book' />
        <Button
          type={BUTTON_TYPE.COLORFULL}
          text={width <= 900 ? '' : 'search'}
          icon={width <= 900 ? <Search /> : null}
        />
      </div>
      <OutsideClickDetector onOutsideClick={clickOutside}>
        <div className={`navbar__mobile ${openNav && 'open'}`}>
          <ul>
            <li>HOME</li>
            <li>WISHLIST</li>
            <li>SAVED</li>
          </ul>
        </div>
      </OutsideClickDetector>
    </nav>
  );
}

export default Navbar;
