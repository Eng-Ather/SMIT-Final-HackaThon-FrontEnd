// import React from 'react'

// function App() {
//   return (
//     <>
//     <div className="min-h-screen">
//       <h1 className="text-6xl font-bold underline">Landing page</h1>
//     </div>
//     </>
//   );
// }

// export default App;
// --------------------------

import React from 'react';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />  {/* Adding Navbar to the layout */}
      <div className="min-h-screen">
        <h1 className="text-6xl font-bold underline">Landing page</h1>
      </div>
    </>
  );
}

export default App;
