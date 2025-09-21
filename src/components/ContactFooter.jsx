import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle, XCircle, Loader } from 'lucide-react';

const ContactFooter = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ isSubmitting: true, isSubmitted: false, error: null });

    try {
      const response = await fetch('/.netlify/functions/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Something went wrong.');
      }

      setStatus({ isSubmitting: false, isSubmitted: true, error: null });
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus({ isSubmitting: false, isSubmitted: false, error: null }), 5000);

    } catch (error) {
      setStatus({ isSubmitting: false, isSubmitted: false, error: error.message });
      setTimeout(() => setStatus({ isSubmitting: false, isSubmitted: false, error: null }), 7000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'namugcissy@gmail.com',
      href: 'mailto:namugcissy@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+256 (704) 911-245',
      href: 'tel:+256704911245'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Kansanga, Kampala',
      href: 'https://maps.app.goo.gl/eNQrhB3DmzzEVQdV8'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/alexchen-architect',
      color: 'hover:text-blue-400'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/alexchen-architect',
      color: 'hover:text-gray-400'
    },
    {
      icon: Mail,
      label: 'Behance',
      href: 'https://behance.net/alexchen-architect',
      color: 'hover:text-blue-500'
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container-max section-padding">
        <div className="text-center mb-16 contact-header">
          <h2 className="text-4xl font-bold mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Ready to contribute to your next project. Available for full-time positions, 
            freelance opportunities, and collaborative ventures.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="contact-form">
            <h3 className="text-2xl font-semibold mb-8">Send a Message</h3>
            
            {status.isSubmitted && (
              <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 mb-6 flex items-center space-x-3">
                <CheckCircle size={20} className="text-green-400" />
                <span className="text-green-400">Message sent successfully!</span>
              </div>
            )}

            {status.error && (
              <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4 mb-6 flex items-center space-x-3">
                <XCircle size={20} className="text-red-400" />
                <span className="text-red-400">Error: {status.error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={status.isSubmitting}
                    className="w-full px-4 py-3 bg-surface border border-gray-700 rounded-lg focus:border-accent focus:outline-none transition-colors disabled:opacity-50"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={status.isSubmitting}
                    className="w-full px-4 py-3 bg-surface border border-gray-700 rounded-lg focus:border-accent focus:outline-none transition-colors disabled:opacity-50"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={status.isSubmitting}
                  rows={6}
                  className="w-full px-4 py-3 bg-surface border border-gray-700 rounded-lg focus:border-accent focus:outline-none transition-colors resize-vertical disabled:opacity-50"
                  placeholder="Tell me about your project, opportunity, or how we can collaborate..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status.isSubmitting}
                className="w-full btn-primary flex items-center justify-center space-x-2 group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status.isSubmitting ? (
                  <Loader size={20} className="animate-spin" />
                ) : (
                  <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                )}
                <span>{status.isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="contact-info">
            <h3 className="text-2xl font-semibold mb-8">Get in Touch</h3>
            
            {/* Contact Details */}
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center space-x-4 p-4 bg-surface rounded-lg hover:bg-surface/80 transition-colors group"
                >
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                    <info.icon size={20} className="text-accent" />
                  </div>
                  <div>
                    <div className="text-sm text-text-secondary">{info.label}</div>
                    <div className="font-medium group-hover:text-accent transition-colors">
                      {info.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability */}
            <div className="mt-12 p-6 bg-gradient-to-r from-accent/10 to-blue-500/10 rounded-xl">
              <h4 className="text-lg font-semibold mb-3">Current Availability</h4>
              <p className="text-text-secondary mb-4">
                Actively seeking full-time opportunities in architectural design, 
                BIM coordination, and sustainable design roles.
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-green-400">Available Immediately</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactFooter