import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import WhatsAppFAB from './WhatsAppFAB';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col" data-page-structure="header|hero|sobre|servicos|blog|local|footer">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}
