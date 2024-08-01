import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export const Home = () => {
  return (
    <main className='text-slate-900 pl-10 pr-10'>
      <h1 className='text-4xl'>Welcome to the skincare project!</h1>
      <h2>The primary purpose of this project is to reduce the barrier to entry for skincare and skincare routines for a layperson.</h2>
      <h2>This will be done by providing information, as well as offering tools to build and track a routine more easily.</h2>

      {/* Navigation Links */}
      <nav className='mt-10'>
        <ul className='flex justify-around items-center'>
          <li>
            <Link to='/skincare-overview' className='text-blue-500 hover:text-blue-700'>Skincare Overview</Link>
          </li>
          <li>
            <Link to='/5-steps-of-skincare' className='text-blue-500 hover:text-blue-700'>5 Steps of Skincare</Link>
          </li>
          <li>
            <Link to='/build-routine' className='text-blue-500 hover:text-blue-700'>How to Build a Skincare Routine</Link>
          </li>
          <li>
            <Link to='/track-routine' className='text-blue-500 hover:text-blue-700'>How to Track Your Routine</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
};
