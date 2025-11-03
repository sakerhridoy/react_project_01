import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import Success from './Components/Success/Success';
import Service from './Components/Service/Service';
import Work from './Components/Work/Work';
import Agency from './Components/Agency/Agency';
import Reviews from './Components/Reviews/Reviews';
import Form from './Components/Form/Form';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Success />
      <Service />
      <Work />
      <Agency />
      <Reviews />
      <Form />
      <Footer />
    </>
  );
}

export default App;
