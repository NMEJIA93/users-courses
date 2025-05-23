import React, { useState } from 'react'
import Logo from '../../assets/Logo.png'


const navbarlinks = [
  {
    id: 1,
    title: 'Inicio',
    link: '/'
  },
  {
    id: 2,
    title: 'Nosotros',
    link: '#'
  },
  {
    id: 3,
    title: 'Contacto',
    link: '#'
  },
  {
    id: 4,
    title: 'Soporte',
    link: '#'
  }
]

const navbarRedes = [
  {
    id: 1,
    title: 'Instagram',
    link: '/',
    icon: 'bi bi-instagram'
  },
  {
    id: 2,
    title: 'Linkedin',
    link: '#',
    icon: 'bi bi-linkedin'
  },

]


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggelMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className='fixed top-0 left-0 bg-purple-900 w-full bg-opacity-30 backdrop-blur-md z-50'>
      <div className='flex justify-between items-center sm:px-12 sm:py-6 px-4 py-3'>
        <div>
          <img src={Logo} alt="logo del sitio" className='w-[100px]' />
        </div>
        {/*Boton de hamburguesa */}
        <button onClick={toggelMenu} className='text-white md:hidden'>
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            {isOpen ? (<path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M6 18L18 6M6  6l12 12'
            />) : (<path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6H16M4 12h16M4 18h16'
            />)}

          </svg>
        </button>
        {/*Menu de navegacion */}
        <div className='hidden md:block'>
          <ul className='flex sm:space-x-8 space-x-6'>
            {navbarlinks.map((link) => (
              <li key={link.id}>
                <a
                  rel='noopener noreferrer'
                  href={link.link}
                  className='text-white sm:text-lg text-sm hover:text-gray-300 transition-transform hover:scale-105
                transform inline-block duration-300'
                >{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
        {/*Redes sociales */}
        <div className='hidden md:block'>
          <ul className='flex space-x-4'>
            {navbarRedes.map((link) => (
              <li key={link.id}>
                <a
                  rel='noopener noreferrer'
                  className='inline-block text-white sm:text-lg text-sm hover:text-gray-300 transition-transform hover:scale-105'
                  target='_blank'
                  href={link.link}>
                  <i
                    className={`${link.icon} sm:text-xl text-lg text-white hover:text-gray-300 transition-transform hover:scale-105`}>
                  </i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/*Menu de navegacion movil */}
      <div className={`md:hidden absolute w-full bg-purple-950 transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <ul className='flex flex-col px-4 py-2'>
          {navbarlinks.map((link) => (
            <li key={link.id} className='py-2 text-center'>
              <a
                rel='noopener noreferrer'
                href={link.link}
                onClick={() => setIsOpen(false)}
                className='text-white hover:text-sky-200'
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        {/*Redes sociales */}
        <div className=''>
          <ul className='flex space-x-4 px-2 py-2 border-t border-purple-700 justify-center'>
            {navbarRedes.map((link) => (
              <li key={link.id}>
                <a
                  rel='noopener noreferrer'
                  className='inline-block'
                  target='_blank'
                  href={link.link}
                  onClick={() => setIsOpen(false)}
                >

                  <i
                    className={`${link.icon} text-lg text-white hover:text-sky-200 `}>
                  </i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
