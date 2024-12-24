import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import md5 from "md5-hash";
import { Link } from "react-router-dom";

const Hash = () => {
  const [inputValue, setInputValue] = useState("");
  const [hashedValue, setHashedValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const hash = md5(inputValue); // Generate MD5 hash
    setHashedValue(hash); // Set the hashed value to be displayed
  };
  return (
    <div>
      {/* Navigation Menu */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link> {/* Link to home */}
          </li>
          <li>
            <Link to="/speed">Internet Speed Test</Link>{" "}
            {/* Link to speed test */}
          </li>
        </ul>
      </nav>
      <h3>Use this generator to create an MD5 hash of a string</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Enter String:</label>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter a string"
          />
        </div>{" "}
        <br></br>
        <button type="submit">Generate Hash</button>
      </form>
      <br></br>
      {hashedValue && (
        <div>
          <label>MD5 Hash:</label>
          <input type="text" value={hashedValue} readOnly />
        </div>
      )}
    </div>
  );
};

export default Hash;
