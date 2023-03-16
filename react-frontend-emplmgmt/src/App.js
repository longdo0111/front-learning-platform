import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ListEmployeeComponentWithNavigate from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponentWithNavigate from './components/CreateEmployeeComponent';
import UpdateEmployeeComponentWithNavigation from './components/UpdateEmployeeComponent';
import ViewEmployeeComponentWithNavigate from './components/ViewEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent />
          <div className="container">
            <Routes>
              <Route path="/" exact Component = {ListEmployeeComponentWithNavigate}></Route>
              <Route path="/employees" Component = {ListEmployeeComponentWithNavigate}></Route>
              {/* //step 1 */}
              <Route path="/add-employee/:id" Component = {CreateEmployeeComponentWithNavigate}></Route>
              <Route path="/view-employee/:id" Component = {ViewEmployeeComponentWithNavigate}></Route>
              {/* <Route path="/update-employee/:id" Component = {UpdateEmployeeComponentWithNavigation}></Route>               */}
            </Routes>
          </div>
          <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
