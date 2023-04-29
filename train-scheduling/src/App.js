import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Train from './components/trains/Train';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Train/>
    </div>
  );
}

export default App;
