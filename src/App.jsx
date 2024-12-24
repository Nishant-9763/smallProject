// import React from "react";
// import { Link } from "react-router-dom"; // Import Link for navigation

// function App() {
//   return (
//     <div>
//       {/* Navigation Menu */}
//       <nav>
//         <ul>
//           <li>
//             <Link to="/hash">MD5 Hash</Link> {/* Link to home */}
//           </li>
//           <li>
//             <Link to="/speed">Internet Speed Test</Link>{" "}
//             {/* Link to speed test */}
//           </li>
//         </ul>
//       </nav>
//       <h1>Welcome to the KGN Services</h1>
//     </div>
//   );
// }
// export default App;
import React, { useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

function App() {
  useEffect(() => {
    // Dynamically create bubbles
    const numberOfBubbles = 10; // You can adjust this number
    const bubbleContainer = document.getElementById("bubbles-container");
    
    // Create bubbles dynamically
    for (let i = 0; i < numberOfBubbles; i++) {
      const bubble = document.createElement("div");
      bubble.classList.add("bubble");
      
      // Position bubbles randomly on the screen
      bubble.style.left = `${Math.random() * 100}vw`; // Random horizontal position
      bubble.style.bottom = `${Math.random() * 100}vh`; // Random vertical position
      
      bubbleContainer.appendChild(bubble);
    }
  }, []);

  return (
    <div>
      {/* Bubble container */}
      <div id="bubbles-container"></div>

      {/* Navigation Menu */}
      <nav>
        <ul>
          <li>
            <Link to="/hash">MD5 Hash</Link>
          </li>
          <li>
            <Link to="/speed">Internet Speed Test</Link>
          </li>
        </ul>
      </nav>
      <h1>Welcome to the KGN Services</h1>
    </div>
  );
}

export default App;

