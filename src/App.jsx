import { Route, Routes } from 'react-router-dom';
import './App.css'
import Contact from './components/Contact';
import About from './components/About';
import NavBar from './components/NavBar';
import OffCampusUpdates from './components/OffCampusUpdates';

const App = () =>{
  return (
    <Routes>
      <Route path='/' element={<NavBar />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/about' element={<About />} />
      <Route path='/OffCampus' element={<OffCampusUpdates />} />
    </Routes>
  );
};

export default App;

