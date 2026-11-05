import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Clock, Send, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Contact Component
 * Exact PDF Requirements:
 * - Email: hello@thedailybrew.example
 * - Phone: +91 98765 43210
 * - Location: Chennai
 */
export default function Contact() {
  const [copiedField, setCopiedField] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const email = 'hello@thedailybrew.example';
  const phone = '+91 98765 43210';
  const location = 'Chennai';

  // Clipboard copy handler with feedback timeout
  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  // Form submit handler with simulated response
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="scroll-mt-24 sm:scroll-mt-28 py-14 sm:py-24 bg-[#F5EBDD] relative border-t-2 border-[#183D32]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center mb-8 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold tracking-widest uppercase bg-[#123329]/12 border border-[#123329]/25 text-[#102B23] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#B8552E]" />
            <span>Connect & Visit</span>
          </div>

          <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-[#123329] tracking-tight mb-3">
            Contact
          </h2>

          <p className="text-xs sm:text-base text-[#382C24] leading-relaxed max-w-xl mx-auto font-normal">
            We would love to welcome you. Drop by our café in Chennai or reach out for inquiries and table reservations.
          </p>
        </motion.div>

        {/* Contact Grid: Contact Cards + Quick Message */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: 3 Compulsory Contact Items */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-3.5 sm:space-y-4"
          >
            {/* 1. Email Item */}
            <div className="bg-[#FFFFFF] rounded-2xl sm:rounded-3xl p-4 sm:p-6 border-2 border-[#183D32]/15 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#123329]/12 border border-[#123329]/20 flex items-center justify-center text-[#123329] shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-[#B8552E]" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#382C24] block">
                      Email Us
                    </span>
                    <a
                      href={`mailto:${email}`}
                      className="font-serif text-sm sm:text-lg md:text-xl font-bold text-[#123329] hover:text-[#B8552E] transition-colors break-all"
                    >
                      {email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(email, 'email')}
                  className="min-w-[44px] min-h-[44px] p-2.5 rounded-xl hover:bg-[#F5EBDD] active:scale-90 text-[#382C24] hover:text-[#123329] border border-[#183D32]/15 transition-all flex items-center justify-center shrink-0 cursor-pointer"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedField === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-700 stroke-[2.5]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* 2. Phone Item */}
            <div className="bg-[#FFFFFF] rounded-2xl sm:rounded-3xl p-4 sm:p-6 border-2 border-[#183D32]/15 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3 sm:gap-3.5">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#123329]/12 border border-[#123329]/20 flex items-center justify-center text-[#123329] shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-[#B8552E]" />
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#382C24] block">
                      Call or WhatsApp
                    </span>
                    <a
                      href={`tel:${phone.replace(/\s+/g, '')}`}
                      className="font-serif text-sm sm:text-lg md:text-xl font-bold text-[#123329] hover:text-[#B8552E] transition-colors whitespace-nowrap"
                    >
                      {phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(phone, 'phone')}
                  className="min-w-[44px] min-h-[44px] p-2.5 rounded-xl hover:bg-[#F5EBDD] active:scale-90 text-[#382C24] hover:text-[#123329] border border-[#183D32]/15 transition-all flex items-center justify-center shrink-0 cursor-pointer"
                  title="Copy phone number"
                  aria-label="Copy phone number"
                >
                  {copiedField === 'phone' ? (
                    <Check className="w-4 h-4 text-emerald-700 stroke-[2.5]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* 3. Location Item */}
            <div className="bg-[#FFFFFF] rounded-2xl sm:rounded-3xl p-4 sm:p-6 border-2 border-[#183D32]/15 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3 sm:gap-3.5">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#123329]/12 border border-[#123329]/20 flex items-center justify-center text-[#123329] shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#B8552E]" />
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#382C24] block">
                      Location
                    </span>
                    <div className="font-serif text-sm sm:text-lg md:text-xl font-bold text-[#123329]">
                      {location}
                    </div>
                  </div>
                </div>

                <span className="px-2.5 py-1 text-[10px] sm:text-[11px] font-bold bg-[#123329] text-[#FFFFFF] rounded-full shrink-0 shadow-xs">
                  Tamil Nadu
                </span>
              </div>
            </div>

            {/* Operating Hours Box */}
            <div className="p-3.5 sm:p-5 bg-[#FAF5ED] rounded-2xl border-2 border-[#183D32]/15 flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm text-[#211915]">
              <span className="flex items-center gap-2 font-bold text-[#382C24]">
                <Clock className="w-4 h-4 text-[#B8552E]" />
                Operating Hours
              </span>
              <span className="font-bold text-[#123329]">Mon – Sun: 7:00 AM – 11:00 PM</span>
            </div>
          </motion.div>

          {/* Right Column: Send Us a Note */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="bg-[#FFFFFF] rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border-2 border-[#183D32]/15 shadow-sm">
              <div className="mb-4 sm:mb-6">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#123329] mb-1">
                  Send Us a Note
                </h3>
                <p className="text-xs sm:text-sm text-[#382C24] font-normal">
                  Have a question about our coffee roastery or planning a visit to our Chennai café?
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-4 sm:p-6 bg-emerald-50 border-2 border-emerald-300 rounded-2xl text-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                    <Check className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <h4 className="font-serif text-base sm:text-lg font-bold text-emerald-950">
                    Thank you!
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-900 font-medium">
                    Your note has been received. We look forward to welcoming you to <span className="font-bold">The Daily Brew</span> in Chennai!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <div>
                      <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#211915] mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Vikram Raman"
                        className="w-full px-3.5 py-3 rounded-xl bg-[#FAF5ED] border-2 border-[#183D32]/20 text-[#211915] font-medium text-base sm:text-sm placeholder:text-[#382C24]/60 focus:bg-[#FFFFFF] focus:outline-none focus:border-[#B8552E] focus:ring-2 focus:ring-[#B8552E]/30 transition min-h-[44px]"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#211915] mb-1">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. vikram@example.com"
                        className="w-full px-3.5 py-3 rounded-xl bg-[#FAF5ED] border-2 border-[#183D32]/20 text-[#211915] font-medium text-base sm:text-sm placeholder:text-[#382C24]/60 focus:bg-[#FFFFFF] focus:outline-none focus:border-[#B8552E] focus:ring-2 focus:ring-[#B8552E]/30 transition min-h-[44px]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#211915] mb-1">
                      Message
                    </label>
                    <textarea
                      rows="4"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us what's on your mind or request a table..."
                      className="w-full px-3.5 py-3 rounded-xl bg-[#FAF5ED] border-2 border-[#183D32]/20 text-[#211915] font-medium text-base sm:text-sm placeholder:text-[#382C24]/60 focus:bg-[#FFFFFF] focus:outline-none focus:border-[#B8552E] focus:ring-2 focus:ring-[#B8552E]/30 transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#123329] hover:bg-[#183D32] active:scale-[0.98] text-[#FFFFFF] text-xs sm:text-sm font-bold rounded-full shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer min-h-[48px] border border-[#123329]"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4 text-[#DD7F55]" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
