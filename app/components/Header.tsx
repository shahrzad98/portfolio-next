'use client';
import React from 'react';
import { Button } from '@mantine/core';
import { Search } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-[#0f0f2f] p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-white  text-xl">
          <span>3D</span>
          <span>WEB</span>
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-6">
          {/* Menu with Dropdown */}
          <button className="text-white hover:text-purple-400 flex items-center space-x-1 mx-2">
            <span>خانه</span>
          </button>

          <Link href="#about" className="text-white hover:text-purple-400">
            درباره ما
          </Link>

          <Link href="#team" className="text-white hover:text-purple-400">
            متخصصین
          </Link>
          <Link href="#contact" className="text-white hover:text-purple-400">
            تماس
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          {/* Search Icon */}
          <Search className="text-white w-5 h-5 cursor-pointer ml-6" />

          {/* Join Now Button */}
          <Button className="bg-purple500 rounded-xl h-12 ">
            🚀 مشاوره رایگان بگیرید
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
