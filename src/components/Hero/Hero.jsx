import React from 'react'
import Personaje from "../../assets/Personaje.png"
import Logo from "../../assets/Logo.png"

const Hero = () => {
  return (
    <section className='mt-36'>

      <div className='grid grid-cols-1 md:grid-cols-2'>

        {/*Textos y description*/}
        <div className='sm:p-10 md:p-15 lg:p-30 xl:p-36'>
          <img src={Logo} alt='Logo del juego' />
          <p className='py-12 text-white'>
            Magic Quest es un emocionante juego de aventuras en un
            mundo de fantasía donde te embarcas en una épica
            búsqueda mágica. Explora reinos misteriosos, domina
            poderosos hechizos y enfréntate a criaturas legendarias
            mientras desvelas secretos ocultos y te conviertes en el
            héroe supremo. ¡La magia está en tus manos!
          </p>
          <div className='flex justify-centers gap-4'>
            <a className='bg-purple-600 py-2 px-12 rounded-3xl text-white
            hover:bg-purple-700 transition-all duration-300 items-center cursor-pointer'>
              Jugar ahora
              <i className="bi bi-controller text-xl ml-2">
              </i>
            </a>
            <a className='text-white flex items-center cursor-pointer'>
              Ver GamePlat
              <i className="bi bi-youtube text-xl ml-2">
              </i>
            </a>
          </div>
        </div>

        {/*Imagenes*/}
        <div className='sm:p-10 md:p-15 lg:p-30 xl:p-36'>
          <img src={Personaje} alt='Personaje del juego' />
        </div>

      </div>
    </section>
  )
}

export default Hero
