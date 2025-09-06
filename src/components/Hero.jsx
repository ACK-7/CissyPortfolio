import React from 'react'
import { ArrowDown, Download, Eye } from 'lucide-react'

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container-max section-padding py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 hero-content">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-7xl font-bold leading-tight">
                Hey, I'm Namugambe Cissy!
              </h1>
              <p className="text-xl text-text-secondary max-w-2xl leading-relaxed">
                Recent architecture graduate specializing in sustainable design 
                and collaborative project delivery. I bring a unique blend of design thinking, technical expertise, and collaborative leadership to every project.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToProjects}
                className="btn-primary flex items-center justify-center space-x-2 group"
              >
                <Eye size={20} />
                <span>View Projects</span>
              </button>
              <a
                href="/CV.pdf"
                download
                className="btn-secondary flex items-center justify-center space-x-2 group"
              >
                <Download size={20} />
                <span>Download CV</span>
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-800">
              <div>
                <div className="text-2xl font-bold text-accent">2024</div>
                <div className="text-sm text-text-secondary">Graduate</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">15+</div>
                <div className="text-sm text-text-secondary">Projects</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">3</div>
                <div className="text-sm text-text-secondary">Internships</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative hero-visual -mt-20">
            <img src="/images/img1.png" alt="hero image" className="w-full h-auto" />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToAbout}
            className="flex flex-col items-center space-y-2 text-text-secondary hover:text-accent transition-colors group"
            aria-label="Scroll to about section"
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown size={20} className="animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero