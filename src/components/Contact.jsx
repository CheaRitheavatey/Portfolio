import React, { useState } from 'react';
import { Mail, Send, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const formPayload = new FormData();
    formPayload.append('access_key', import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
    formPayload.append('name', formData.name);
    formPayload.append('email', formData.email);
    formPayload.append('message', formData.message);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formPayload
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 relative max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-4">
        <span className="text-primary">03.</span> Get In Touch
      </h2>

      <p className="text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed">
        I'm currently looking for new opportunities and my inbox is always open.
        Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>

      <div className="flex flex-wrap justify-center gap-8 mb-10 text-gray-400">
        <div className="flex items-center gap-2">
          <Mail size={18} className="text-primary" />
          <span>ritheavateychea@gmail.com</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone size={18} className="text-primary" />
          <span>+36705646692</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={18} className="text-primary" />
          <span>Pécs, Hungary</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="glass-card p-8 text-left max-w-2xl mx-auto flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm text-gray-300 font-medium">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              minLength="2"
              value={formData.name}
              onChange={handleChange}
              className="bg-surface/50 border border-white/10 rounded-lg px-4 py-3 text-gray-100 focus:outline-none focus:border-primary transition-colors"
              placeholder="John Doe"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm text-gray-300 font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              value={formData.email}
              onChange={handleChange}
              className="bg-surface/50 border border-white/10 rounded-lg px-4 py-3 text-gray-100 focus:outline-none focus:border-primary transition-colors"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-sm text-gray-300 font-medium">Message</label>
          <textarea
            id="message"
            name="message"
            required
            minLength="10"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="bg-surface/50 border border-white/10 rounded-lg px-4 py-3 text-gray-100 focus:outline-none focus:border-primary transition-colors resize-none"
            placeholder="Hello! I would like to discuss..."
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full mt-2 py-4 bg-primary hover:bg-primary/90 disabled:bg-primary/50 text-background font-bold rounded-lg transition-all flex items-center justify-center gap-2"
        >
          {status === 'sending' ? 'Sending...' : 'Send Message'}
          {!status && <Send size={18} />}
        </button>

        {status === 'success' && (
          <p className="text-green-400 text-center text-sm">Message sent successfully!</p>
        )}
        {status === 'error' && (
          <p className="text-red-400 text-center text-sm">Something went wrong. Please try again.</p>
        )}
      </form>
    </section>
  );
};

export default Contact;
