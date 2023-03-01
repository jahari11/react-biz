import React from 'react';
import Analytics from './componets/Analytics';
import Cards from './componets/Cards';
import Footer from './componets/Footer';
import Hero from './componets/Hero';
import Navbar from './componets/Navbar';
import Newsletter from './componets/Newsletter';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Analytics/>
      <Newsletter/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
