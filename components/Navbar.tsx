
import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

interface NavbarProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  onHomeNavigate?: () => void;
  isAtHome?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme, onHomeNavigate, isAtHome }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      try {
        setIsScrolled(window.scrollY > 20);
      } catch (err) {
        console.error('Error in scroll handler:', err);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Chat', href: '#chat' },
    { name: 'Contact', href: '#contact' },
  ];

  /**
   * Enhanced link handler for cross-view support.
   * If not at home, it switches view. The hash in href handles the scroll jump.
   */
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    try {
      // If we're on a case study, we need to return to home first
      if (!isAtHome && onHomeNavigate) {
        onHomeNavigate();
      }
      
      // Close mobile menu
      setMobileMenuOpen(false);
    } catch (error) {
      console.error('Navigation error:', error);
    }
  };

  const handleThemeToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleTheme();
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled || mobileMenuOpen ? 'bg-white/95 dark:bg-dark/95 backdrop-blur-md py-3 sm:py-4 border-b border-black/5 dark:border-white/10 shadow-sm' : 'bg-transparent py-5 sm:py-8'}`}>
      <div className="container mx-auto px-5 sm:px-8 flex justify-between items-center relative z-50">
        <a 
          href="#" 
          onClick={handleLinkClick}
          className="text-xl sm:text-2xl font-serif font-bold tracking-tighter hover:text-accent transition-colors text-gray-900 dark:text-white relative z-50 group"
        >
          AJ<span className="text-accent group-hover:animate-pulse">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
              className="text-[11px] lg:text-xs font-bold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 transition-all duration-300 hover:text-accent dark:hover:text-white"
            >
              {link.name}
            </a>
          ))}
          
          <button 
            onClick={handleThemeToggle}
            className="p-2.5 rounded-full bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10 transition-all active:scale-90"
            aria-label="Toggle Dark Mode"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>

        {/* Mobile Toggle Icons */}
        <div className="md:hidden flex items-center gap-2 relative z-50">
          <button 
            onClick={handleThemeToggle}
            className="p-3 rounded-full bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 active:scale-90 transition-transform"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button 
            className="text-gray-900 dark:text-white p-2.5 rounded-full hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown Overlay */}
      <div className={`md:hidden fixed inset-0 w-full h-screen bg-white dark:bg-dark transition-all duration-500 ease-in-out transform ${mobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 px-6 text-center">
          {navLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
              className={`text-3xl font-serif font-bold text-gray-900 dark:text-white hover:text-accent transition-colors transform ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {link.name}
            </a>
          ))}
          <div className={`pt-12 border-t border-black/5 dark:border-white/10 w-full transform ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: '400ms' }}>
             <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">Let's Connect</p>
             <a href="mailto:akshay3rishi@gmail.com" className="text-gray-900 dark:text-white font-medium hover:text-accent transition-colors">akshay3rishi@gmail.com</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
