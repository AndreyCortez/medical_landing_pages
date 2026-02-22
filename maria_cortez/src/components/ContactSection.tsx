import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { contactData } from "@/data/contact";
import ReactGA from 'react-ga4';

// Ícones para os botões (SVG)
const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
);

const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </svg>
);


const ContactSection = () => {
  return (
    <section id="contato" className="bg-background py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Agende sua consulta ou tire suas dúvidas. Estamos aqui para 
            cuidar da saúde e beleza da sua pele.
          </p>
        </div>

        {/* Layout simplificado para 2 colunas: Contato e Localização */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-stretch">
          
          {/* --- CARD DE CONTATO UNIFICADO --- */}
          <Card className="p-8 shadow-card border-0 bg-card flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
              Canais de Atendimento
            </h3>
            <p className="text-muted-foreground mb-8 text-center">
              Escolha a melhor forma de falar conosco.
            </p>
            
            {/* Botões de Ação Rápida */}
            <div className="space-y-4">
              <Button asChild size="lg" className="w-full bg-gradient-hero hover:shadow-medical transition-all duration-300 text-lg py-6 flex items-center gap-3">
                <a 
                  href={`https://wa.me/${contactData.contact.phoneNumber}?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => ReactGA.event({ category: "Contact", action: "Click", label: "WhatsApp Button" })}
                >
                  <WhatsAppIcon />
                  Chamar no WhatsApp
                </a>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg py-6 flex items-center gap-3">
                 <a 
                  href={contactData.socialMedia.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => ReactGA.event({ category: "Contact", action: "Click", label: "Instagram Button" })}
                >
                  <InstagramIcon />
                  Ver no Instagram
                </a>
              </Button>
            </div>

            {/* Divisor Visual */}
            <div className="flex items-center my-8">
                <div className="flex-grow border-t border-border"></div>
                <span className="flex-shrink mx-4 text-muted-foreground text-sm">OU</span>
                <div className="flex-grow border-t border-border"></div>
            </div>

            {/* Informações de Contato Clicáveis */}
            <div className="space-y-6 text-center">
                <a 
                    href={`tel:${contactData.contact.phoneNumber}`}
                    onClick={() => ReactGA.event({ category: "Contact", action: "Click", label: "Phone Link" })}
                    className="flex flex-col items-center group text-muted-foreground hover:text-primary transition-colors"
                >
                    <div className="flex items-center gap-3">
                        <PhoneIcon />
                        <span className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">{contactData.contact.phone}</span>
                    </div>
                    <p className="text-sm">{contactData.contact.workingHours}</p>
                </a>

                <a 
                    href={`mailto:${contactData.contact.email}`}
                    onClick={() => ReactGA.event({ category: "Contact", action: "Click", label: "Email Link" })}
                    className="flex flex-col items-center group text-muted-foreground hover:text-primary transition-colors"
                >
                    <div className="flex items-center gap-3">
                        <MailIcon />
                        <span className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">{contactData.contact.email}</span>
                    </div>
                    <p className="text-sm">{contactData.contact.responseTime}</p>
                </a>
            </div>
          </Card>

          {/* Card de Localização (permanece o mesmo) */}
          <Card className="p-0 shadow-card border-0 bg-card overflow-hidden flex flex-col">
            <div className="p-6 pb-0">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Nossa Localização
              </h3>
            </div>
            <div className="h-full w-full flex-grow">
              <iframe 
                src={contactData.googleServices.mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }} // Aumentei a altura mínima
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Clínica"
              />
            </div>
            <div className="p-6">
              <p className="text-muted-foreground">
                {contactData.address.street}<br />
                {contactData.address.neighborhood}, {contactData.address.city} - {contactData.address.state}<br />
                CEP: {contactData.address.zipCode}
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;