import {useNavigate} from 'react-router-dom'

const AnimalHome = () => {
  let navigate=useNavigate()

  return (  
    <>
      <div className="animal-home-wrapper">
        <div className="go-back-container">
          <button className="btn" onClick={()=>navigate('/')}>Pick More Animals</button>
        </div>
        <header className='header'>My Animals</header>
        
      </div>
      
    </>
  );
}
 
export default AnimalHome;