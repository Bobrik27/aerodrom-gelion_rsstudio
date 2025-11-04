// src/components/Header.tsx

import React from 'react';
import Link from 'next/link';

// Массив с нашими будущими страницами для удобства
const navLinks = [
  { name: 'Главная', href: '/' },
  { name: 'Услуги', href: '/services' },
  { name: 'Блог', href: '/blog' },
  { name: 'О нас', href: '/about' },
  { name: 'Контакты', href: '/contact' },
];

const Header = () => {
  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Логотип/Название сайта */}
        <Link href="/" className="text-xl font-bold hover:text-gray-300 transition-colors">
          Аэродром Гелион
        </Link>

        {/* Навигационное меню */}
        <nav>
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="hover:text-gray-300 transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;