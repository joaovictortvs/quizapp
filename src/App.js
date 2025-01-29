import './output.css';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './components/pages/Home';

function App() {
  return (
    <div className="w-screen h-screen flex flex-col">
        <Router>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
