import './App.css';
import Massage from './components/Massage/Massage';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className='app'>
      <Routes>
        <Route path='*' element={<NotFoundPage/>}/>
        <Route path='/' element={<Massage/>}/>
      </Routes>
    </div>
  );
}

export default App;
