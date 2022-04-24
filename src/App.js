import {useState} from 'react'

function App() {
  const [imgSrc, setImgSrc]=useState('')
  const catURL='https://aws.random.cat/meow'
  const dogURL = 'https://random.dog/woof.json'

  const getCat= async() =>{
    try{
      const response = await fetch(catURL);
      const catData= await response.json();
      console.log(catData);
      setImgSrc(catData)
    }catch(error){
      console.log(error)
    }
  }

  const getDog=async()=>{
    try{
      const response = await fetch(dogURL)
      const dogData = await response.json();
      console.log(dogData);
      setImgSrc(dogData);
    }catch(error){
      console.log(error);
    }
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
          <div className="img">
            <img className='image' src={imgSrc.url} alt="''" />
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
