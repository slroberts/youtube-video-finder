import React from 'react';
import { PlayIcon } from '@heroicons/react/solid';

const Header = () => {
  return (
    <h1 className='flex w-full px-8 py-4 bg-zinc-800 text-white font-bold capitalize text-lg'>
      <PlayIcon className='h-7 w-7 mr-1 text-red-600' /> Youtube Video App
    </h1>
  );
};

export default Header;
