import { Routes, Route } from 'react-router';
import './App.css';
import { Contacts } from './Contacts/Contacts';
import { Header } from './Header/Header';
import { Main } from './Main/Main';
import { MySkills } from './MySkills/MySkills';
import { Projects } from './Projects/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/*" element={<Main />} />
        <Route path="/skills" element={<MySkills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
}

export default App;
