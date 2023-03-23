import "./index.css"
import { Route,Routes } from 'react-router-dom';
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import Project from './Routes/Project';
import About from './Routes/About';


function App() {
  return (
<div>
<Routes>
  <Route path="/" element={<Home />}/>
  <Route path="/Project" element={<Project />}/>
  <Route path="/About" element={<About />}/>
  <Route path="/Contact" element={<Contact />}/>
</Routes>

</div>
  );
}

export default App;
