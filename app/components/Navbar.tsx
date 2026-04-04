'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShieldCheck, Phone, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenModal: () => void;
}

export default function Navbar({ onOpenModal }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/behavior', label: 'Behavior Mod' },
    { href: '/obedience', label: 'Obedience' },
    { href: '/community', label: 'Axiom Cares', accent: 'blue' as const },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header
      className="fixed w-full top-0 z-50 bg-[#050505]/95 backdrop-blur-md border-b border-[#1A2030] transition-all duration-300"
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 focus-visible:outline-[#FF5E00]"
          aria-label="Axiom Canine — Home"
        >
          <ShieldCheck className="text-[#7A8B66] w-8 h-8" aria-hidden="true" />
          <span className="font-oswald text-2xl font-bold tracking-widest text-white uppercase mt-1">
            Axiom <span className="text-[#FF5E00]">Canine</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center mt-1" aria-label="Main navigation">
          {navLinks.map(({ href, label, accent }) => {
            const active = isActive(href);
            const activeColor = accent === 'blue' ? '[#5B8FA8]' : '[#FF5E00]';
            const hoverColor = accent === 'blue' ? 'hover:text-[#5B8FA8] hover:border-[#5B8FA8]' : 'hover:text-[#FF5E00] hover:border-[#FF5E00]';
            return (
              <Link
                key={href}
                href={href}
                className={`text-sm font-bold uppercase tracking-widest pb-1 transition-colors border-b-2 ${
                  active
                    ? `text-${activeColor} border-${activeColor}`
                    : `text-[#C5C6C7] border-transparent ${hoverColor}`
                }`}
                aria-current={active ? 'page' : undefined}
              >
                {label}
              </Link>
            );
          })}

          <a
            href="tel:9044587561"
            className="ml-2 text-sm font-bold uppercase tracking-widest text-[#FF5E00] border border-[#FF5E00] px-5 py-2 hover:bg-[#FF5E00] hover:text-[#050505] transition-colors flex items-center gap-2"
            aria-label="Call Axiom Canine at (904) 458-7561"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            (904) 458-7561
          </a>
          <button
            onClick={onOpenModal}
            className="ml-6 text-sm font-bold uppercase tracking-widest text-[#050505] bg-[#FF5E00] px-5 py-2 hover:bg-orange-500 transition-colors border border-[#FF5E00] shadow-[0_0_15px_rgba(255,94,0,0.2)]"
            aria-label="Open free assessment form"
          >
            Get Assessed
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#C5C6C7] hover:text-[#FF5E00] transition-colors p-2"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? (
            <X className="w-8 h-8" aria-hidden="true" />
          ) : (
            <Menu className="w-8 h-8" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-[#0B0C10] border-b-2 border-[#FF5E00] absolute w-full left-0 flex flex-col shadow-2xl"
          role="navigation"
          aria-label="Mobile navigation"
        >
          {navLinks.map(({ href, label, accent }) => {
            const active = isActive(href);
            const accentClass = accent === 'blue'
              ? active ? 'text-[#5B8FA8] bg-[#1A2030] border-l-[#5B8FA8]' : 'border-l-transparent'
              : active ? 'text-[#FF5E00] bg-[#1A2030] border-l-[#FF5E00]' : 'border-l-transparent';
            return (
              <Link
                key={href}
                href={href}
                onClick={closeMenu}
                className={`p-5 text-center font-oswald text-xl uppercase tracking-widest border-b border-[#050505] transition-colors text-[#C5C6C7] border-l-4 ${accentClass}`}
                aria-current={active ? 'page' : undefined}
              >
                {label}
              </Link>
            );
          })}
          <a
            href="tel:9044587561"
            className="p-5 text-center font-oswald text-xl uppercase tracking-widest border-b border-[#050505] text-[#FF5E00] flex items-center justify-center gap-3"
            onClick={closeMenu}
            aria-label="Call Axiom Canine at (904) 458-7561"
          >
            <Phone className="w-5 h-5" aria-hidden="true" />
            (904) 458-7561
          </a>
          <button
            onClick={() => { onOpenModal(); closeMenu(); }}
            className="p-5 text-center font-oswald text-xl uppercase tracking-widest text-[#050505] bg-[#FF5E00]"
            aria-label="Open free assessment form"
          >
            Free Assessment
          </button>
        </div>
      )}
    </header>
  );
}
