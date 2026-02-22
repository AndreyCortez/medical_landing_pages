import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft, Calendar } from 'lucide-react';

const API_BASE = import.meta.env.VITE_API_URL ?? '';

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!slug) return;
    fetch(`${API_BASE}/api/posts/by-slug/${slug}`)
      .then((res) => {
        if (!res.ok) throw new Error('Post não encontrado');
        return res.json();
      })
      .then(setPost)
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [slug]);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Dr. Vinicius Tabatinga`;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', post.description);
    }
  }, [post]);

  if (loading) {
    return (
      <div className="py-12 md:py-16 max-w-3xl mx-auto px-4 animate-pulse">
        <div className="h-8 bg-medical-100 rounded w-48 mb-8" />
        <div className="h-12 bg-medical-100 rounded w-3/4 mb-4" />
        <div className="h-4 bg-medical-100 rounded w-1/3 mb-8" />
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-4 bg-medical-100 rounded" />
          ))}
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="py-12 md:py-16 max-w-3xl mx-auto px-4 text-center">
        <h1 className="section-title">Artigo não encontrado</h1>
        <p className="text-medical-600 mb-6">
          O artigo que você procura não existe ou foi removido.
        </p>
        <Link to="/blog" className="btn-primary inline-flex items-center gap-2">
          <ArrowLeft size={18} />
          Voltar ao Blog
        </Link>
      </div>
    );
  }

  const formatDate = (dateStr) => {
    try {
      return new Date(dateStr).toLocaleDateString('pt-BR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });
    } catch {
      return dateStr;
    }
  };

  return (
    <article className="py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/blog"
          className="group inline-flex items-center gap-2 text-medical-700 hover:text-medical-600 mb-10 font-medium link-hover-underline"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Voltar ao Blog
        </Link>

        <header className="mb-12">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-medical-900 mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-2.5 text-medical-600 px-4 py-2 rounded-xl bg-medical-50 w-fit">
            <Calendar size={18} className="text-medical-500" />
            <time dateTime={post.published_at}>{formatDate(post.published_at)}</time>
          </div>
        </header>

        {post.cover_image && (
          <div className="rounded-2xl overflow-hidden mb-12 shadow-soft-lg border border-medical-100">
            <img
              src={post.cover_image}
              alt=""
              className="w-full aspect-video object-cover"
            />
          </div>
        )}

        <div className="prose prose-lg prose-blue max-w-none prose-headings:font-heading prose-headings:text-medical-900 prose-a:text-medical-600 hover:prose-a:text-medical-800 prose-img:rounded-xl">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </div>
    </article>
  );
}
