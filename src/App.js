import React from 'react';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import ThemeContextProvider from './context/themeContext';
import ThemeToggle from './components/ThemeToggle';
import AuthContextProvider from './context/AuthContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar></Navbar>
          <BookList></BookList>
          <ThemeToggle></ThemeToggle>
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
