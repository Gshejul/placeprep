import { Route, Routes } from 'react-router-dom';
import './App.css'
import Contact from './components/Contact';
import About from './components/About';
import NavBar from './components/NavBar';

const App = () =>{
  return (
    <Routes>
     
      <Route path='/contact' element={<Contact />} />
      <Route path='/navbar' element={<NavBar />} />
      <Route path='/about' element={<About />} />
    </Routes>
  );
};

export default App;

