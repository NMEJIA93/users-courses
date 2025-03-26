import React from 'react'
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
  return (
    <nav>
      <div className='flex justify-between items-center sm:px-12 sm:py-6 px-4 py-3'>
        <div>
          <img src={Logo} alt="logo del sitio" className='w-[100px]' />
        </div>
        <div>
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
        <div>
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

    </nav>
  )
}

export default Navbar
