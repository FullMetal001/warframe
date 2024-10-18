import './App.css'
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom'
import Home from './paginas/Home'
import TopBar from './componentes/TopBar'
import WarframeTable from './componentes/WarframeTable'
import PrimaryWeapons from './componentes/PrimaryWeapons'
import SecondayW from './componentes/SecondayW'
import MeleeW from './componentes/Melee'

function App() {
  

  return (
    <Router>
            <div className='contenedor-principal'>
                <TopBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<Home />} />
                    <Route path="/home" element={<Home />} />  
                    <Route path="/warframes" element={<WarframeTable />} /> 
                    <Route path="/primaryweapons" element={<PrimaryWeapons />} />
                    <Route path="/secondaryweapons" element={<SecondayW />} />
                    <Route path="/melee" element={<MeleeW />} />
                </Routes>
            </div>
    </Router>
  )
}

export default App
