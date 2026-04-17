import React from 'react';
import Header from './components/Header';
import Presentation from './components/Presentation';
import Hobbies from './components/Hobbies';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Socials from './components/Socials';
import Email from './components/Email';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Socials />
      <Email />
      <main className="fillHeight">
        <Presentation />
        <Experience />
        <Projects />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
