import './App.css';
import Menu from './components/Menu'
import Formulario from './components/Formulario'
import Image from 'react-bootstrap/Image'
import FooterApp from './components/FooterApp'

function App() {
  return (
    <header className="App-header">
      <div>
        <Menu />
        <Image
              src=
              "https://static.wixstatic.com/media/0daec8_7bcbb72d606547cc884ed66db8f969d5~mv2.jpg/v1/fill/w_1899,h_365,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0daec8_7bcbb72d606547cc884ed66db8f969d5~mv2.jpg"  className='img-fluid shadow-4'
              rounded
            />
        <div className="container">
       
            
            <Formulario />
         
        </div>
        <FooterApp />

      </div>
    </header>
  );
}

export default App;
