import './output.css';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Navbar from './components/layout/Navbar';
import Container from './components/layout/Container'
import Footer from './components/layout/Footer';

import Home from './components/pages/Home';
import NextJs from './components/pages/NextJs';

import Facil from './components/levelsQuiz/Facil'
import Medio from './components/levelsQuiz/Medio'
import Dificil from './components/levelsQuiz/Dificil'

function App() {
  return (
    <div className="w-screen h-screen flex flex-col">
        <Router>
            <Navbar/>
            <Container>
              <Routes>
                  <Route exact path='/' element={<Home/>}/>
                  <Route path='/nextjs' element={<NextJs/>}/>
                  
                  <Route path='/facil' element={<Facil/>}/>
                  <Route path='/medio' element={<Medio/>}/>
                  <Route path='/dificil' element={<Dificil/>}/>
              </Routes>
              </Container>  
            <Footer/>
        </Router>
    </div>
  );
}

export default App;
