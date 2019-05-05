import React from 'react';
import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/menu';
import Routing from './routing';

function App() {
  return (
    <div className="App">
      <Header />
      <Routing />
      <Footer />
    </div>
  );
}

export default App;
