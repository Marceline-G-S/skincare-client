// homepage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <main className='max-w-4xl mx-auto px-4 py-8 md:px-10 lg:px-20'>
      <h1 className='text-4xl font-bold mb-4'>Welcome to the skincare project!</h1>
      <div className='space-y-4'>
        <p className='mb-2'>The primary purpose of this project is to reduce the barrier to entry for skincare and skincare routines for a layperson.</p>
        <p className='mb-2'>This will be done by providing information, as well as offering tools to build and track a routine more easily.</p>
      </div>

      {/* Navigation Links */}
      <nav className='mt-10'>
        <ul className='flex justify-around items-center space-x-4'>
          <li>
            <Link to='/skincare-overview' className='text-blue-500 hover:text-blue-700 transition duration-150 ease-in-out'>Skincare Overview</Link>
          </li>
          <li>
            <Link to='/five-steps-of-skincare' className='text-blue-500 hover:text-blue-700 transition duration-150 ease-in-out'>5 Steps of Skincare</Link>
          </li>
          <li>
            <Link to='/build-routine' className='text-blue-500 hover:text-blue-700 transition duration-150 ease-in-out'>How to Build a Skincare Routine</Link>
          </li>
          <li>
            <Link to='/track-routine' className='text-blue-500 hover:text-blue-700 transition duration-150 ease-in-out'>How to Track Your Routine</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
};
