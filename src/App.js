import { BrowserRouter, Route, Routes,  } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Homepage from './components/homepage/Homepage';
import Registration from './components/registration/Registration';

function App() {
  let isDesktop = true
  return (
    
      <div className="App">
        <BrowserRouter>
          <Header isDesktop={isDesktop}/>
          <div>
            <Routes>
              <Route path='*' element={<Homepage isDesktop={isDesktop}/>} />
              <Route path='/registration' element={<Registration />} />   
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    
    
  );
}

export default App;
