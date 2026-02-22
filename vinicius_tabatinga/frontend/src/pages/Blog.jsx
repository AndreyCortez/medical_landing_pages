import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowLeft, ArrowRight } from 'lucide-react';

const API_BASE = import.meta.env.VITE_API_URL ?? '';

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE}/api/posts`)
      .then((res) => (res.ok ? res.json() : { items: [] }))
      .then((data) => {
        setPosts(data.items || []);
      })
      .catch(() => setPosts([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="group inline-flex items-center gap-2 text-medical-700 hover:text-medical-600 mb-10 font-medium link-hover-underline"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Voltar ao início
        </Link>

        <span className="inline-block px-3 py-1 rounded-full bg-medical-100 text-medical-700 text-sm font-medium mb-4">
          Blog
        </span>
        <h1 className="section-title mb-4">Artigos e Notícias</h1>
        <p className="section-subtitle mb-14">
          Artigos, dicas e novidades sobre saúde ocular
        </p>

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="card-premium animate-pulse">
                <div className="aspect-video bg-medical-100 rounded-xl mb-4" />
                <div className="h-6 bg-medical-100 rounded-lg w-3/4 mb-2" />
                <div className="h-4 bg-medical-100 rounded w-full mb-2" />
                <div className="h-4 bg-medical-100 rounded w-2/3" />
              </div>
            ))}
          </div>
        ) : posts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link key={post.id} to={`/blog/${post.slug}`} className="group block">
                <article className="card-premium h-full flex flex-col overflow-hidden">
                  <div className="aspect-video rounded-xl bg-gradient-to-br from-medical-100 to-medical-50 mb-4 flex items-center justify-center overflow-hidden">
                    {post.cover_image ? (
                      <img
                        src={post.cover_image}
                        alt=""
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <FileText className="w-14 h-14 text-medical-300/80" />
                    )}
                  </div>
                  <h2 className="font-heading text-xl text-medical-900 group-hover:text-medical-700 mb-2 line-clamp-2 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-medical-600 text-sm line-clamp-2 mb-3 flex-1">
                    {post.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-medical-500 group-hover:gap-2 transition-all">
                    Ler mais
                    <ArrowRight size={16} />
                  </span>
                </article>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 rounded-2xl bg-gradient-to-br from-medical-50 to-white border border-medical-100 shadow-soft">
            <div className="w-24 h-24 rounded-2xl bg-medical-100/80 flex items-center justify-center mx-auto mb-6">
              <FileText className="w-12 h-12 text-medical-400" />
            </div>
            <p className="text-medical-600 text-lg mb-2">Nenhum artigo publicado ainda.</p>
            <p className="text-medical-500 text-sm">Volte em breve para novidades!</p>
          </div>
        )}
      </div>
    </div>
  );
}
