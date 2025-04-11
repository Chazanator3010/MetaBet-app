
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to MetaBet</h1>
      <Link to="/login">Login</Link>
      <Link to="/bet">Place a Bet</Link>
      <Link to="/deposit">Deposit</Link>
      <Link to="/withdraw">Withdraw</Link>
      <Link to="/streams">Live Streams</Link>
    </div>
  );
}

function Login() {
  return (
    <div>
      <h2>Login</h2>
    </div>
  );
}

function Bet() {
  return (
    <div>
      <h2>Place a Bet</h2>
    </div>
  );
}

function Deposit() {
  return (
    <div>
      <h2>Deposit Funds</h2>
    </div>
  );
}

function Withdraw() {
  return (
    <div>
      <h2>Withdraw Funds</h2>
    </div>
  );
}

function Streams() {
  return (
    <div>
      <h2>Live Streams</h2>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/bet" element={<Bet />} />
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/withdraw" element={<Withdraw />} />
        <Route path="/streams" element={<Streams />} />
      </Routes>
    </Router>
  );
}

export default App;
