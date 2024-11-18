import { motion } from 'framer-motion';
import { Users, GraduationCap, BookOpen, Backpack } from 'lucide-react';

export default function Sponsorship() {
  const sponsorshipPlans = [
    {
      title: 'Complete Education',
      icon: GraduationCap,
      price: 2500,
      features: ['Full tuition coverage', 'All school supplies', 'Meal program', 'Transportation assistance'],
      description: "Support a student's complete educational journey",
      highlighted: true
    },
    {
      title: 'Essentials',
      icon: Backpack,
      price: 1000,
      features: ['School tuition', 'School supplies'],
      description: 'Cover the basic educational needs'
    },
    {
      title: 'Academic Support',
      icon: BookOpen,
      price: 1500,
      features: ['Tuition coverage', 'Learning materials', 'Extra tutoring'],
      description: 'Ensure academic success with additional support'
    }
  ];

  const topContributors = [
    {
      name: "Global Education Foundation",
      type: "Corporate Sponsor",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
      contribution: "Sponsored 100+ students",
      testimonial: "New Horizon School's commitment to excellence and innovation makes them an ideal partner in our mission to transform education in Haiti."
    },
    {
      name: "Dr. Robert Chen",
      type: "Individual Sponsor",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
      contribution: "Technology Lab Sponsor",
      testimonial: "Seeing the students embrace technology and develop new skills has been incredibly rewarding. The school's vision aligns perfectly with the future of education."
    },
    {
      name: "Haiti Forward Initiative",
      type: "NGO Partner",
      image: "https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?auto=format&fit=crop&q=80",
      contribution: "Infrastructure Development",
      testimonial: "The school's transparent approach and clear impact metrics make them an exemplary partner in educational development."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-16 md:pt-20">
      <section className="py-12 md:py-20" id="sponsorship">
        {/* Sponsorship Plans Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8 md:mb-12"
          >
            <div className="inline-block p-3 bg-blue-100 rounded-2xl mb-4">
              <Users className="w-10 h-10 md:w-12 md:h-12 text-blue-900" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sponsorship Programs</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Choose how you'd like to support a student's education
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {sponsorshipPlans.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <motion.div
                  key={plan.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all ${
                    plan.highlighted
                      ? 'bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white md:transform md:scale-105'
                      : 'bg-white hover:bg-gray-50'
                  }`}
                >
                  <div className="p-6 md:p-8">
                    <Icon className={`w-10 h-10 md:w-12 md:h-12 mb-4 md:mb-6 ${plan.highlighted ? 'text-white' : 'text-blue-900'}`} />
                    <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">{plan.title}</h3>
                    <p className={`text-sm md:text-base ${plan.highlighted ? 'text-white/90' : 'text-gray-600'}`}>
                      {plan.description}
                    </p>
                    <div className={`text-2xl md:text-3xl font-bold mt-4 mb-6 md:mt-6 md:mb-8 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                      ${plan.price}/year
                    </div>
                    <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8 text-sm md:text-base">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <svg
                            className={`w-5 h-5 mr-3 ${plan.highlighted ? 'text-white' : 'text-blue-900'}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button
                      className={`w-full py-3 px-6 rounded-xl font-semibold transition-all text-sm md:text-base ${
                        plan.highlighted
                          ? 'bg-white text-blue-900 hover:bg-gray-100'
                          : 'bg-gradient-to-r from-blue-900 to-blue-700 text-white hover:from-blue-800 hover:to-blue-600'
                      }`}
                    >
                      Become a Sponsor
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Top Contributors Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Top Contributors</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Meet the visionary individuals and organizations helping us transform education in Haiti
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {topContributors.map((contributor, index) => (
              <motion.div
                key={contributor.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all"
              >
                <div className="h-40 md:h-48 relative overflow-hidden">
                  <img
                    src={contributor.image}
                    alt={contributor.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-4 md:p-6">
                    <div className="text-white">
                      <h3 className="text-lg md:text-xl font-bold">{contributor.name}</h3>
                      <p className="text-sm opacity-90">{contributor.type}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:p-6">
                  <div className="flex items-center mb-3 md:mb-4">
                    <Users className="w-4 h-4 md:w-5 md:h-5 text-orange-500 mr-2" />
                    <span className="font-medium text-gray-900 text-sm md:text-base">{contributor.contribution}</span>
                  </div>
                  <p className="text-gray-600 italic leading-relaxed text-sm md:text-base">"{contributor.testimonial}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}