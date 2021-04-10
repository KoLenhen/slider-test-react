import logo from '../../logo.svg';
import './App.css';
import Aim from '../Aim/Aim'
import Gallery from '../Gallery/Gallery'
import Base from '../Base/Base'
import Nav from '../Nav/Nav'

function App() {

  return (
    <div className="App">
      <Nav />
      <Aim />
      <Base />
      <Gallery />
    </div>
  );
}

export default App;
