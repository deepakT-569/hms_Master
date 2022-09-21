
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./component/common/Header"
import Footer from "./component/common/Footer";
import Register from './component/Register/register';
import Login from "./component/Login/login";
import Admin from "./component/Admin/adminpage"
import AddDoc from "./component/Admin/addDoc"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./component/Home/homepage"
import Aboutus from './component/Aboutus/Aboutus';

function App() {
// const [user,setLoginUser] = ({});

  return (
     <div className ="App">
     <div className ="header">
        <Header/>
      </div>
     <div className="body">
     <Router> 
      <Routes>
        <Route exact path="/" element={<Home/>}></Route> 
        <Route exact path="/aboutus" element={<Aboutus/>}></Route> 
        <Route path="/login" element={<Login></Login>} >  </Route> 
        <Route path="/register" element={<Register/>} > </Route> 
        <Route path="/adminpage" element={<Admin/>}></Route>
        <Route path="/addDoc" element={<AddDoc/>}></Route>
        </Routes>
      </Router>
      </div>
      <div className ="footer">
        <Footer/>
      </div>
      </div>
  );
}

export default App;
