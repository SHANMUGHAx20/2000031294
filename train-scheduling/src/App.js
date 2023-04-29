import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Trains from './components/trains/Trains';
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
                 <Route exact path='/trains' element={< Trains/>}></Route>  
                 <Route exact path='/train' element={< Train/>}></Route>  

          </Routes>  
          </div>  
       </Router>  
    </div>
  );
}

export default App;
