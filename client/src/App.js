import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import Login from './screens/Login';
import Cart from './screens/Cart';
import RestaurantPage from './screens/RestaurantPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Homescreen/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/restaurant"element={<RestaurantPage/>}/>
        </Routes>
      </Router>
      
     
    </div>
  );
}

export default App;
