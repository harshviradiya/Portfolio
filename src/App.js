import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home/Home';
import './Media_Query.scss';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
function App() {
  return (
    <div className="App">
      {/* <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router> */}
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
