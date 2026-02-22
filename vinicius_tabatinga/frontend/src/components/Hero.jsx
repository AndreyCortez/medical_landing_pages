import { Stethoscope, Award, Heart, GraduationCap } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { useConfig } from '../context/ConfigContext';

// Imagem placeholder, pode ser substituída posteriormente
const ABOUT_IMAGE = 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80';

const accomplishments = [
  { icon: GraduationCap, title: 'Formação de Excelência', desc: 'Graduação e especialização nas melhores instituições.' },
  { icon: Stethoscope, title: 'Especialista em Córnea', desc: 'Foco em diagnóstico preciso e cirurgias de alta complexidade.' },
  { icon: Heart, title: 'Atendimento Humanizado', desc: 'Cuidado centrado no bem-estar e na clareza para o paciente.' },
  { icon: Award, title: 'Membro do CBO', desc: 'Atuação certificada pelo Conselho Brasileiro de Oftalmologia.' },
];

export default function Hero() {
  const { config, whatsappUrl, trackConversion } = useConfig();
  const ctaLabel = config.cta_label || 'Agendar Consulta';

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-brand-mid overflow-hidden">
      {/* Background decoration with watermark logo */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-dark/5 rounded-bl-[100px] -z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl opacity-5 pointer-events-none -z-0 flex items-center justify-center">
        <img
          src="/assets/watermark.png"
          alt=""
          className="w-[120%] min-w-[800px] object-contain rotate-[-5deg]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Coluna Esquerda: Imagem */}
          <div className="w-full lg:w-5/12 relative">
            <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl relative z-10 bg-brand-dark/10">
              <img
                src={ABOUT_IMAGE}
                alt="Dr. Vinicius Tabatinga"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Elemento de fundo decorativo da imagem */}
            <div className="absolute top-8 -left-8 w-full h-full bg-brand-dark/10 rounded-[2.5rem] -z-10 hidden md:block"></div>
            <div className="absolute -bottom-8 -right-8 w-full h-full border-4 border-brand-dark/20 rounded-[2.5rem] -z-10 hidden md:block"></div>
          </div>

          {/* Coluna Direita: Conteúdo e Qualificações */}
          <div className="w-full lg:w-7/12">
            <span className="inline-block bg-brand-dark/10 text-brand-dark px-5 py-2 rounded-full uppercase tracking-widest text-sm font-bold mb-6">
              {config.site_name || 'Dr. Vinicius Tabatinga'}
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-brand-dark leading-tight mb-6">
              Cuidado Completo e Precisão no Diagnóstico
            </h1>
            <p className="text-brand-dark/90 text-xl font-medium leading-relaxed mb-10 max-w-2xl">
              Oftalmologista dedicado aos melhores cuidados para a saúde dos seus olhos.
              Aliando tecnologia avançada a uma abordagem humana e empática.
            </p>

            {/* Grid de Qualificações */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {accomplishments.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-white/40 backdrop-blur-sm p-3 rounded-2xl shadow-sm border border-white/20 flex-shrink-0">
                      <Icon className="w-6 h-6 text-brand-dark" strokeWidth={2.5} />
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-dark text-lg mb-1">{item.title}</h3>
                      <p className="text-sm text-brand-dark/80 leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Botões CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackConversion('hero')}
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#20bd5a] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <WhatsAppIcon size={28} className="text-white" />
                {ctaLabel}
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 bg-brand-dark text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-dark/90 transition-all shadow-md hover:shadow-lg hover:-translate-y-1"
              >
                Ver Tratamentos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
