import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={toggleLanguage}
      className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
        language === 'en' ? 'bg-blue-100 text-blue-900' : 'bg-orange-100 text-orange-900'
      }`}
      aria-label="Toggle language"
    >
      {language === 'en' ? 'FR' : 'EN'}
    </motion.button>
  );
}