'use client';
import React from 'react';
import { Button, Menu } from '@mantine/core';
import { Search, ChevronDown } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-[#0f0f2f] p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-white font-conthrax text-xl">
          <span>3D</span>
          <span>WEB</span>
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-6">
          {/* Menu with Dropdown */}
          <Menu withArrow shadow="md" width={200}>
            <Menu.Target>
              <button className="text-white hover:text-purple-400 flex items-center space-x-1">
                <span>Home</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item>Option 1</Menu.Item>
              <Menu.Item>Option 2</Menu.Item>
              <Menu.Item>Option 3</Menu.Item>
            </Menu.Dropdown>
          </Menu>

          <Menu withArrow shadow="md" width={200}>
            <Menu.Target>
              <button className="text-white hover:text-purple-400 flex items-center space-x-1">
                <span>Explore</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item>Explore Option 1</Menu.Item>
              <Menu.Item>Explore Option 2</Menu.Item>
              <Menu.Item>Explore Option 3</Menu.Item>
            </Menu.Dropdown>
          </Menu>

          <a href="#about" className="text-white hover:text-purple-400">
            About
          </a>
          <a href="#roadmap" className="text-purple-500 hover:text-purple-400">
            RoadMap
          </a>
          <a href="#team" className="text-white hover:text-purple-400">
            Team
          </a>
          <a href="#contact" className="text-white hover:text-purple-400">
            Contact
          </a>
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
