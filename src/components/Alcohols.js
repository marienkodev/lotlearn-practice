import React from 'react';
import { Outlet } from 'react-router-dom';


export default function Alcohols() {
    return (
      <div >
        <h1 className='alco'>Alcohol</h1>
        <Outlet/>
      </div>
    );
  }