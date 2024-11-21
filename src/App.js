
// import './App.css';

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import React, { useEffect } from "react";
// import Frontpage from './pages/frontpage';
// import StaticPage from './pages/staticpage';


// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Routes>
//           <Route path="/" element={<Frontpage />} />
//         </Routes>
//         <Routes>
//           <Route path="/Page" element={<StaticPage />} />
//         </Routes>

      
//       </Router>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import './App.css'; // Add your styles here

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold">
          WELCOME MAGUKIYA FAMILY
        </h1>
        <h1 className="text-6xl sm:text-8xl lg:text-9xl font-bold mt-4">
          VIKAS <span className="text-red-500">❤︎</span> JANVI
        </h1>
      </div>
    </div>
  );
}

export default App;

