import React from 'react';
import { Logo } from '@/components';
import Link from 'next/link';
function Navbar() {
  return (
    <nav>
      <Link href='/'>
        <Logo />
      </Link>
    </nav>
  );
}

export default Navbar;
