import Slider from "../componentes/Slider"
import Videobg from "../componentes/Videobg"
import Info1 from "../componentes/Info1"
import Footer from "../componentes/Footer"

const Home = () => {
  return (
    <div className='home'> 
        <Videobg />
        <Info1 />
        <Slider />
        <Footer />
    </div>
  )
}

export default Home