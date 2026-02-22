// Importações necessárias, incluindo 'motion' do framer-motion
import React from "react";
import { Link } from "react-router-dom";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";

// Importações dos componentes do shadcn/ui
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Importação da sua função de dados
import { getPriorityTreatments } from "@/data/treatments";

// Variants para o container (que orquestra a animação dos filhos)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Atraso entre cada item filho
    },
  },
} as const;

// Variants para cada item individual (cada card de tratamento)
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 2.0, ease: "easeOut" },
  },
} as const;

const TreatmentsSection = () => {
  const treatments = getPriorityTreatments();

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <section id="tratamentos" className="py-12 bg-card pb-8 overflow-x-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Tratamentos Oferecidos
          </h2>
        </div>

        {/* O Carrossel agora é envolvido por um motion.div para orquestrar as animações */}
        <motion.div
          className="relative" // Adicionado para conter os botões de navegação
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Carousel
            plugins={[plugin.current]}
            className="w-full mx-auto"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-4">
              {treatments.map((treatment) => (
                <CarouselItem 
                  key={treatment.id} 
                  className="pl-4 basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/4"
                >
                  {/* O conteúdo de cada item é animado individualmente */}
                  <motion.div variants={itemVariants} className="p-1 h-full">
                    <Card className="overflow-hidden shadow-card border-0 bg-background hover:shadow-medical transition-all duration-300 group h-full flex flex-col">
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
                      
                      <div className="p-6 space-y-4 flex-grow flex flex-col">
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
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:inline-flex left-2" />
            <CarouselNext className="hidden sm:inline-flex right-2" />
          </Carousel>
        </motion.div>

        <div className="text-center mt-8">
          <Button asChild variant="outline" size="lg">
            <Link to="/tratamentos">
              Ver Todos os Tratamentos
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;
