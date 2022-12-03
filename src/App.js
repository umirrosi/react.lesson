import { useState } from 'react';
import './App.css';
import Profile from './pages/Profile';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  const [menu, setMenu] = useState(1);

  const content = () => {
    if (menu === 1) {return <Home/>}
    else if(menu === 2) {return <Profile />}
    else if(menu === 3) {return <Contact />}
  }

  return (
    <div className="App">
      <Header onClick={setMenu} />
      {content()}
      <Footer/>
    </div>
  );
}

export default App;