import logo from './logo.svg';
import './App.css';
import { Addlist } from './component/Addlist';
import { Search } from './component/Search';
import { Delete } from './component/Delete';
import { Alltodo } from './component/Alltodo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter >
    <Routes>
      <Route path="/" element={<Addlist />}/>
      <Route path="/Search" element={<Search />}/>
      <Route path="/Delete" element={<Delete />}/>
      <Route path="/Alltodo" element={<Alltodo />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
