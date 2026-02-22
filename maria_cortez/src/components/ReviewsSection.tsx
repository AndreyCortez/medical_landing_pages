import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getGoogleReviews } from "@/data/reviews";
import { Star } from "lucide-react";
import { motion, Variants } from "framer-motion";

// Componente auxiliar para renderizar as estrelas (sem alterações)
const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`h-5 w-5 ${
            index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

// Variants de animação (sem alterações)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
} as const;

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
} as const;

const ReviewsSection = () => {
  const reviews = getGoogleReviews(3); // Pode alterar o número aqui para testar (ex: 2, 3, 4, 5)

  // 1. Verificamos se a quantidade de reviews é ímpar.
  const isOddNumberOfReviews = reviews.length % 2 !== 0;

  return (
    <section id="depoimentos" className="py-24 bg-card overflow-x-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            O que Nossos Pacientes Dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A satisfação e a confiança de quem nos procura são a nossa maior recompensa.
          </p>
        </div>

        <motion.div
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {reviews.map((review, index) => {
            // 2. Dentro do map, verificamos se este é o último item.
            const isLastItem = index === reviews.length - 1;
            
            // 3. A condição final: é ímpar E é o último item?
            const shouldCenterLastItem = isOddNumberOfReviews && isLastItem;

            return (
              <motion.div 
                key={review.id} 
                variants={itemVariants}
                // 4. Aplicamos a classe condicionalmente.
                className={shouldCenterLastItem ? 'md:col-span-2 lg:col-span-1' : ''}
              >
                <Card className="flex flex-col justify-between bg-background border-0 shadow-card hover:shadow-medical transition-all duration-300 h-full">
                  <CardHeader>
                    <StarRating rating={review.rating} />
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground italic">"{review.text}"</p>
                  </CardContent>
                  <CardFooter className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={review.profilePhotoUrl} alt={review.authorName} />
                      <AvatarFallback>{review.authorName.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-bold text-foreground">{review.authorName}</p>
                      <p className="text-sm text-muted-foreground">{review.relativeTimeDescription}</p>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewsSection;