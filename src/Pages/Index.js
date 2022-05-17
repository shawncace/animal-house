import {Link} from 'react-router-dom'
import {useState} from 'react'
import tryagainpic from '../images/tryagain.jpg'

const Index = () => {
  const [imgSrc, setImgSrc]=useState('')
  const [searchStatus, setSearchStatus]=useState(false)
 
  const catURL='https://aws.random.cat/meow'
  const dogURL = 'https://random.dog/woof.json'

  const getCat= async() =>{
    setSearchStatus(true)
    try{
      const response = await fetch(catURL);
      const catData= await response.json();
      catSrcFunc(catData)
    }catch(error){
      console.log(error)
      setImgSrc(tryagainpic)
    }
  }

  const getDog=async()=>{
    setSearchStatus(true)
    try{
      const response = await fetch(dogURL)
      const dogData = await response.json();
      dogSrcFunc(dogData)
    }catch(error){
      console.log(error)
      setImgSrc(tryagainpic)
    }
  }

  const dogSrcFunc=(data)=>{
    if(data.url.includes('mp4')){
      setImgSrc(tryagainpic)
    } else{
      setImgSrc(data.url)}
  }

  const catSrcFunc=(data)=>{
    setImgSrc(data.file)
  }
  
  return (  
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
            {
              searchStatus ?
              <div className="img">
              <img className='image' src={imgSrc} alt="pic" />
              </div>
              :
              <div className='stop-gap'>
                <p>Choose WOOF or MEOW</p>
              </div>
            }
          </div>

          <div className="home-container">
            <button className="btn animal-home-btn"><Link to='/animalhome'>My Animals</Link></button>
            
          </div>
        
        </div>
  );
}
 
export default Index;