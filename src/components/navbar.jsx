"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../app/ui/navbar-menu";
import { cn } from "@/lib/utils";

export default function NavbarDemo() {
  return (
    (<div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>)
  );
}

function Navbar({
  className
}) {
  const [active, setActive] = useState(null);
  return (
    (<div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={false} item="Home">
    
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Limited Edition & Collabs"
              href="/Collabs"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="High-demand, exclusive sneakers like Nike x Off-White and Yeezys." />
            <ProductItem
              title="Retro & Vintage"
              href="/RetroVintage"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Classic styles like Nike Air Max, Adidas Superstar, and Converse." />
            <ProductItem
              title="Streetwear "
              href="/Streetwear"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Bold dad shoes like Balenciaga Triple S and New Balance 550s." />
            <ProductItem
              title="Sport & Lifestyle "
              href="Sport"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="SVersatile athletic shoes like Nike Air Force 1s and Adidas UltraBoosts." />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="About">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/Team">Team</HoveredLink>
            <HoveredLink href="/Contact">Contact</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>)
  );
}
