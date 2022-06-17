import './App.css';
import Navbar from './components/Nabvar'
import Form from './components/Form'

function App() {
  return (
      <header className="App-header">
        <div>
          <Navbar />
          <div className="container">
            <article>
              <h1>What is Lorem Ipsum? </h1>
              <Form />
            </article>
          </div>
        </div>
      </header>
  );
}

export default App;
