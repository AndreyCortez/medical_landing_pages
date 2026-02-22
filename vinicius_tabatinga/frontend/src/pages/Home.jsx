import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Services from '../components/Services';
import BlogPreview from '../components/BlogPreview';
import ContactSection from '../components/ContactSection';

const API_BASE = import.meta.env.VITE_API_URL ?? '';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const scrollToId = location.state?.scrollTo || window.location.hash.replace('#', '');
    if (scrollToId) {
      const el = document.getElementById(scrollToId);
      if (el) {
        const timer = setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 150);
        return () => clearTimeout(timer);
      }
    }
  }, [location.state?.scrollTo, location.pathname]);

  useEffect(() => {
    fetch(`${API_BASE}/api/posts?limit=3`)
      .then((res) => (res.ok ? res.json() : { items: [] }))
      .then((data) => setPosts(data.items || []))
      .catch(() => setPosts([]));
  }, []);

  return (
    <>
      <Hero />
      <Services />
      <BlogPreview posts={posts} />
      <ContactSection />
    </>
  );
}
