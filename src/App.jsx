import './App.css'
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom'
import Home from './paginas/Home'
import TopBar from './componentes/TopBar'
import WarframeTable from './componentes/WarframeTable'

function App() {
  

  return (
    <Router>
            <div className='contenedor-principal'>
                <TopBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />  
                    <Route path="/warframes" element={<WarframeTable />} />                    
                </Routes>
            </div>
    </Router>
  )
}

export default App
