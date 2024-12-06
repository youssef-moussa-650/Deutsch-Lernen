import React from 'react';
import { GraduationCap } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap size={32} className="text-blue-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-red-500 text-transparent bg-clip-text">
              Deutsch Lernen
            </span>
          </div>
          <nav>
            <ul className="flex items-center gap-8">
              <li>
                <a href="#courses" className="text-gray-700 hover:text-blue-600 transition-colors">
                  الكورسات
                </a>
              </li>
              <li>
                <a href="#schedule" className="text-gray-700 hover:text-blue-600 transition-colors">
                  المواعيد
                </a>
              </li>
              <li>
                <a href="#contact" className="bg-gradient-to-r from-blue-600 to-red-500 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-red-600 transition-colors">
                  احجز الآن
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}