import kitty from './images/kitty.png'
import pug from './images/pug.png'
import pusheen from './images/pusheen.png'
import shiba from './images/shiba.png'

function App() {
  
  
  return (
    <div className="App">
      <div className="project-wrapper">
        <div className="header-container">
          <header className="header">Cute Animals Yay</header>
        </div>
        <div className="img-container"><img src={kitty} alt="kittypic" /></div>
      </div>
      
    </div>
  );
}

export default App;
