import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import {useState} from 'react'
import AnimalHome from './Pages/AnimalHome'

function App() {
  const [imgSrc, setImgSrc]=useState('')
  const [dogSearch, setDogSearch]=useState(false)
  const [catSearch, setCatSearch]=useState(false)
  const [searchError, setSearchError]=useState(false)
 
  const catURL='https://aws.random.cat/meow'
  const dogURL = 'https://random.dog/woof.json'

  const getCat= async() =>{
    setSearchError(false)
    setDogSearch(false)
    try{
      const response = await fetch(catURL);
      const catData= await response.json();
      setImgSrc(catData)
      setCatSearch(true)
    }catch(error){
      console.log(error)
      setCatSearch(false)
      setSearchError(true)
    }
  }

  const getDog=async()=>{
    setSearchError(false)
    setCatSearch(false)
    try{
      const response = await fetch(dogURL)
      const dogData = await response.json();
      setImgSrc(dogData);
      setDogSearch(true);
    }catch(error){
      console.log(error)
      setDogSearch(false)
      setSearchError(true)
    }
  }
  
  const takeHome=()=>{

  }
  return (
  
    
    <div className="App">
      <div className="project-wrapper">
        <div className="header-container">
          <header className="header">Cute Animals Yay</header>
        </div>
        
        <div className="emoji-container">
          <div className='emojis'>&#128054;</div>
          <div className='emojis'>&#128049;</div>
        </div>

        <div className="btn-container">
          <button className='btn' onClick={getDog}>WOOF</button>
          <button className='btn' onClick={getCat}>MEOW</button>
        </div>
        
        <div className="img-container">
          {dogSearch ? 
            <div className="img">
            <img className='image' src={imgSrc.url} alt="Try another WOOF!" />
          </div>
          : catSearch ?
            <div className="img">
            <img className='image' src={imgSrc.file} alt="Try another MEOW!" />
            </div>
          : searchError ?
            <p>error</p>
          : 
            <div className='stop-gap'>
              <p>Choose WOOF or MEOW</p>
            </div>}
        </div>

        <div className="home-container">
          <button className="btn">My Animals</button>
          
        </div>
      
      </div>
    </div>
    
  );
}

export default App;
