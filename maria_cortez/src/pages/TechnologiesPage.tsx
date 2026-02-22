import React, { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { getAllTechnologiesSorted } from "@/data/technologies";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import clinicTechImage from "@/assets/clinic-technology.jpg";

const TechnologiesPage = () => {
  const technologies = getAllTechnologiesSorted();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAgendarVisita = () => {
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById("contato");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24">
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-foreground mb-6">
                Tecnologias Avançadas
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Conheça todos os equipamentos e tecnologias de última geração 
                que utilizamos para oferecer os melhores resultados em dermatologia.
              </p>
            </div>

            {/* <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-foreground">
                  Equipamentos de Última Geração
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Nossa clínica está equipada com as mais modernas tecnologias em dermatologia, 
                  garantindo tratamentos mais eficazes, seguros e com resultados superiores. 
                  Cada equipamento é operado por profissionais especializados e certificados.
                </p>
                <div className="bg-gradient-accent p-6 rounded-2xl">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    Compromisso com a Excelência
                  </h3>
                  <p className="text-muted-foreground">
                    Investimos constantemente em tecnologia e capacitação para 
                    garantir que nossos pacientes tenham acesso aos melhores 
                    tratamentos disponíveis no mercado.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-hero rounded-3xl blur-2xl opacity-20"></div>
                <img
                  src={clinicTechImage}
                  alt="Tecnologias da clínica"
                  className="relative rounded-3xl shadow-medical w-full"
                />
              </div>
            </div> */}

            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {technologies.map((tech, index) => (
                <Card key={tech.id} className="overflow-hidden shadow-card border-0 bg-medical-light hover:shadow-medical transition-all duration-300 group">
                  {tech.image && (
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={tech.image}
                        alt={tech.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                  )}
                  
                  <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {tech.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {tech.description}
                    </p>
                  </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-16 text-center">
              <div className="bg-card p-8 rounded-2xl max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Quer conhecer mais sobre nossas tecnologias?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Agende uma consulta e conheça pessoalmente nossos equipamentos 
                  e como eles podem ajudar no seu tratamento.
                </p>
                <Button 
                  onClick={handleAgendarVisita}
                  className="bg-gradient-hero text-primary-foreground hover:opacity-90"
                >
                  Agendar Visita
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TechnologiesPage;