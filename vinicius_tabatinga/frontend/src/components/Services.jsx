import { useNavigate } from 'react-router-dom';
import { useConfig } from '../context/ConfigContext';
import { services } from '../data/services';
import Carousel from './Carousel';
import Card from './Card';
import WhatsAppIcon from './WhatsAppIcon';

export default function Services() {
  const { config, whatsappUrl, trackConversion } = useConfig();
  const navigate = useNavigate();
  const ctaLabel = config.cta_label || 'Agendar';

  return (
    <section id="servicos" className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 md:flex md:items-end md:justify-between gap-8 text-center md:text-left">
          <div className="flex-1">
            <span className="text-brand-mid font-bold tracking-widest uppercase text-sm mb-3 block">
              Especialidades
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-brand-dark mb-4">
              Serviços e Tratamentos
            </h2>
            <p className="text-brand-dark/80 text-xl max-w-2xl font-medium leading-relaxed mx-auto md:mx-0">
              Cuidado ocular completo, estruturado para oferecer o melhor diagnóstico e tratamento.
            </p>
          </div>
        </div>

        <Carousel>
          {services.map((service) => (
            <Card
              key={service.title}
              image={service.image}
              title={service.title}
              description={service.description}
              icon={service.icon}
              onClick={() => navigate(`/servicos/${service.slug}`)}
              ctaLabel={ctaLabel}
              ctaPrimary={true}
              ctaIcon={WhatsAppIcon}
              onCtaClick={() => {
                window.open(whatsappUrl, '_blank');
                trackConversion(`servicos_${service.title}`);
              }}
            />
          ))}
        </Carousel>
      </div>
    </section>
  );
}
