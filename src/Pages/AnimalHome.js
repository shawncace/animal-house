import {useContext} from 'react'
import {DataContext} from '../context/Context'
import {useNavigate} from 'react-router-dom'

const AnimalHome = () => {
  const {myAnimals}=useContext(DataContext)
  
  let navigate=useNavigate()

  return (  
    <>
      <div className="animal-home-wrapper">
        <div className="go-back-container">
          <button className="btn" onClick={()=>navigate('/')}>Pick More Animals</button>
        </div>
        <header className='header'>My Animals</header>
        <div className="my-animals-img-container">
          {myAnimals.map((item)=>(
            <img src={item.src} alt='myanimalpic' className='my-animal-pic'/>
          ))}
        </div>
      </div>
      
    </>
  );
}
 
export default AnimalHome;