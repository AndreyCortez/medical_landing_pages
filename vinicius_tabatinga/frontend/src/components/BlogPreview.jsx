import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, FileText } from 'lucide-react';
import Carousel from './Carousel';
import Card from './Card';

const PLACEHOLDER_IMAGE = 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80';

export default function BlogPreview({ posts = [] }) {
  const navigate = useNavigate();

  return (
    <section id="blog" className="py-24 bg-brand-mid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 text-center md:text-left">
          <div className="flex-1">
            <span className="text-brand-dark/80 font-bold tracking-widest uppercase text-sm mb-3 block">
              Conteúdo Educativo
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-brand-dark mb-6">
              Blog e Artigos
            </h2>
            <p className="text-brand-dark/90 text-xl max-w-2xl font-medium leading-relaxed mx-auto md:mx-0">
              Descubra informações valiosas, dicas de prevenção e novidades em oftalmologia.
            </p>
          </div>
          <Link
            to="/blog"
            className="inline-flex items-center justify-center gap-2 bg-brand-dark text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-dark/90 transition-colors shadow-lg whitespace-nowrap"
          >
            Ver todos os artigos
            <ArrowRight size={20} />
          </Link>
        </div>

        {posts.length > 0 ? (
          <Carousel>
            {posts.slice(0, 6).map((post) => (
              <Card
                key={post.id}
                image={post.cover_image || PLACEHOLDER_IMAGE}
                title={post.title}
                description={post.description}
                onClick={() => navigate(`/blog/${post.slug}`)}
                ctaLabel="Ler Artigo"
              />
            ))}
          </Carousel>
        ) : (
          <div className="text-center py-20 rounded-3xl bg-white/40 border-0 shadow-lg max-w-3xl mx-auto backdrop-blur-sm border border-white/20">
            <div className="w-24 h-24 rounded-full bg-brand-dark/10 flex items-center justify-center mx-auto mb-8">
              <FileText className="w-12 h-12 text-brand-dark" />
            </div>
            <p className="text-brand-dark text-2xl mb-4 font-bold font-heading">Em breve, novos artigos sobre saúde ocular.</p>
            <p className="text-brand-dark/80 text-lg mb-8">Nossa equipe está preparando conteúdos exclusivos para você.</p>
          </div>
        )}
      </div>
    </section>
  );
}
