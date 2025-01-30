import './output.css';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Navbar from './components/layout/Navbar';
import Container from './components/layout/Container'
import Footer from './components/layout/Footer';

import Home from './components/pages/Home';

function App() {
  return (
    <div className="w-screen h-screen flex flex-col">
        <Router>
            <Navbar/>
            <Container>
              <Routes>
                  <Route exact path='/' element={<Home/>}/>
              </Routes>
              </Container>  
            <Footer/>
        </Router>
    </div>
  );
}

export default App;
