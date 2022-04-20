import kitty from './images/kitty.png'
import pug from './images/pug.png'
import pusheen from './images/pusheen.png'
import shiba from './images/shiba.gif'

function App() {
  
  
  return (
    <div className="App">
      <div className="project-wrapper">
        <div className="header-container">
          <header className="header">Cute Animals Yay</header>
        </div>
        
        <div className="img-container">
          <div className='emojis'>&#128049;</div>
          <div className='emojis'>&#128054;</div>
        </div>

        <div className="btn-container">
          <button className='btn'>WOOF</button>
          <button className='btn'>MEOW</button>
        </div>
        
        
      </div>
      
    </div>
  );
}

export default App;
