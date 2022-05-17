import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {DataProvider} from './context/Context'
import Index from './Pages/Index'
import AnimalHome from './Pages/AnimalHome'

function App() {
  
  
  return (
  <DataProvider>
  <Router>
    <Routes>
      <Route path='/' element={<Index/>} />
      <Route path='/animalhome' element={<AnimalHome />} />
    </Routes>
    
    
  </Router>
  </DataProvider>
      
);
}

export default App;
