import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useConfig } from '../context/ConfigContext';

const navLinks = [
  { href: '/', label: 'Início', id: 'hero' },
  { href: '/#sobre', label: 'Sobre', id: 'sobre' },
  { href: '/#servicos', label: 'Serviços', id: 'servicos' },
  { href: '/#blog', label: 'Blog', id: 'blog' },
  { href: '/#contato', label: 'Contato', id: 'contato' },
];

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export default function Header() {
  const { config } = useConfig();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, link) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (link.id === 'sobre') {
      if (isHome) {
        window.dispatchEvent(new CustomEvent('heroShowSlide', { detail: 1 }));
        scrollToSection('hero');
      } else {
        navigate('/', { state: { scrollTo: 'sobre' } });
      }
    } else if (isHome) {
      scrollToSection(link.id);
    } else {
      navigate('/', { state: { scrollTo: link.id } });
    }
  };

  const headerVisible = scrolled
    ? 'bg-brand-dark shadow-xl transition-colors duration-300'
    : 'bg-brand-dark shadow-sm transition-colors duration-300';

  const textClass = 'text-brand-light hover:text-white/80';
  const logoClass = 'h-11 brightness-0 invert';

  return (
    <header className={`fixed top-0 w-full z-50 ${headerVisible}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <Link to="/" className="flex items-center gap-2 flex-shrink-0 group">
            <img
              src="/assets/logo-header.png"
              alt={`${config.site_name} - Oftalmologista`}
              className={`${logoClass} w-auto object-contain flex-shrink-0`}
            />
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link)}
                className={`text-[15px] font-bold tracking-widest uppercase transition-colors ${textClass}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-3 rounded-xl transition-colors text-brand-light hover:bg-white/10`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className={`md:hidden absolute top-full left-0 w-full shadow-2xl bg-brand-dark`}>
            <div className="flex flex-col py-6 px-6 space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`font-bold uppercase tracking-widest text-lg px-4 py-3 rounded-xl text-brand-light hover:bg-white/5`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
