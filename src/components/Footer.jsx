import React from 'react'
import { Heart, ArrowUp, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary border-t border-gray-800">
      <div className="container-max section-padding py-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left side - Copyright */}
          <div className="flex items-center space-x-4 mb-6 md:mb-0">
            <img src="/src/assets/images/logo.jpg" alt="logo" className="w-8 h-8 rounded-lg" />
            <div className="text-sm text-text-secondary">
              <p>© {currentYear} Namugambe Cissy. All rights reserved.</p>
              <p className="flex items-center space-x-1">
                <span>Built with</span>
                <Heart size={14} className="text-accent fill-current" />
                <span>by ACK</span>
              </p>
            </div>
          </div>

          {/* Center - Quick Links */}
          <div className="flex items-center space-x-6 mb-6 md:mb-0">
            <a
              href="#about"
              className="text-sm text-text-secondary hover:text-accent transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-sm text-text-secondary hover:text-accent transition-colors"
            >
              Projects
            </a>
            <a
              href="#experience"
              className="text-sm text-text-secondary hover:text-accent transition-colors"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="text-sm text-text-secondary hover:text-accent transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Right side - Back to top */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-4">
              <a href="#" className="text-text-secondary hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-text-secondary hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-text-secondary hover:text-accent transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-text-secondary hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-text-secondary hover:text-accent transition-colors">
                <Youtube size={20} />
              </a>
            </div>
            
            
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-surface hover:bg-accent rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} className="group-hover:text-primary transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer