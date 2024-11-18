import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlayCircle, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { sendEmail } from '../utils/email';

export default function Activities() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState(t('activities.all'));
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const categories = [
    t('activities.all'),
    t('activities.graduation'),
    t('activities.sports'),
    t('activities.community')
  ];

  const activities = [
    {
      type: t('activities.graduation'),
      image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80',
      title: t('activities.graduation2023'),
      description: t('activities.graduation2023Desc')
    },
    {
      type: t('activities.sports'),
      image: 'https://images.unsplash.com/photo-1515037893149-de7f840978e2?auto=format&fit=crop&q=80',
      title: t('activities.sportsTournament'),
      description: t('activities.sportsTournamentDesc')
    },
    {
      type: t('activities.community'),
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80',
      title: 'Community Outreach Program',
      description: 'Students giving back to the local community'
    },
    {
      type: t('activities.graduation'),
      image: 'https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?auto=format&fit=crop&q=80',
      title: 'Honors Ceremony 2023',
      description: 'Recognizing academic excellence and outstanding achievements'
    },
    {
      type: t('activities.sports'),
      image: 'https://images.unsplash.com/photo-1577471488278-16eec37ffcc2?auto=format&fit=crop&q=80',
      title: 'Basketball Championship',
      description: 'Our team competing in the regional finals'
    },
    {
      type: t('activities.community'),
      image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80',
      title: 'Environmental Day',
      description: 'Students leading local cleanup and tree planting initiatives'
    }
  ];

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError('');
    
    try {
      const result = await sendEmail({
        name: contactForm.name,
        email: contactForm.email,
        message: `Interested in: ${selectedActivity}\n\n${contactForm.message}`
      });
      
      if (result.success) {
        setSuccess(true);
        setContactForm({ name: '', email: '', message: '' });
        setSelectedActivity(null);
        setTimeout(() => setSuccess(false), 3000);
      } else {
        setError(t('activities.error'));
      }
    } catch (error) {
      setError(t('activities.errorUnexpected'));
    } finally {
      setSending(false);
    }
  };

  const filteredActivities = activities.filter(
    activity => filter === t('activities.all') || activity.type === filter
  );

  return (
    <section className="py-16 bg-gray-50" id="activities">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <PlayCircle className="w-8 h-8 text-blue-900" />
          <h2 className="text-4xl font-bold text-center text-gray-900">
            {t('nav.activities')}
          </h2>
        </div>
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full transition-all text-sm md:text-base ${
                filter === category
                  ? 'bg-blue-900 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Activities Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            layout
          >
            {filteredActivities.map((activity, index) => (
              <motion.div
                key={activity.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="inline-block px-3 py-1 text-xs font-medium text-white bg-blue-900/80 rounded-full mb-2">
                      {activity.type}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {activity.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {activity.description}
                  </p>
                  <button
                    onClick={() => setSelectedActivity(activity.title)}
                    className="inline-flex items-center text-blue-900 hover:text-blue-700 font-medium"
                  >
                    <Users className="w-4 h-4 mr-2" />
                    Get Involved
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Contact Modal */}
        {selectedActivity && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={(e) => {
              if (e.target === e.currentTarget) setSelectedActivity(null);
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-xl p-6 max-w-md w-full"
            >
              <h3 className="text-xl font-semibold mb-4">Get Involved</h3>
              <p className="text-gray-600 mb-4">
                Interested in: {selectedActivity}
              </p>
              
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    value={contactForm.message}
                    onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    rows={4}
                    required
                  />
                </div>
                
                {error && (
                  <p className="text-red-500 text-sm">{error}</p>
                )}
                
                {success && (
                  <p className="text-green-500 text-sm">Message sent successfully!</p>
                )}
                
                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setSelectedActivity(null)}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={sending}
                    className="px-6 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 disabled:opacity-50"
                  >
                    {sending ? 'Sending...' : 'Send'}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}