import React from 'react'
import About from './components/About';
import Header from './components/Header';
import NavBar from './components/Navbar';
import "./sass/main.scss";
function App() {
  return (
    <div>
      <NavBar/>
    <Header/>
    <About/>
    </div>
  )
}

export default App;