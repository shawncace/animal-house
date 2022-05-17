import {Link} from 'react-router-dom'
import {useContext} from 'react'
import {DataContext} from '../context/Context'

const Index = () => {
  const{
  imgSrc,
  searchStatus,
  getCat,
  getDog, 
  takeHome,
  }=useContext(DataContext)

  return (  
    <div className="project-wrapper">
      <div className="header-container">
        <header className="header">Cute Animals Yay</header>
      </div>
          
      <div className="emoji-container">
        <div className='emojis'>&#128054;</div>
        <div className='emojis'>&#128049;</div>
      </div>
          
      <div className="instructions">
        <p>(Click the picture and take it home!)</p>
      </div>
          
      <div className="btn-container">
        <button className='btn' onClick={()=>{getDog()}}>WOOF</button>
        <button className='btn' onClick={getCat}>MEOW</button>
      </div>

      <div className="img-container">
        {
          searchStatus ?
          <div className="img">
            <img className='image' src={imgSrc} alt="pic" onClick={takeHome}/>
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