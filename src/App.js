// import logo from './logo.svg';
import './App.css';
import Create from './components/create';
import { Routes, Route } from 'react-router-dom';
import Read from './components/read';
import Edit from './components/edit';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route exact path='/' element={<Read/>}></Route>
        <Route exact path='/create' element={<Create/>}></Route>
        <Route exact path='/edit' element={<Edit/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
