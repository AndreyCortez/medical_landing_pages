import React, { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { getAllTreatmentsSorted } from "@/data/treatments";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TreatmentsPage = () => {
  const treatments = getAllTreatmentsSorted();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAgendarConsulta = () => {
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
        <section className="py-24 bg-gradient-medical">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-foreground mb-6">
                Todos os Tratamentos
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Conheça toda nossa gama de tratamentos dermatológicos especializados, 
                combinando expertise médica com as mais avançadas tecnologias.
              </p>
            </div>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {treatments.map((treatment, index) => (
                <Card key={treatment.id} className="overflow-hidden shadow-card border-0 bg-background hover:shadow-medical transition-all duration-300 group">
                  {treatment.image && (
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={treatment.image}
                        alt={treatment.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                  )}
                  
                  <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {treatment.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {treatment.description}
                    </p>
                  </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-16 text-center">
              <div className="bg-card p-8 rounded-2xl max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Precisa de um tratamento específico?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Entre em contato conosco para uma consulta personalizada e 
                  descubra qual tratamento é ideal para você.
                </p>
                <Button 
                  onClick={handleAgendarConsulta}
                  className="bg-gradient-hero text-primary-foreground hover:opacity-90"
                >
                  Agendar Consulta
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

export default TreatmentsPage;