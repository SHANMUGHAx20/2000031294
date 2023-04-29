import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Train from './components/trains/Train';
import {  
  BrowserRouter as Router,  
  Routes,  
  Route,  
  Link  
}   
from 'react-router-dom';  
function App() {
  return (
    <div className="App">
      

      <Router>  
           <div className="App">  
           <Routes>  
                 <Route exact path='/' element={< Navbar />}></Route>  
                 <Route exact path='/trains' element={< Train/>}></Route>  
          </Routes>  
          </div>  
       </Router>  
    </div>
  );
}

export default App;
