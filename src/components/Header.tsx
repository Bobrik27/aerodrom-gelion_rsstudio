// src/components/Header.tsx

import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <h1 className="text-xl">Аэродром Гелион</h1>
        {/* Здесь будет навигация */}
      </div>
    </header>
  );
};

export default Header;