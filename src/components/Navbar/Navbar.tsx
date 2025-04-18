"use client";

import { Button } from "../ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ListItem } from "../ui/list-item";
import { Title } from "../ui/title";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen((p) => !p);
  };

  return (
    <header className="flex items-center w-full h-[60px] md:h-[100px] relative z-50 bg-white">
      <div className="w-full max-w-[1920px] mx-auto layout-x-padding flex justify-between items-center">
        <Title size={"sm"}>SunPage</Title>
        <nav className="hidden md:flex items-center gap-12 text-gray">
          <ul className="flex gap-12">
            <ListItem>O nas</ListItem>
            <ListItem>Blog</ListItem>
            <ListItem>Kontakt</ListItem>
          </ul>
          <Button>Porozmawiajmy</Button>
        </nav>
        <div className="md:hidden">
          <button onClick={handleToggleMenu}>
            <Menu size={28} />
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className="fixed inset-0 bg-white flex flex-col items-center justify-center gap-12 text-xl font-medium z-40">
          <div className="absolute top-8 right-8">
            <X size={28} onClick={handleToggleMenu} />
          </div>
          <ul className="flex flex-col items-center gap-8">
            <ListItem onClick={() => setIsOpen(false)}>O nas</ListItem>
            <ListItem onClick={() => setIsOpen(false)}>Blog</ListItem>
            <ListItem onClick={() => setIsOpen(false)}>Kontakt</ListItem>
          </ul>
          <Button onClick={() => setIsOpen(false)}>Porozmawiajmy</Button>
        </nav>
      )}
    </header>
  );
};
