import {useState} from 'react'

function App() {
  const [imgSrc, setImgSrc]=useState('')
  const [dogSearch, setDogSearch]=useState(false)
  const [catSearch, setCatSearch]=useState(false)
  
  const catURL='https://aws.random.cat/meow'
  const dogURL = 'https://random.dog/woof.json'

  const getCat= async() =>{
    setCatSearch(true)
    setDogSearch(false)
    try{
      const response = await fetch(catURL);
      const catData= await response.json();
      console.log(catData);
      setImgSrc(catData)
      setCatSearch(true)
    }catch(error){
      console.log(error)
      
    }
  }

  const getDog=async()=>{
    setDogSearch(true)
    setCatSearch(false)
    try{
      const response = await fetch(dogURL)
      const dogData = await response.json();
      setImgSrc(dogData);
      setDogSearch(true);
    }catch(error){
      console.log(error)
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
          <div className='emojis'>&#128049;</div>
          <div className='emojis'>&#128054;</div>
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
            : 
            <div className='stop-gap'>
              <p>Choose WOOF or MEOW</p>
            </div>}
        </div>

        {/* {dogSearch ? 
        <div className="img-container">
          <div className="img">
            <img className='image' src={imgSrc.url} alt="''" />
          </div>
        </div>
        : null }

        {catSearch ? 
        <div className="img-container">
          <div className="img">
            <img className='image' src={imgSrc.file} alt="''" />
          </div>
        </div>
        : null } */}
        

        <div className="home-container">
          <button className="btn">My Animals</button>
        </div>
        

        
        
        
      </div>
    </div>
  );
}

export default App;
