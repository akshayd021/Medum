import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home/Home';
import Tranding from './Components/Tranding/Tranding';
import Api from './Components/api/Api';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Home/>
     <Tranding/>
     <Api/>
    </div>
  );
}

export default App;
