import { motion } from 'framer-motion';
import { Users, GraduationCap, Trophy, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Stats() {
  const { t } = useLanguage();

  const stats = [
    { icon: Users, label: t('stats.students'), value: t('stats.values.15000') },
    { icon: GraduationCap, label: t('stats.graduation'), value: t('stats.values.98') },
    { icon: Trophy, label: t('stats.awards'), value: t('stats.values.200') },
    { icon: Heart, label: t('stats.projects'), value: t('stats.values.500') },
  ];

  return (
    <div className="bg-white py-12 -mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-900 via-purple-800 to-orange-500 rounded-xl shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8">
            {stats.map(({ icon: Icon, label, value }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center text-white"
              >
                <Icon className="h-8 w-8 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">{value}</div>
                <div className="text-sm opacity-80">{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}