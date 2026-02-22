// 1. Importações para o carrossel, autoplay e framer-motion
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { getPriorityTechnologies } from "@/data/technologies";

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

// Variants para cada item individual (cada card de tecnologia)
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 2.0, ease: "easeOut" },
  },
} as const;

const TechnologySection = () => {
  const technologies = getPriorityTechnologies();

  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <section id="tecnologias" className="py-8 bg-background overflow-x-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold text-foreground">
              Tecnologias Usadas
            </h2>
          </div>
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
              {technologies.map((tech) => (
                <CarouselItem
                  key={tech.id}
                  className="pl-4 basis-full sm:basis-1/2 lg:basis-1/4"
                >
                  {/* O conteúdo de cada item é animado individualmente */}
                  <motion.div variants={itemVariants} className="p-1 h-full">
                    <Card className="overflow-hidden shadow-card border-0 bg-card hover:shadow-medical transition-all duration-300 group h-full flex flex-col">
                      {tech.image && (
                        <div className="relative h-40 overflow-hidden">
                          <img
                            src={tech.image}
                            alt={tech.name}
                            className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        </div>
                      )}
                      
                      <div className="p-6 space-y-8 flex-grow flex flex-col">
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
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <CarouselPrevious className="hidden sm:inline-flex left-2" />
            <CarouselNext className="hidden sm:inline-flex right-2" />

          </Carousel>
        </motion.div>

        <div className="text-center mt-8">
          <Button className="bg-card" asChild variant="outline" size="lg">
            <Link to="/tecnologias">
              Ver Todas as Tecnologias
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;

