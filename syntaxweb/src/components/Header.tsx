import { useState } from 'react';
import { navLinks } from '../data/content';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-syntax-black/90 backdrop-blur-md border-b-4 border-syntax-purple">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between lg:justify-start lg:gap-12">
        
        {/* Logo y subtítulo */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="inline-block bg-syntax-purple text-white font-black px-4 py-1 text-xl transform -skew-x-12 shadow-md">
            <span className="block transform skew-x-12">
              <i className="fa-solid fa-masks-theater mr-1" /> SOCIEDAD SYNTAX
            </span>
          </div>
          <span className="hidden sm:inline text-xs font-bold tracking-widest text-zinc-400 uppercase">
            Hello World
          </span>
        </div>

        {/* Navegación de escritorio: se alinea con un espacio fijo (gap) en pantallas grandes */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-black uppercase tracking-wider text-zinc-300 overflow-x-auto">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className="hover:text-syntax-purple transition duration-200 whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Botón de menú móvil (se empuja a la derecha en pantallas chicas con ml-auto) */}
        <button
          type="button"
          className="lg:hidden text-syntax-purple text-2xl p-1 focus:outline-none focus:ring-2 focus:ring-syntax-purple rounded ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
        >
          <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'}`} />
        </button>
      </div>

      {/* Menú desplegable móvil */}
      {menuOpen && (
        <div className="lg:hidden bg-syntax-charcoal border-t border-zinc-800 px-4 py-4 space-y-3 text-sm font-bold uppercase tracking-wider shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block hover:text-syntax-purple py-1 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}