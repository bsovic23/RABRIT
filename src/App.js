import React from 'react';

// Main

import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

// Pages

import Home from './components/Home';
import Redcap from './components/Redcap';

function App() {

  let component;

  switch (window.location.pathname) {
    case "/": 
      component = <Home />
      break
    case "/Redcap":
      component = <Redcap />
      break
  }

  return (
    <section>
      <body>
        <header>
          <Header />
          <Navbar />
        </header>

        <section>
          {component}
        </section>
      </body>

      <footer>
        <Footer />
      </footer>
    </section>
  );
}

export default App;
