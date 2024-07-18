// import React from 'react';
import './App.css';
// import Home from './Components/home/Home';
// import About from './Components/about/About';
// import Navbar from './Components/nav/Nav';
// import Services from './Components/service/Services';
// import Resume from './Components/resume/Resume';
// import Portfolio from './Components/portfolio/Portfolio';
// import Testimonial from './Components/testimonial/Testimonial';
// import Contact from './Components/contact/Contact';

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <Home />
//       <About />
//       <Services />
//       <Resume />
//       <Portfolio />
//       <Testimonial />
//       <Contact />

//     </div>
//   );
// }

// export default App;


// import React, { useState, useEffect } from 'react';
// import './App.css';
// import Home from './Components/home/Home';
// import About from './Components/about/About';
// import Navbar from './Components/nav/Nav';
// import Services from './Components/service/Services';
// import Resume from './Components/resume/Resume';
// import Portfolio from './Components/portfolio/Portfolio';
// import Testimonial from './Components/testimonial/Testimonial';
// import Contact from './Components/contact/Contact';

// function App() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setLoading(false);
//     }, 2000); 

//     return () => clearTimeout(timeout);
//   }, []);

//   return (
//     <div className="App">
//       <Navbar />
//       {loading ? (
//         // <div className="loader">
//         //   <p>Loading...</p>
//         // </div>

// <div class="momentum"></div>

//       ) : (
//         <>
//           <Home />
//           <About />
//           <Services />
//           <Resume />
//           <Portfolio />
//           <Testimonial />
//           <Contact />
//         </>
//       )}
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './Components/home/Home';
import About from './Components/about/About';
import Navbar from './Components/nav/Nav';
import Services from './Components/service/Services';
import Resume from './Components/resume/Resume';
import Portfolio from './Components/portfolio/Portfolio';
import Testimonial from './Components/testimonial/Testimonial';
import Contact from './Components/contact/Contact';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simule un délai de chargement (vous pouvez remplacer cela par une logique de chargement réelle)
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000); // Modifiez le délai selon vos besoins

    return () => clearTimeout(timeout);
  }, []);

  // Affiche le loader tant que loading est true
  if (loading) {
    return (
     
    <div className='loader'>
<div class="center-body">
  <div class="loader-spanne-20">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</div>

    </div>

     
    );
  }

  // Une fois que loading est false, affiche les composants réels
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Services />
      <Resume />
      <Portfolio />
      <Testimonial />
      <Contact />
    </div>
  );
}

export default App;


