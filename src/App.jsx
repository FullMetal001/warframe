import './App.css'
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom'
import Home from './paginas/Home'
import TopBar from './componentes/TopBar'
import WarframeTable from './componentes/WarframeTable'
import PrimaryWeapons from './componentes/PrimaryWeapons'

function App() {
  

  return (
    <Router>
            <div className='contenedor-principal'>
                <TopBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />  
                    <Route path="/warframes" element={<WarframeTable />} /> 
                    <Route path="/primaryweapons" element={<PrimaryWeapons />} />
                </Routes>
            </div>
    </Router>
  )
}

export default App
