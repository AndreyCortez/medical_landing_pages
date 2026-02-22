import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { useConfig } from '../context/ConfigContext';

const navLinks = [
  { hash: 'hero', label: 'Início' },
  { hash: 'sobre', label: 'Sobre' },
  { hash: 'servicos', label: 'Serviços' },
  { hash: 'contato', label: 'Contato' },
];

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Footer() {
  const { config, whatsappUrl, trackConversion } = useConfig();
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const handleNavClick = (e, hash) => {
    e.preventDefault();
    if (hash === 'sobre') {
      if (isHome) {
        window.dispatchEvent(new CustomEvent('heroShowSlide', { detail: 1 }));
        scrollToSection('hero');
      } else {
        navigate('/', { state: { scrollTo: 'sobre' } });
      }
    } else if (isHome) {
      scrollToSection(hash);
    } else {
      navigate('/', { state: { scrollTo: hash } });
    }
  };

  return (
    <footer className="relative overflow-hidden">
      <div className="bg-brand-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Link to="/" className="flex-shrink-0">
              <img
                src="/assets/logo-header.png"
                alt={`${config.site_name} - Oftalmologista`}
                className="h-10 w-auto object-contain invert opacity-95 hover:opacity-100 transition-opacity"
              />
            </Link>
            <nav className="flex flex-wrap justify-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.hash}
                  href={`/#${link.hash}`}
                  onClick={(e) => handleNavClick(e, link.hash)}
                  className="group flex items-center gap-2 text-white/70 hover:text-white transition-colors py-1 font-medium tracking-wide"
                >
                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" strokeWidth={2.5} />
                  {link.label}
                </a>
              ))}
            </nav>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackConversion('footer')}
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-[#20bd5a] transition-colors shadow-md"
            >
              <WhatsAppIcon size={18} />
              {config.cta_label || 'Agendar Consulta'}
            </a>
          </div>
        </div>
        <div className="border-t border-brand-mid/50 py-4 mt-2">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-brand-mid text-sm font-medium">
              © {new Date().getFullYear()} {config.site_name}. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
