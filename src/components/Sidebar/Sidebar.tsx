import React from 'react';
import Home from '@/assets/home';
import Attach from '@/assets/attach';
import Hearth from '@/assets/hearth';
import { Button, Avatar } from '@/components';
import { BUTTON_TYPE } from '@/types/global.types';
import Alert from '@/assets/alert';
import Link from 'next/link';
import { useStore } from '@/zustand';

function Sidebar() {
  const { setModalOpen } = useStore();
  return (
    <aside className='sidebar'>
      <div className='sidebar__head'>
        <Avatar />
      </div>
      <ul className='sidebar__center'>
        <Link href='/'>
          <li>
            <Home />
          </li>
        </Link>
        <Link href='/saved'>
          <li>
            <Hearth />
          </li>
        </Link>
        <Link href='/attached'>
          <li>
            <Attach />
          </li>
        </Link>
      </ul>
      <div className='sidebar__end'>
        <Button
          onClick={() => {
            setModalOpen(true);
          }}
          type={BUTTON_TYPE.SUBSCRIBE}
          text='Subscribe'
          icon={<Alert />}
        />
      </div>
    </aside>
  );
}

export default Sidebar;
