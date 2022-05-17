import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Index from './Pages/Index'
import AnimalHome from './Pages/AnimalHome'

function App() {
return (
  <Router>
    <Routes>
      <Route path='/' element={<Index />} />
      <Route path='/animalhome' element={<AnimalHome />} />
    </Routes>
    
    <div className="App">
      
    </div>
  </Router>
      
);
}

export default App;
