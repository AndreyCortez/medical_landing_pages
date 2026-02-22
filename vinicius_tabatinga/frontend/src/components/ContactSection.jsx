import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { useConfig } from '../context/ConfigContext';

export default function ContactSection() {
  const { config, contact, whatsappUrl, trackConversion } = useConfig();
  const mapUrl = contact.map_embed_url || 'https://www.google.com/maps?q=Tabatinga,SP,Brazil&output=embed';

  return (
    <section id="contato" className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-mid font-bold tracking-widest uppercase text-sm mb-3 block">
            Atendimento
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-brand-dark mb-6">
            Entre em Contato
          </h2>
          <p className="text-brand-dark/80 text-xl max-w-3xl mx-auto font-medium leading-relaxed">
            Nossa equipe está pronta para receber você. Agende sua consulta ou visite nossa clínica.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start bg-brand-light rounded-[2.5rem] p-4 sm:p-6 lg:p-8 shadow-2xl">
          {/* Mapa */}
          <div className="w-full lg:w-3/5 rounded-[2rem] overflow-hidden h-[400px] lg:h-[600px] bg-brand-mid/10 relative group shadow-inner">
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da clínica"
              className="w-full h-full transition-all duration-700"
            />
          </div>

          {/* Infos de contato */}
          <div className="w-full lg:w-2/5 flex flex-col h-full bg-brand-dark p-8 sm:p-10 rounded-[2rem] shadow-2xl">
            <h3 className="font-heading text-3xl text-brand-light mb-2">Nossa Clínica</h3>
            <p className="text-brand-light/80 mb-10 text-lg">Informações disponíveis para o seu agendamento.</p>

            <ul className="space-y-10 flex-1">
              <li className="flex items-start gap-6">
                <div className="bg-white/10 p-4 rounded-xl">
                  <MapPin className="text-brand-light flex-shrink-0" size={28} strokeWidth={2.5} />
                </div>
                <div>
                  <p className="font-bold text-white/70 text-sm uppercase tracking-widest">Endereço</p>
                  <p className="text-brand-light mt-2 font-medium leading-relaxed text-lg">{contact.address}</p>
                </div>
              </li>
              <li className="flex items-start gap-6">
                <div className="bg-white/10 p-4 rounded-xl">
                  <Clock className="text-brand-light flex-shrink-0" size={28} strokeWidth={2.5} />
                </div>
                <div>
                  <p className="font-bold text-white/70 text-sm uppercase tracking-widest">Horário</p>
                  <p className="text-brand-light mt-2 font-medium text-lg">{contact.hours}</p>
                </div>
              </li>
              <li className="flex items-start gap-6">
                <div className="bg-white/10 p-4 rounded-xl">
                  <Phone className="text-brand-light flex-shrink-0" size={28} strokeWidth={2.5} />
                </div>
                <div>
                  <p className="font-bold text-white/70 text-sm uppercase tracking-widest">Telefone</p>
                  <a href={`tel:${contact.whatsapp_number}`} className="text-brand-light mt-2 hover:text-white/80 font-bold transition-colors block text-2xl">
                    {contact.phone_display}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-6">
                <div className="bg-white/10 p-4 rounded-xl">
                  <Mail className="text-brand-light flex-shrink-0" size={28} strokeWidth={2.5} />
                </div>
                <div>
                  <p className="font-bold text-white/70 text-sm uppercase tracking-widest">E-mail</p>
                  <a href={`mailto:${contact.email}`} className="text-brand-light mt-2 hover:text-brand-light/80 transition-colors break-all font-medium block text-lg">
                    {contact.email}
                  </a>
                </div>
              </li>
            </ul>

            <div className="mt-12">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackConversion('contato_cta')}
                className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-5 rounded-xl font-bold text-xl hover:bg-[#20bd5a] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 w-full"
              >
                <WhatsAppIcon size={28} className="text-white" />
                {config.cta_label || 'Agendar pelo WhatsApp'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
