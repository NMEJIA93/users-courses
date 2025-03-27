import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Fondo from "./assets/Fondo.png"

function App() {

  const bgImagen = {
    backgroundImage: `url(${Fondo})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'bootom',
    position: 'relative'
  }

  return (
    <>
      <div style ={bgImagen} className="overflow-hidden min-h-screen">
        <Navbar />
        <Hero />
      </div>
    </>
  )
}

export default App
