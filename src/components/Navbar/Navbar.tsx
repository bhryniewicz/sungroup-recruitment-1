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
    <header className="flex justify-center w-full h-[60px] md:h-[100px] relative z-50 bg-white">
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
        <div className="md:hidden flex justify-center items-center">
          <button onClick={handleToggleMenu} className="z-100">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className="fixed inset-0 bg-white flex flex-col items-center justify-center gap-12 text-xl font-medium z-40">
          <ul className="flex flex-col items-center gap-8">
            <ListItem onClick={handleToggleMenu}>O nas</ListItem>
            <ListItem onClick={handleToggleMenu}>Blog</ListItem>
            <ListItem onClick={handleToggleMenu}>Kontakt</ListItem>
          </ul>
          <Button onClick={() => setIsOpen(false)}>Porozmawiajmy</Button>
        </nav>
      )}
    </header>
  );
};
