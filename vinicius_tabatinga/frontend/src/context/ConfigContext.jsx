import { createContext, useContext, useState, useEffect } from 'react';

const DEFAULT_CONFIG = {
  site_name: 'Dr. Vinicius Tabatinga',
  site_title: 'Dr. Vinicius Tabatinga | Oftalmologista',
  site_description: 'Oftalmologista. Agende sua consulta.',
  cta_label: 'Agendar Consulta',
  google_analytics_id: '',
  contact: {
    whatsapp_number: '5511999999999',
    whatsapp_message: 'Olá Dr. Vinicius, gostaria de agendar uma consulta.',
    email: 'contato@viniciustabatinga.com.br',
    phone_display: '(11) 99999-9999',
    address: 'Tabatinga, SP',
    hours: 'Segunda a Sexta-feira: 8h às 18h',
    map_embed_url: 'https://www.google.com/maps?q=Tabatinga,SP,Brazil&output=embed',
  },
};

const ConfigContext = createContext(DEFAULT_CONFIG);

function loadGoogleAnalytics(measurementId) {
  if (!measurementId || typeof window === 'undefined') return;
  if (document.querySelector('script[src*="googletagmanager.com/gtag/js"]')) return;

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', measurementId, { send_page_view: true });

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);
}

export function ConfigProvider({ children }) {
  const [config, setConfig] = useState(DEFAULT_CONFIG);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch('/api/config')
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data)
          setConfig((prev) => ({
            ...prev,
            ...data,
            contact: { ...prev.contact, ...(data.contact || {}) },
          }));
      })
      .catch(() => {})
      .finally(() => setLoaded(true));
  }, []);

  useEffect(() => {
    const gaId = config.google_analytics_id?.trim();
    if (gaId && loaded) loadGoogleAnalytics(gaId);
  }, [config.google_analytics_id, loaded]);

  const contact = config.contact || DEFAULT_CONFIG.contact;
  const whatsappUrl = `https://wa.me/${contact.whatsapp_number}?text=${encodeURIComponent(contact.whatsapp_message)}`;

  const trackConversion = (location = 'unknown') => {
    const gaId = config.google_analytics_id?.trim();
    if (!gaId || typeof window?.gtag !== 'function') return;
    window.gtag('event', 'generate_lead', {
      method: 'whatsapp',
      link_location: location,
      currency: 'BRL',
      value: 0,
    });
    window.gtag('event', 'whatsapp_click', {
      link_location: location,
    });
  };

  return (
    <ConfigContext.Provider value={{ config, contact, whatsappUrl, loaded, trackConversion }}>
      {children}
    </ConfigContext.Provider>
  );
}

export function useConfig() {
  const ctx = useContext(ConfigContext);
  if (!ctx) throw new Error('useConfig must be used within ConfigProvider');
  return ctx;
}
