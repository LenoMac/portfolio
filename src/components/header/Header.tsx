import React from 'react'
import './header.css'
import { CiSearch } from "react-icons/ci";

export default function Header() {
  return (
    <div className='header'>
      <h1 className='logo'>HB</h1>
      <ul>
        <li><a className='active' href="#">About</a></li>
        <li><a href="#">Porfolio</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div className="search">
        <input type="text" placeholder='Search' />
        <CiSearch size={20} color='white'/>
      </div>
    </div>
  )
}
