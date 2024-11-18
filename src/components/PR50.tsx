import { motion } from 'framer-motion';
import { Lightbulb, Target, Rocket, Globe, Code, TestTube, Brain, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function PR50() {
  const { t } = useLanguage();

  const initiatives = [
    {
      title: t('pr50.vision.title'),
      icon: Lightbulb,
      content: t('pr50.vision.content'),
      color: 'from-blue-600 to-blue-800'
    },
    {
      title: t('pr50.goals.title'),
      icon: Target,
      content: t('pr50.goals.content'),
      color: 'from-purple-600 to-purple-800'
    },
    {
      title: t('pr50.deliverables.title'),
      icon: Rocket,
      content: t('pr50.deliverables.content'),
      color: 'from-orange-500 to-orange-700'
    }
  ];

  const features = [
    {
      icon: Code,
      title: t('pr50.features.coding'),
      description: t('pr50.features.codingDesc')
    },
    {
      icon: TestTube,
      title: t('pr50.features.science'),
      description: t('pr50.features.scienceDesc')
    },
    {
      icon: Brain,
      title: t('pr50.features.innovation'),
      description: t('pr50.features.innovationDesc')
    },
    {
      icon: Globe,
      title: t('pr50.features.global'),
      description: t('pr50.features.globalDesc')
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="pr50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('pr50.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('pr50.subtitle')}
            </p>
          </motion.div>
        </div>

        {/* Main Initiative Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={initiative.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative h-full"
            >
              <div className={`h-full rounded-2xl overflow-hidden bg-gradient-to-br ${initiative.color} text-white p-8 shadow-xl`}>
                <initiative.icon className="w-12 h-12 mb-6" />
                <h3 className="text-2xl font-bold mb-4">{initiative.title}</h3>
                <p className="text-white/90">{initiative.content}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Implementation Features */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            {t('pr50.implementation')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-blue-900" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Expansion Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-blue-900 via-purple-800 to-orange-500 rounded-2xl p-8 text-white text-center"
        >
          <Users className="w-12 h-12 mx-auto mb-6" />
          <h3 className="text-2xl font-bold mb-4">{t('pr50.expansion.title')}</h3>
          <p className="max-w-3xl mx-auto">
            {t('pr50.expansion.description')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}