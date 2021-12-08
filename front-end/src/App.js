import './App.css';
import Header from './Header';
import './bootstrap.min.css'
import LandingPage from './LandingPage';
import MyNotes from './MyNotes';
import { BrowserRouter as Router, Route,Routes} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} exact />
        <Route path="/mynotes" element={()=> <MyNotes /> } />
        {/* <Route path="/register" component={RegisterScreen} /> */}
        </Routes>
        </Router>
    </div>
  );
}

export default App;
