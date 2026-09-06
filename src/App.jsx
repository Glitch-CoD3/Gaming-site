import Header from './components/Header.jsx';
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';
import { Routes, Route } from "react-router-dom";
import './App.css';
import { Games } from './pages/Games.jsx';
import { WorkStep } from './pages/WorkSteps.jsx'
import { Shopping } from './pages/Shopping.jsx';
import { Support } from './pages/Support.jsx';
import { Contact } from './pages/Contact.jsx';


function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/games" element={<Games />} />
        <Route path="/how-it-works" element={<WorkStep />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/support" element={<Support />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
