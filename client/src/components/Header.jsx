import React, { useState } from 'react';
import LogoSpark from '../../public/logo-branca.png';
import { IoMenu, IoClose } from "react-icons/io5";

export default function Header( {scrollPosition} ) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`${scrollPosition = 800 ? `bg-white` : `bg-[#011F3B]`} w-full py-3 px-10 fixed top-0 z-50`}>
      <nav className='flex justify-between items-center'>
        <div className='flex items-center gap-3'>
          <img src={LogoSpark} alt="logo spark.ia" className='w-10'/>
          <h1 className='text-xl text-white'>Spark.ia</h1>
        </div>
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='text-white text-4xl'>
            {!menuOpen && <IoMenu/>}
          </button>
        </div>
        <ul className={`fixed top-0 left-0 right-0 bg-[#011F3B] text-white transition-transform duration-300 ease-in-out transform ${menuOpen ? 'translate-y-0' : '-translate-y-full'} md:static md:flex md:items-center md:gap-6 md:translate-y-0 md:bg-transparent`}>
          <li className='md:hidden flex justify-end border-y-[1px] border-slate-700 p-2 w-full md:border-none md:w-auto hover:text-[#fa7807] active:text-[#FDAD0B]'>
            <button className='text-4xl'onClick={toggleMenu}>
              <IoClose />
            </button>
          </li>
          <li className='border-y-[1px] border-slate-700 p-2 w-full text-center md:border-none md:w-auto hover:text-[#fa7807] active:text-[#FDAD0B]'>Início</li>
          <li className='border-y-[1px] border-slate-700 p-2 w-full text-center md:border-none md:w-auto hover:text-[#fa7807] active:text-[#FDAD0B]'>Funcionalidades</li>
          <li className='border-y-[1px] border-slate-700 p-2 w-full text-center md:border-none md:w-auto hover:text-[#fa7807] active:text-[#FDAD0B]'>Sobre nós</li>
        </ul>
        <div className='hidden gap-2 md:flex'>
          <a href='/login'>
            <button className='bg-transparent border-[#fa7807] border-2 text-white rounded-[10px] px-4 py-2 hover:bg-[#FDAD0B] hover:border-[#FDAD0B]'>
              Entrar
            </button>
          </a>
          <a href='/cadastro'>
            <button className='bg-[#FA7807] text-white rounded-[10px] px-4 py-2 hover:bg-[#FDAD0B]'>
              Registrar
            </button>
          </a>
        </div>
      </nav>
    </header>
  );
}
