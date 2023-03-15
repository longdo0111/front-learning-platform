import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent />
          <div className="container">
            <Routes> localhost:3000/add-employee
              <Route path="/" exact Component = {ListEmployeeComponent}></Route>
              <Route path="/employees" Component = {ListEmployeeComponent}></Route>
              <Route path="/add-employee" Component = {CreateEmployeeComponent}></Route>
            </Routes>
          </div>
          <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
