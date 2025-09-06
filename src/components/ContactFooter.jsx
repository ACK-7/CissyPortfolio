import React, { useState } from 'react'
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle } from 'lucide-react'

const ContactFooter = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Portfolio Inquiry')
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )
    const mailtoLink = `namugcissy@gmail.com?subject=${subject}&body=${body}`
    
    // Open email client
    window.location.href = mailtoLink
    
    // Show success message
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

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
  ]

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
  ]

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
            
            {isSubmitted && (
              <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 mb-6 flex items-center space-x-3">
                <CheckCircle size={20} className="text-green-400" />
                <span className="text-green-400">Message sent! Your email client should open shortly.</span>
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
                    className="w-full px-4 py-3 bg-surface border border-gray-700 rounded-lg focus:border-accent focus:outline-none transition-colors"
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
                    className="w-full px-4 py-3 bg-surface border border-gray-700 rounded-lg focus:border-accent focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-surface border border-gray-700 rounded-lg focus:border-accent focus:outline-none transition-colors"
                  placeholder="Project inquiry, job opportunity, etc."
                />
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
                  rows={6}
                  className="w-full px-4 py-3 bg-surface border border-gray-700 rounded-lg focus:border-accent focus:outline-none transition-colors resize-vertical"
                  placeholder="Tell me about your project, opportunity, or how we can collaborate..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center space-x-2 group"
              >
                <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                <span>Send Message</span>
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