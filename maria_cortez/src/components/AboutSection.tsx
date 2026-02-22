import drMariaImage from "@/assets/MariaCortezHomeCropped.png";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const AboutSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Variant para os textos vindo da esquerda
  const textFromLeftVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: (custom) => ({ // 'custom' nos permite passar um valor de delay
      opacity: 1,
      x: 0,
      transition: { duration: 1.2, ease: "easeOut", delay: custom * 0.2 } // Usamos o custom para o delay
    }),
  } as const;

  // Variant para a imagem vindo da direita
  const imageFromRightVariant = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  } as const;

  return (
    <section 
      id="home" 
      className="bg-background py-20 md:pt-16 md:pb-0 overflow-x-hidden"
    >
      <div className="container mx-auto w-full px-4">
        {/* ESTRUTURA ORIGINAL DO GRID RESTAURADA */}
        <div className="grid grid-cols-1 md:grid-rows-10 md:grid-cols-12 lg:gap-x-20 md:gap-x-0
         lg:w-full lg:max-h-[740px] md:max-h-[600px] 
         gap-y-12 md:gap-y-0">

          {/* BLOCO DE TEXTO SUPERIOR - AGORA UM motion.div INDIVIDUAL */}
          <motion.div 
            className="md:col-span-10 md:row-start-1 md:row-span-1 md:col-start-2
                       lg:col-start-2 lg:col-span-6 lg:row-start-2 lg:row-span-3 
                       text-center md:text-left order-1 md:pt-8"
            variants={textFromLeftVariant}
            initial="hidden"
            whileInView="visible"
            custom={0} // Sem delay para o primeiro elemento
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="container w-full mx-auto px-0 mx-0 my-0">
              <h1 className="text-4xl lg:text-5xl sm:text-3xl font-bold text-foreground leading-tight">
                Dra. Maria Cortez
                <span className="block text-primary mt-2">Dermatologista</span>
              </h1>
            </div>            
            <p className="text-lg text-muted-foreground leading-relaxed lg:w-full lg:max-w-5xl md:max-w-2xl mx-auto md:mx-0 mt-6 mb-0">
              Especialista pela Sociedade Brasileira de Dermatologia, com residência pelo Hospital
              do Servidor Público Municipal de São Paulo. Sua expertise é aplicada na preceptoria voluntária
              de Cosmiatria na mesma instituição.
            </p>
          </motion.div>

          {/* BLOCO DE TEXTO INFERIOR - AGORA UM motion.div INDIVIDUAL COM DELAY */}
          <motion.div 
            className="md:col-span-6 md:row-start-5 md:row-span-2 md:col-start-2
                       lg:row-start-6 lg:col-start-2 lg:col-span-5 lg:pt-4
                       space-y-6 text-center md:text-left order-3 md:pt-12 md:pb-4"
            variants={textFromLeftVariant}
            initial="hidden"
            whileInView="visible"
            custom={1} // Delay de 1 * 0.2s = 0.2s para um efeito escalonado
            viewport={{ once: true, amount: 0.3 }}
          >
            <blockquote className="border-l-4 border-primary/50 pl-6 italic text-muted-foreground relative text-lg">
              "Minha missão é oferecer um cuidado dermatológico individualizado. 
              Acredito em uma abordagem integral, olhando para você como um todo, 
              para promover saúde, realçar sua beleza natural com resultados refinados 
              e garantir seu bem-estar duradouro."
            </blockquote>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start md:pt-4 pt-0">
              <Button 
                size="lg"
                onClick={() => scrollToSection("contato")}
                className="bg-gradient-hero hover:shadow-medical transition-all duration-300 text-lg px-8 py-4"
              >
                Agendar Consulta
              </Button>
            </div>
          </motion.div>
          
          {/* COLUNA DIREITA (IMAGEM) - CLASSES ORIGINAIS RESTAURADAS */}
          <motion.div 
            className="relative md:col-span-5 md:row-span-9 md:row-start-5 md:col-start-8 
                       lg:row-start-2 lg:row-span-9 lg:col-start-7
                       min-x-[500px] min-h-[400px] md:min-h-0 order-2 overflow-hidden my-0 py-0"
            variants={imageFromRightVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
             <div className="absolute inset-4 sm:inset-8 bg-gradient-accent rounded-3xl blur-3xl opacity-25 -z-10"></div>
             <img
              src={drMariaImage}
              alt="Dra. Maria Cortez"
              className="absolute shadow-medical w-full lg:h-full object-cover" 
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;