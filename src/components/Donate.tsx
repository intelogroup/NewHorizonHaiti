import { motion } from 'framer-motion';
import { Heart, Book, GraduationCap, School, CreditCard, Building2, Wallet, Star } from 'lucide-react';
import { useState } from 'react';

interface DonationOption {
  title: string;
  amount: number;
  description: string;
  icon: any;
}

export default function Donate() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'bank' | 'paypal' | null>(null);

  const donationOptions: DonationOption[] = [
    {
      title: 'Education Support',
      amount: 50,
      description: 'Provide educational materials for one student',
      icon: Book
    },
    {
      title: 'Student Scholarship',
      amount: 100,
      description: 'Support a student\'s monthly education costs',
      icon: GraduationCap
    },
    {
      title: 'School Development',
      amount: 500,
      description: 'Contribute to school infrastructure improvements',
      icon: School
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Regular Donor",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
      quote: "Supporting New Horizon School has been incredibly rewarding. Seeing the direct impact of my donations on students' lives is heartwarming.",
      rating: 5
    },
    {
      name: "Marc Thompson",
      role: "Monthly Contributor",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
      quote: "The transparency and regular updates about how my donations are used make me confident in supporting this cause.",
      rating: 5
    },
    {
      name: "Marie Claire",
      role: "Corporate Donor",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80",
      quote: "As someone of Haitian descent, supporting education in Haiti through New Horizon is my way of giving back.",
      rating: 5
    }
  ];

  const renderDonationOptions = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
      {donationOptions.map((option) => {
        const Icon = option.icon;
        return (
          <motion.div
            key={option.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            className={`p-4 md:p-6 rounded-2xl cursor-pointer transition-all ${
              selectedAmount === option.amount
                ? 'bg-gradient-to-br from-blue-900 to-blue-700 text-white shadow-xl'
                : 'bg-white hover:shadow-lg border border-gray-100'
            }`}
            onClick={() => setSelectedAmount(option.amount)}
          >
            <Icon className={`w-6 h-6 md:w-8 md:h-8 mb-3 md:mb-4 ${
              selectedAmount === option.amount ? 'text-white' : 'text-blue-900'
            }`} />
            <h3 className="text-lg md:text-xl font-semibold mb-2">{option.title}</h3>
            <p className={`text-sm md:text-base mb-3 md:mb-4 ${
              selectedAmount === option.amount ? 'text-white/90' : 'text-gray-600'
            }`}>{option.description}</p>
            <div className="text-xl md:text-2xl font-bold">${option.amount}</div>
          </motion.div>
        );
      })}
    </div>
  );

  const renderCustomAmount = () => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-4 md:p-8 rounded-2xl shadow-lg mb-6 md:mb-8 border border-gray-100"
    >
      <label className="block text-gray-700 text-sm font-medium mb-2">
        Custom Amount
      </label>
      <div className="relative">
        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
        <input
          type="number"
          value={customAmount}
          onChange={(e) => setCustomAmount(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-900 focus:border-transparent text-lg"
          placeholder="Enter custom amount"
        />
      </div>
    </motion.div>
  );

  const renderDonorInfo = () => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-4 md:p-8 rounded-2xl shadow-lg mb-6 md:mb-8 space-y-4 md:space-y-6 border border-gray-100"
    >
      <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">Your Information</h3>
      <div>
        <label className="block text-gray-700 text-sm font-medium mb-2">Name (Optional)</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-900 focus:border-transparent"
          placeholder="Your name"
        />
      </div>
      <div>
        <label className="block text-gray-700 text-sm font-medium mb-2">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-900 focus:border-transparent"
          placeholder="Your email"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 text-sm font-medium mb-2">
          Message (Optional)
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-900 focus:border-transparent"
          rows={4}
          placeholder="Why are you supporting us?"
        />
      </div>
    </motion.div>
  );

  const renderPaymentMethods = () => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-4 md:p-8 rounded-2xl shadow-lg mb-6 md:mb-8 border border-gray-100"
    >
      <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">Payment Method</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
        {[
          { id: 'card', icon: CreditCard, label: 'Credit Card' },
          { id: 'bank', icon: Building2, label: 'Bank Transfer' },
          { id: 'paypal', icon: Wallet, label: 'Digital Wallet' }
        ].map(({ id, icon: Icon, label }) => (
          <motion.button
            key={id}
            whileHover={{ scale: 1.02 }}
            onClick={() => setPaymentMethod(id as any)}
            className={`p-4 md:p-6 rounded-xl border-2 transition-all ${
              paymentMethod === id
                ? 'border-blue-900 bg-blue-50'
                : 'border-gray-200 hover:border-blue-900'
            }`}
          >
            <Icon className={`w-6 h-6 md:w-8 md:h-8 mx-auto mb-2 md:mb-3 ${
              paymentMethod === id ? 'text-blue-900' : 'text-gray-600'
            }`} />
            <span className={`text-sm md:text-base font-medium ${paymentMethod === id ? 'text-blue-900' : 'text-gray-600'}`}>
              {label}
            </span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );

  const renderCardForm = () => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-4 md:p-8 rounded-2xl shadow-lg mb-6 md:mb-8 border border-gray-100"
    >
      <div className="space-y-4 md:space-y-6">
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">Card Number</label>
          <div className="relative">
            <CreditCard className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="1234 5678 9012 3456"
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-900 focus:border-transparent"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 md:gap-6">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">Expiry Date</label>
            <input
              type="text"
              placeholder="MM/YY"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-900 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">CVC</label>
            <input
              type="text"
              placeholder="123"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-900 focus:border-transparent"
            />
          </div>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">Name on Card</label>
          <input
            type="text"
            placeholder="John Doe"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-900 focus:border-transparent"
          />
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-16 md:pt-20">
      <section className="py-12 md:py-20" id="donate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8 md:mb-16"
          >
            <div className="inline-block p-3 bg-orange-100 rounded-2xl mb-4">
              <Heart className="w-10 h-10 md:w-12 md:h-12 text-orange-500 fill-current" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Support Our Mission</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Your contribution helps us provide quality education to Haiti's future leaders
            </p>
          </motion.div>

          {/* Donation Form */}
          <div className="max-w-4xl mx-auto">
            {renderDonationOptions()}
            {renderCustomAmount()}
            {renderDonorInfo()}
            {renderPaymentMethods()}
            {paymentMethod === 'card' && renderCardForm()}

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              className="w-full bg-gradient-to-r from-blue-900 to-blue-700 text-white py-4 rounded-xl text-base md:text-lg font-semibold hover:from-blue-800 hover:to-blue-600 transition-all shadow-lg mb-16"
              onClick={() => {/* Handle payment processing */}}
            >
              Complete Donation
            </motion.button>
          </div>

          {/* Testimonials */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 md:mt-16"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">What Our Donors Say</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100"
                >
                  <div className="flex items-center mb-4 md:mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover mr-4 ring-4 ring-blue-50"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-blue-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-3 md:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm md:text-base text-gray-600 italic leading-relaxed">"{testimonial.quote}"</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}