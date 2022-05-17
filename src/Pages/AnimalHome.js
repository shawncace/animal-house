import {useNavigate} from 'react-router-dom'
import dummypic from '../images/dummypic.png'

const AnimalHome = () => {
  let navigate=useNavigate()

  return (  
    <>
      <div className="animal-home-wrapper">
        <div className="go-back-container">
          <button className="btn" onClick={()=>navigate('/')}>Pick More Animals</button>
        </div>
        <header className='header'>My Animals</header>
        <div className="my-animals-img-container">
          <img src={dummypic} alt="dummypic" className="my-animal-pic" />
          <img src={dummypic} alt="dummypic" className="my-animal-pic" />
          <img src={dummypic} alt="dummypic" className="my-animal-pic" />
          <img src={dummypic} alt="dummypic" className="my-animal-pic" />
          <img src={dummypic} alt="dummypic" className="my-animal-pic" />
          <img src={dummypic} alt="dummypic" className="my-animal-pic" />
        </div>
      </div>
      
    </>
  );
}
 
export default AnimalHome;