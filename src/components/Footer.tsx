import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import { sendEmail } from '../utils/email';

export default function Footer() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError('');
    
    try {
      const result = await sendEmail({
        name,
        email,
        message
      });
      
      if (result.success) {
        setSubmitted(true);
        setName('');
        setEmail('');
        setMessage('');
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError('Failed to send message. Please try again.');
      }
    } catch (error) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setSending(false);
    }
  };

  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <span>+509 123-456-789</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <a href="mailto:jimkalinov@gmail.com" className="hover:text-orange-300">
                  jimkalinov@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span>Port-au-Prince, Haiti</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about-us" className="hover:text-orange-300">About Us</a></li>
              <li><a href="#activities" className="hover:text-orange-300">Activities</a></li>
              <li><a href="#sponsorship" className="hover:text-orange-300">Sponsorship</a></li>
              <li><a href="#pr50" className="hover:text-orange-300">PR50</a></li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-4">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full px-4 py-2 rounded bg-blue-800 border border-blue-700 focus:outline-none focus:border-orange-300"
                  required
                  disabled={sending}
                />
              </div>
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="w-full px-4 py-2 rounded bg-blue-800 border border-blue-700 focus:outline-none focus:border-orange-300"
                  required
                  disabled={sending}
                />
              </div>
              <div>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your message"
                  rows={4}
                  className="w-full px-4 py-2 rounded bg-blue-800 border border-blue-700 focus:outline-none focus:border-orange-300"
                  required
                  disabled={sending}
                ></textarea>
              </div>
              {error && (
                <p className="text-red-400 text-sm">{error}</p>
              )}
              <button
                type="submit"
                className="flex items-center justify-center w-full px-6 py-3 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={sending || submitted}
              >
                {sending ? (
                  'Sending...'
                ) : submitted ? (
                  'Message Sent!'
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </button>
              {submitted && (
                <p className="text-green-400 text-center mt-2">
                  Thank you! We'll get back to you soon.
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-blue-800 text-center">
          <p>&copy; {new Date().getFullYear()} New Horizon School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}