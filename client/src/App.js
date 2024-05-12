
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import AdminFooter from './components/Admin/AdminFooter';
import HomePage from './Pages/HomePage';
import AdminHomePage from './Pages/Admin/AdminHomePage';
import Herosection_firstname from './components/Admin/Popups/Herosection_firstname';
function App() {
  return (
         <>
         <Router>
          <Routes>
            <Route path="/" element={<HomePage />} /> 
            <Route path="/admin" element={<AdminHomePage />} /> 
            <Route path="/firstnameupdate" element={<AdminHomePage />} /> 
            

          </Routes>
         </Router>
         </>
  );
}
export default App;
