import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Particles from 'react-particles-js';

function App() {
  return (
    <>
      <Particles
      className="particles-canvas"
        params={{
          particles: {
            line_linked: {
              shadow: {
                enable: true,
                color: "#FF8C00",
                blur: 1,
                opacity: 1,
                width: 100,
                distance: 1
              }
            },
            shape: {
              type: "square",
              stroke: {
                width:5,
                color: "#1E90FF"
              }
            },
            move: {
              speed: 1,
            }
          }
        }} />
    <Navbar />
    <Header />
   </>
  );
}

export default App;
