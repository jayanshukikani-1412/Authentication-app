import './App.css';
import Home from './Components/Home/Home';
import LogIn from './Components/LogIn/LogIn';
import { Route, Routes } from 'react-router-dom';
import ViewProduct from './Components/ViewProduct/ViewProduct';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<LogIn />} />
        <Route path='/viewProduct/:id' element={<ViewProduct />} />
      </Routes>
    </div>
  );
}

export default App;
