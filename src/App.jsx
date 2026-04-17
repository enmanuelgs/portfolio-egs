import React from 'react';
import Header from './components/Header';
import Presentation from './components/Presentation';
import Hobbies from './components/Hobbies';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Socials from './components/Socials';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Socials />
      <main className="fillHeight">
        <Presentation />
        <Experience />
        <Projects />
        <Hobbies />
      </main>
      <Footer />
    </div>
  );
}

export default App;
