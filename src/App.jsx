import './App.css'
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom'
import Home from './paginas/Home'
import TopBar from './componentes/TopBar'
import Warframe from './componentes/Warframe'
import PrimaryWeapon from './componentes/PrimaryWeapon'
import SecondaryWeapon from './componentes/SecondaryWeapon'
import Melee1 from './componentes/Melee1'

function App() {
  

  return (
    <Router>      
            <div className='contenedor-principal' id='contenedor-principal'>              
                <TopBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<Home />} />
                    <Route path="/home" element={<Home />} />  
                    <Route path="/warframes" element={<Warframe />} /> 
                    <Route path="/primaryweapons" element={<PrimaryWeapon />} />
                    <Route path="/secondaryweapons" element={<SecondaryWeapon />} />
                    <Route path="/melee" element={<Melee1 />} />
                </Routes>
              </div>            
    </Router>
  )
}

export default App
