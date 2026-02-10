import { useState, useEffect } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaCheck } from 'react-icons/fa';
import emailjs from 'emailjs-com';

export default function Contacto() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    emailjs.init('vHksxDcHgxvB7ZPHk');
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        'service_231h1x1',
        'template_o4plhf7',
        {
          to_email: 'info_sales@protexinnovations.com',
          from_name: formData.fullName,
          from_email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message
        }
      );

      setNotification({
        type: 'success',
        message: 'Message sent successfully! We\'ll be in touch soon.'
      });
      setShowModal(true);
      setFormData({ fullName: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setNotification({
        type: 'error',
        message: 'Failed to send message. Please try again later or contact us directly.'
      });
      setTimeout(() => setNotification(null), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900 pt-[15px] md:pt-[15px] pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Grid principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Formulario de contacto */}
          <div className="bg-white border border-gray-300 rounded-2xl p-8 shadow-2xl">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-gradient-to-b from-slate-700 to-slate-600 rounded-full"></span>
              Send us a message
            </h2>
            
            {notification && (
              <div className={`mb-6 p-4 rounded-lg ${notification.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
                {notification.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@email.com"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (713) 201-5742"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What would you like to talk about?"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help..."
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent transition-all resize-none"
                  required
                />
              </div>

              <button 
                type="submit"
                disabled={isLoading}
                className="w-full bg-slate-700 hover:bg-slate-600 disabled:bg-slate-400 text-white font-semibold py-3.5 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                {isLoading ? 'Sending...' : 'Send message'}
              </button>
              
              <p className="text-sm text-gray-600 text-center">
                We'll get back to you as soon as possible
              </p>
            </form>
          </div>

          {/* Información de contacto */}
          <div className="space-y-6">
            
            {/* Tarjetas de contacto directo */}
            <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-300 rounded-2xl p-6 hover:border-sky-500/50 transition-all duration-300 group shadow-lg">
              <div className="flex items-start gap-4">
                <div className="bg-sky-500/10 p-3 rounded-lg group-hover:bg-sky-500/20 transition-all">
                  <FaEnvelope className="w-6 h-6 text-sky-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1">Email</h3>
                  <a href="mailto:info_sales@protexinnovations.com" className="text-gray-600 hover:text-sky-600 transition-colors">
                    info_sales@protexinnovations.com
                  </a>
                  <a href="mailto:lesly@protexinnovations.com" className="text-gray-600 hover:text-sky-600 transition-colors block mt-2">
                    lesly@protexinnovations.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-300 rounded-2xl p-6 hover:border-teal-600/50 transition-all duration-300 group shadow-lg">
              <div className="flex items-start gap-4">
                <div className="bg-teal-600/10 p-3 rounded-lg group-hover:bg-teal-600/20 transition-all">
                  <FaPhone className="w-6 h-6 text-teal-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1">Phone</h3>
                  <a href="tel:+17132015742" className="text-gray-600 hover:text-teal-600 transition-colors">
                    +1 (713) 201-5742
                  </a>
                  <a href="tel:+17139317058" className="text-gray-600 hover:text-teal-600 transition-colors block mt-2">
                    +1 (713) 931-7058
                  </a>
                  <p className="text-sm text-gray-500 mt-1">Mon - Fri: 9:00am - 5:00pm | Sat: 9:00am - 2:00pm</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-300 rounded-2xl p-6 hover:border-slate-600/50 transition-all duration-300 group shadow-lg">
              <div className="flex items-start gap-4">
                <div className="bg-slate-600/10 p-3 rounded-lg group-hover:bg-slate-600/20 transition-all">
                  <FaMapMarkerAlt className="w-6 h-6 text-slate-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1">Location</h3>
                  <p className="text-gray-600">Houston, Texas</p>
                  <p className="text-sm text-gray-500 mt-1">USA</p>
                </div>
              </div>
            </div>

            {/* Horario */}
            <div className="bg-gradient-to-br from-sky-500/10 to-transparent border border-sky-500/20 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <FaClock className="w-5 h-5 text-sky-600" />
                <h3 className="text-lg font-semibold">Business Hours</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="text-gray-900 font-medium">9:00am - 5:00pm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="text-gray-900 font-medium">9:00am - 2:00pm</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 50,
          animation: 'fadeInModal 0.3s ease-in-out'
        }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '24px',
            padding: '48px',
            maxWidth: '448px',
            width: '100%',
            margin: '16px',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
            animation: 'slideUpModal 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
          }}>
            {/* Success Icon */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '24px'
            }}>
              <div style={{
                width: '64px',
                height: '64px',
                backgroundColor: '#dcfce7',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                animation: 'bounceIcon 1s infinite'
              }}>
                <FaCheck style={{
                  width: '32px',
                  height: '32px',
                  color: '#16a34a',
                  fontSize: '32px'
                }} />
              </div>
            </div>

            {/* Success Title */}
            <h3 style={{
              fontSize: '24px',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '12px',
              color: '#111827'
            }}>
              ¡Mensaje Enviado!
            </h3>

            {/* Success Message */}
            <p style={{
              textAlign: 'center',
              color: '#6b7280',
              marginBottom: '32px',
              fontSize: '16px'
            }}>
              Tu información ha sido recibida correctamente. Nos pondremos en contacto contigo pronto.
            </p>

            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              style={{
                width: '100%',
                backgroundColor: '#16a34a',
                color: 'white',
                fontWeight: '600',
                padding: '12px 24px',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '16px',
                transition: 'background-color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#15803d'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#16a34a'}
            >
              Entendido
            </button>
          </div>

          <style>{`
            @keyframes fadeInModal {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes slideUpModal {
              from { 
                transform: translateY(30px);
                opacity: 0;
              }
              to { 
                transform: translateY(0);
                opacity: 1;
              }
            }
            @keyframes bounceIcon {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-10px); }
            }
          `}</style>
        </div>
      )}
    </section>
  );
}