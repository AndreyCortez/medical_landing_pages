import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { useConfig } from '../context/ConfigContext';
import { getServiceBySlug } from '../data/services';

export default function ServicePage() {
  const { slug } = useParams();
  const { config, whatsappUrl, trackConversion } = useConfig();
  const service = getServiceBySlug(slug);

  useEffect(() => {
    if (service) {
      document.title = `${service.title} | Dr. Vinicius Tabatinga`;
    }
  }, [service]);

  if (!service) {
    return <Navigate to="/#servicos" replace />;
  }

  const Icon = service.icon;

  return (
    <article className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/#servicos"
          className="group inline-flex items-center gap-2 text-medical-700 hover:text-medical-600 mb-10 font-medium link-hover-underline"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Voltar aos Serviços
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-medical-100 flex items-center justify-center">
              <Icon className="w-8 h-8 text-medical-600" strokeWidth={1.5} />
            </div>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-medical-900 leading-tight">
              {service.title}
            </h1>
          </div>
          <p className="text-medical-600 text-lg md:text-xl max-w-2xl">
            {service.description}
          </p>
        </header>

        <div className="rounded-2xl overflow-hidden mb-12 shadow-soft-lg border border-medical-100">
          <img
            src={service.image}
            alt={service.title}
            className="w-full aspect-video object-cover"
          />
        </div>

        <div className="prose prose-lg prose-blue max-w-none prose-headings:font-heading prose-headings:text-medical-900 prose-p:text-medical-600 prose-p:leading-relaxed mb-12">
          <p className="text-lg">{service.longDescription}</p>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackConversion(`servico_${service.slug}`)}
          className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-[#20bd5a] transition-colors shadow-lg"
        >
          <WhatsAppIcon size={24} />
          {config.cta_label || 'Agendar Consulta'}
        </a>
      </div>
    </article>
  );
}
