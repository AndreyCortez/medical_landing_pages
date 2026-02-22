import { contactData } from "@/data/contact";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">{contactData.doctor.name}</h3>
            <p className="text-background/80 leading-relaxed">
              {contactData.doctor.description}
            </p>
            <div className="space-y-2">
              <p className="text-background/80">
                <strong>CRM:</strong> {contactData.doctor.crm}
              </p>
              <p className="text-background/80">
                <strong>RQE:</strong> {contactData.doctor.rqe}
              </p>
            </div>
          </div>

          {/* <div className="space-y-6">
            <h4 className="text-xl font-semibold">Links Rápidos</h4>
            <nav className="space-y-3">
              {["home", "sobre", "tratamentos", "tecnologias", "contato"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block text-background/80 hover:text-background transition-colors duration-300 capitalize"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div> */}

          <div className="space-y-6 md:col-start-3">
            <h4 className="text-xl font-semibold">Contato</h4>
            <div className="space-y-3 text-background/80">
              <p>{contactData.address.street}</p>
              <p>{contactData.address.neighborhood}, {contactData.address.city} - {contactData.address.state}</p>
              <p>CEP: {contactData.address.zipCode}</p>
              <p>{contactData.contact.phone}</p>
              <p>{contactData.contact.email}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-background/60">
            © 2024 {contactData.doctor.name}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;