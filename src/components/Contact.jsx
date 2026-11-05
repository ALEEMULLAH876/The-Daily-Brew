import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Clock, Send, Sparkles } from 'lucide-react';

export default function Contact() {
  const [copiedField, setCopiedField] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const email = 'hello@thedailybrew.example';
  const phone = '+91 98765 43210';
  const location = 'Chennai';

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2200);
  };

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
    <section id="contact" className="py-20 sm:py-28 bg-[#FAF5ED] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#183D32]/10 text-[#183D32] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C66A42]" />
            <span>Connect & Visit</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#183D32] tracking-tight mb-4">
            Contact
          </h2>

          <p className="text-base sm:text-lg text-[#66554B] leading-relaxed">
            We would love to welcome you. Drop by our café in Chennai or reach out for inquiries and private table reservations.
          </p>
        </div>

        {/* Contact Grid: Contact Cards + Quick Message */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: 3 Compulsory Contact Items */}
          <div className="lg:col-span-5 space-y-4">
            {/* 1. Email Item */}
            <div className="bg-[#FDFBF7] rounded-3xl p-6 sm:p-7 border border-[#183D32]/12 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#183D32]/10 flex items-center justify-center text-[#183D32]">
                    <Mail className="w-6 h-6 text-[#C66A42]" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#66554B]">
                      Email Us
                    </span>
                    <a
                      href={`mailto:${email}`}
                      className="block font-serif text-lg sm:text-xl font-bold text-[#183D32] hover:text-[#C66A42] transition-colors break-all"
                    >
                      {email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(email, 'email')}
                  className="p-2.5 rounded-xl hover:bg-[#F5EBDD] text-[#66554B] hover:text-[#183D32] transition-colors cursor-pointer"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedField === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* 2. Phone Item */}
            <div className="bg-[#FDFBF7] rounded-3xl p-6 sm:p-7 border border-[#183D32]/12 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#183D32]/10 flex items-center justify-center text-[#183D32]">
                    <Phone className="w-6 h-6 text-[#C66A42]" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#66554B]">
                      Call or WhatsApp
                    </span>
                    <a
                      href={`tel:${phone.replace(/\s+/g, '')}`}
                      className="block font-serif text-lg sm:text-xl font-bold text-[#183D32] hover:text-[#C66A42] transition-colors"
                    >
                      {phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(phone, 'phone')}
                  className="p-2.5 rounded-xl hover:bg-[#F5EBDD] text-[#66554B] hover:text-[#183D32] transition-colors cursor-pointer"
                  title="Copy phone number"
                  aria-label="Copy phone number"
                >
                  {copiedField === 'phone' ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* 3. Location Item */}
            <div className="bg-[#FDFBF7] rounded-3xl p-6 sm:p-7 border border-[#183D32]/12 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#183D32]/10 flex items-center justify-center text-[#183D32]">
                    <MapPin className="w-6 h-6 text-[#C66A42]" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#66554B]">
                      Location
                    </span>
                    <div className="font-serif text-lg sm:text-xl font-bold text-[#183D32]">
                      {location}
                    </div>
                  </div>
                </div>

                <span className="px-3 py-1 text-xs font-medium bg-[#183D32]/10 text-[#183D32] rounded-full">
                  Tamil Nadu, India
                </span>
              </div>
            </div>

            {/* Operating Hours Box */}
            <div className="p-5 bg-[#F5EBDD] rounded-2xl border border-[#183D32]/10 flex items-center justify-between text-xs sm:text-sm text-[#30251F]">
              <span className="flex items-center gap-2 font-medium">
                <Clock className="w-4 h-4 text-[#C66A42]" />
                Operating Hours
              </span>
              <span className="font-semibold text-[#183D32]">Mon – Sun: 7:00 AM – 11:00 PM</span>
            </div>
          </div>

          {/* Right Column: Send a Note / Table Inquiry */}
          <div className="lg:col-span-7">
            <div className="bg-[#FDFBF7] rounded-3xl p-8 sm:p-10 border border-[#183D32]/12 shadow-sm">
              <div className="mb-6">
                <h3 className="font-serif text-2xl font-bold text-[#183D32] mb-1">
                  Send Us a Note
                </h3>
                <p className="text-sm text-[#66554B]">
                  Have a question about our roastery or reserving a table in Chennai? Send us a quick note.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-emerald-900">
                    Thank you!
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-800">
                    Your message has been sent to <span className="font-semibold">{email}</span>. We will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#30251F] mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Vikram Raman"
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF5ED] border border-[#183D32]/15 text-[#30251F] text-sm focus:outline-none focus:ring-2 focus:ring-[#C66A42] transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#30251F] mb-1.5">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. vikram@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF5ED] border border-[#183D32]/15 text-[#30251F] text-sm focus:outline-none focus:ring-2 focus:ring-[#C66A42] transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#30251F] mb-1.5">
                      Message
                    </label>
                    <textarea
                      rows="4"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us what's on your mind or request a table..."
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF5ED] border border-[#183D32]/15 text-[#30251F] text-sm focus:outline-none focus:ring-2 focus:ring-[#C66A42] transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#183D32] hover:bg-[#255B4B] text-[#FAF5ED] text-sm font-semibold rounded-full shadow-md hover:shadow-lg transition duration-200 cursor-pointer"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4 text-[#C66A42]" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

