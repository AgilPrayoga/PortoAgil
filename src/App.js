
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Work from './Pages/Work';
import Project1 from './Pages/Project/Project1';
import AboutMe from './Pages/AboutMe';
import Home from './Pages/Home';
import Project2 from './Pages/Project/Project2';
import 'flowbite'


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutme' element={<AboutMe/>}/>
        <Route path='/work' element={<Work/>}/>
        
        <Route path='/work/project1' element={<Project1/>}/>
        <Route path='/work/project2' element={<Project2/>}/>
      </Routes>
    </Router>
   
  );
}

export default App;
