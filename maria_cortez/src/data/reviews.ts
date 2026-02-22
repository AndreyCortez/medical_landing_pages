// A foto de perfil pode ser um link para uma imagem genérica ou a URL da foto do Google.
// Para obter a URL da foto do Google, clique com o botão direito na foto do avaliador e "Copiar endereço da imagem".
// Cuidado: esses links podem expirar. Para maior estabilidade, salve as imagens no seu projeto.

export const googleReviews = [
  {
    id: 1,
    authorName: "Ana Silva",
    profilePhotoUrl: "https://lh3.googleusercontent.com/a-/ALV-UjV_... (exemplo de URL)",
    rating: 5,
    text: "Atendimento impecável da Dra. Maria! Ela é extremamente atenciosa e competente. O consultório é moderno e acolhedor. Recomendo de olhos fechados!",
    relativeTimeDescription: "2 semanas atrás",
  },
  {
    id: 2,
    authorName: "Carlos Souza",
    profilePhotoUrl: "https://lh3.googleusercontent.com/a-/ALV-UjV_... (exemplo de URL)",
    rating: 5,
    text: "Tive uma experiência fantástica. Desde a recepção até o tratamento, tudo foi perfeito. A Dra. Maria explicou cada detalhe do procedimento, me deixando muito seguro.",
    relativeTimeDescription: "1 mês atrás",
  },
  {
    id: 3,
    authorName: "Juliana Pereira",
    profilePhotoUrl: "https://lh3.googleusercontent.com/a-/ALV-UjV_... (exemplo de URL)",
    rating: 5,
    text: "Melhor dermatologista que já consultei. Resolveu um problema de pele que eu tinha há anos em poucas sessões. Sou muito grata pelo profissionalismo e carinho.",
    relativeTimeDescription: "3 meses atrás",
  },
  
];

export const getGoogleReviews = (limit) => {
  if (limit) {
    return googleReviews.slice(0, limit);
  }
  return googleReviews;
};