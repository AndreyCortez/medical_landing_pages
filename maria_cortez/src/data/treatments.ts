import dermatologiaClinica from "@/assets/dermatologia_clinica.png";
import toxinaBotulinica from "@/assets/toxina_botulinica.png";
import preenchimentoHialuronico from "@/assets/preenchimento_acido_hialuronico.png";
import bioestimuladoresDeColageno from "@/assets/bioestimuladores_de_colageno.png";
import acneECicatrizes from "@/assets/acne_e_cicatrizes.png";
import melasmaEManchas from "@/assets/melasma_e_manchas.png";
import tricologia from "@/assets/tricologia.png";
import prevencaoCancerPele from "@/assets/prevencao_cancer_pele.png";

export interface Treatment {
  id: string;
  title: string;
  description: string;
  image?: string; // Continua como string, isso está correto
  priority: number;
  isActive: boolean;
}

export const treatments: Treatment[] = [
  {
    id: "dermatologia-clinica",
    title: "Dermatologia Clínica",
    description: "Diagnóstico e tratamento de doenças da pele, cabelos e unhas. Cuidado especializado para condições como rosácea, dermatites, psoríase e micoses, visando a saúde integral da sua pele.",
    // 2. Atribua a variável diretamente, SEM chaves
    image: dermatologiaClinica,
    priority: 1,
    isActive: true
  },
  {
    id: "toxina-botulinica",
    title: "Toxina Botulínica",
    description: "Suaviza e previne rugas de expressão, como pés de galinha e linhas da testa. Proporciona uma aparência rejuvenescida e natural ao relaxar a musculatura facial de forma precisa.",
    image: toxinaBotulinica,
    priority: 2,
    isActive: true
  },
  {
    id: "preenchimento-acido-hialuronico",
    title: "Preenchimento com Ácido Hialurônico",
    description: "Restaura o volume, define contornos e hidrata a pele, tratando olheiras, lábios e sulcos. Promove a harmonização facial e corporal com resultados sutis e elegantes.",
    image: preenchimentoHialuronico,
    priority: 3,
    isActive: true
  },
  {
    id: "bioestimuladores-de-colageno",
    title: "Bioestimuladores de Colágeno",
    description: "Combate a flacidez estimulando a produção natural de colágeno pelo próprio corpo. O resultado é uma pele progressivamente mais firme, com melhor sustentação e qualidade.",
    image: bioestimuladoresDeColageno,
    priority: 4,
    isActive: true
  },
   {
    id: "acne-e-cicatrizes",
    title: "Acne e Cicatrizes de Acne",
    description: "Tratamento completo para todos os graus de acne, do caso leve ao grave. Atuamos no controle da condição ativa e em protocolos avançados para suavizar cicatrizes e manchas.",
    image: acneECicatrizes,
    priority: 5,
    isActive: true
  },
  {
    id: "melasma-e-manchas",
    title: "Melasma e Manchas",
    description: "Plano de tratamento e manejo para clarear manchas escuras, como o melasma. Combinamos tecnologias e cuidados em consultório para uniformizar o tom da pele e devolver sua luminosidade.",
    image: melasmaEManchas,
    priority: 6,
    isActive: true
  },
  {
    id: "tricologia-saude-capilar",
    title: "Tricologia (Saúde Capilar)",
    description: "Diagnóstico e tratamento especializado para queda de cabelo, calvície, caspa e outras afecções do couro cabeludo. Nosso objetivo é restaurar a saúde e a vitalidade dos seus fios.",
    image: tricologia,
    priority: 7,
    isActive: true
  },
  {
    id: "prevencao-cancer-de-pele",
    title: "Prevenção e Diagnóstico do Câncer de Pele",
    description: "Acompanhamento especializado com mapeamento de pintas (dermatoscopia) para a detecção precoce do câncer de pele. O cuidado essencial para sua segurança e tranquilidade.",
    image: prevencaoCancerPele,
    priority: 8,
    isActive: true
  }
];


// Utility functions for easy management
export const getActiveTreatments = () => treatments.filter(t => t.isActive);

export const getPriorityTreatments = (limit: number = 6) => 
  getActiveTreatments()
    .sort((a, b) => a.priority - b.priority)
    .slice(0, limit);

export const getAllTreatmentsSorted = () => 
  getActiveTreatments().sort((a, b) => a.priority - b.priority);

// Functions to manage treatments (for easy editing in code)
export const addTreatment = (treatment: Omit<Treatment, 'id'>) => {
  const newTreatment: Treatment = {
    ...treatment,
    id: treatment.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
  };
  treatments.push(newTreatment);
  return newTreatment;
};

export const updateTreatmentPriority = (id: string, newPriority: number) => {
  const treatment = treatments.find(t => t.id === id);
  if (treatment) {
    treatment.priority = newPriority;
  }
};

export const toggleTreatmentStatus = (id: string) => {
  const treatment = treatments.find(t => t.id === id);
  if (treatment) {
    treatment.isActive = !treatment.isActive;
  }
};

export const removeTreatment = (id: string) => {
  const index = treatments.findIndex(t => t.id === id);
  if (index > -1) {
    treatments.splice(index, 1);
  }
};