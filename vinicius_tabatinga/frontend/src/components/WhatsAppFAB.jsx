import { motion } from 'framer-motion';
import WhatsAppIcon from './WhatsAppIcon';
import { useConfig } from '../context/ConfigContext';

export default function WhatsAppFAB() {
  const { whatsappUrl, trackConversion } = useConfig();

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackConversion('fab')}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl hover:shadow-2xl hover:shadow-[#25D366]/40 transition-shadow"
      aria-label="Contato via WhatsApp"
    >
      <WhatsAppIcon size={28} />
    </motion.a>
  );
}
