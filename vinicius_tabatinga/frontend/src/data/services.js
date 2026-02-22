import { Eye, Glasses, Sparkles, Stethoscope } from 'lucide-react';

export const services = [
  {
    slug: 'oftalmologia-geral',
    icon: Stethoscope,
    title: 'Oftalmologia Geral',
    description: 'Consulta de rotina e avaliação completa da saúde ocular.',
    longDescription: 'A oftalmologia geral abrange a avaliação preventiva e o tratamento das principais condições oculares. Realizamos consultas de rotina, prescrição de óculos, diagnóstico de doenças como conjuntivite, terçol e alergias oculares, além do acompanhamento de doenças sistêmicas que afetam a visão.',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&q=80',
    gradient: 'from-emerald-500/20 to-medical-500/10',
  },
  {
    slug: 'catarata',
    icon: Eye,
    title: 'Catarata',
    description: 'Cirurgia com técnicas modernas que restauram a visão.',
    longDescription: 'A catarata é a opacificação do cristalino, que causa perda progressiva da visão. Utilizamos técnicas cirúrgicas modernas e seguras, com lentes intraoculares de última geração, para restaurar a visão com resultados previsíveis e recuperação rápida.',
    image: 'https://images.unsplash.com/photo-1581594693980-74ee25ad6377?w=600&q=80',
    gradient: 'from-blue-500/20 to-medical-500/10',
  },
  {
    slug: 'glaucoma',
    icon: Glasses,
    title: 'Glaucoma',
    description: 'Tratamento e acompanhamento para preservação da visão.',
    longDescription: 'O glaucoma é uma doença que pode levar à perda irreversível da visão. Oferecemos diagnóstico preciso, acompanhamento especializado e tratamentos clínicos e cirúrgicos para controlar a pressão intraocular e preservar sua visão ao longo do tempo.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80',
    gradient: 'from-teal-500/20 to-medical-500/10',
  },
  {
    slug: 'cirurgia-refrativa',
    icon: Sparkles,
    title: 'Cirurgia Refrativa',
    description: 'Correção definitiva de miopia, astigmatismo e hipermetropia.',
    longDescription: 'A cirurgia refrativa permite correção definitiva de miopia, astigmatismo e hipermetropia através de técnicas como LASIK e PRK. Avaliamos cada caso individualmente para indicar a melhor opção, visando reduzir ou eliminar a dependência de óculos e lentes.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80',
    gradient: 'from-medical-400/20 to-medical-500/10',
  },
];

export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug);
}
