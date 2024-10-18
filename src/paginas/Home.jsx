import Slider from "../componentes/Slider"
import Videobg from "../componentes/Videobg"
import Info1 from "../componentes/Info1"
import Footer from "../componentes/Footer"

const Home = () => {
  return (
    <div className='home'> 
        <Info1 />
        <Videobg />        
        <Slider />
        <Footer />
    </div>
  )
}

export default Home