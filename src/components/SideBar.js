// Sidebar.js
import React from 'react';
import { RxDashboard } from "react-icons/rx";
import { LuUserSquare } from "react-icons/lu";
import { SiHackthebox } from "react-icons/si";
import { SlTarget } from "react-icons/sl";
import { VscBell } from "react-icons/vsc";
import { PiAddressBookLight } from "react-icons/pi";

const Sidebar = () => (
  <nav className='menu-lateral'>
    <div className='expand'>
      <img className='img' src="/logo.png" alt="Logo" />
    </div>
    <ul>
      <li className='item-menu'>
        <a href='dashboard'>
          <span className='icon'><RxDashboard /></span>
          <span className='txt-link'>Dashboard</span>
        </a>
      </li>
      <li className='item-menu'>
        <a href='alertas'>
          <span className='icon'><VscBell /></span>
          <span className='txt-link'>Alertas</span>
        </a>
      </li>
      <li className='item-menu'>
        <a href='metas'>
          <span className='icon'><SlTarget /></span>
          <span className='txt-link'>Metas</span>
        </a>
      </li>
      <li className='item-menu'>
        <a href='estoque'>
          <span className='icon'><SiHackthebox /></span>
          <span className='txt-link'>Estoque</span>
        </a>
      </li>
      <li className='item-menu'>
        <a href='clientes'>
          <span className='icon'><PiAddressBookLight /></span>
          <span className='txt-link'>Clientes</span>
        </a>
      </li>
      <li className='item-menu'>
        <a href='vendedor'>
          <span className='icon'><LuUserSquare /></span>
          <span className='txt-link'>Vendedor</span>
        </a>
      </li>
    </ul>
  </nav>
);

export default Sidebar;
