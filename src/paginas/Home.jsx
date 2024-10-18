import Slider from "../componentes/Slider"
import Videobg from "../componentes/Videobg"
import Info1 from "../componentes/Info1"

const Home = () => {
  return (
    <div className='home'> 
        <Videobg />
        <Info1 />
        <Slider />
    </div>
  )
}

export default Home