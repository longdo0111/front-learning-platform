import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HeaderComponent from '../../react-frontend-emplmgmt/src/components/HeaderComponent';
import FooterComponent from '../../react-frontend-emplmgmt/src/components/FooterComponent';
import WFDComponent from './components/WFDComponent';
import Homepage from './components/Homepage';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
            <Routes>Homepage
              <Route path="/" Component={Homepage}></Route>
              <Route path="/wfd" Component={WFDComponent}></Route>
            </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
