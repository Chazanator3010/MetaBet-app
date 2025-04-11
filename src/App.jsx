
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD3Fv6N6xKEXAMPLEKEYQvVx",
  authDomain: "metabet-app.firebaseapp.com",
  projectId: "metabet-app",
  storageBucket: "metabet-app.appspot.com",
  messagingSenderId: "10123456789",
  appId: "1:10123456789:web:abc123metabet"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function Home() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold">Welcome to MetaBet</h1>
      <p className="mt-2">Bet on live gameplay from everyone’s favourite games.</p>
      <Link to="/login" className="text-blue-600 underline mt-4 block">Login</Link>
      <Link to="/bet" className="text-green-600 underline mt-2 block">Place a Bet</Link>
    </div>
  );
}

function Login() {
  const handleLogin = async () => {
    const email = prompt("Enter email:");
    const password = prompt("Enter password:");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
    } catch (error) {
      alert("Login failed: " + error.message);
    }
  };

  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold">Login</h2>
      <button onClick={handleLogin} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Login</button>
      <Link to="/" className="block mt-4 text-blue-600 underline">Back to Home</Link>
    </div>
  );
}

function Bet() {
  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold">Place a Bet</h2>
      <p className="mt-2">Choose a game and player to bet on:</p>
      <div className="mt-4 space-y-2">
        <button className="bg-purple-600 text-white px-4 py-2 rounded w-full">Bet on Player A (Fortnite)</button>
        <button className="bg-red-600 text-white px-4 py-2 rounded w-full">Bet on Player B (Call of Duty)</button>
        <button className="bg-green-600 text-white px-4 py-2 rounded w-full">Bet on Player C (Valorant)</button>
      </div>
      <Link to="/" className="block mt-6 text-blue-600 underline">Back to Home</Link>
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
      </Routes>
    </Router>
  );
}

export default App;
