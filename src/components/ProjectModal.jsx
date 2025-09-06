import React, { useEffect } from 'react'
import { X, ExternalLink, MapPin, Calendar, DollarSign, Award,} from 'lucide-react'
import LazyImage from './LazyImage'

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="bg-secondary rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto project-modal">
        {/* Header */}
        <div className="sticky top-0 bg-secondary border-b border-gray-700 p-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">{project.title}</h2>
            <p className="text-text-secondary">{project.category} • {project.year}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-surface rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          {/* Hero Image */}
          <div className="relative rounded-xl overflow-hidden mb-8">
            <LazyImage
              src={project.gallery[0]}
              alt={project.title}
              className="w-full h-96 object-cover"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-accent text-primary px-4 py-2 rounded-full font-medium">
                {project.category}
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Project Overview */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Project Overview</h3>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  {project.description}
                </p>
                
                {/* Problem, Approach, Outcome */}
                <div className="space-y-6">
                  <div className="bg-surface rounded-lg p-6">
                    <h4 className="font-semibold text-accent mb-3">Challenge</h4>
                    <p className="text-text-secondary">{project.problem}</p>
                  </div>
                  
                  <div className="bg-surface rounded-lg p-6">
                    <h4 className="font-semibold text-accent mb-3">Approach</h4>
                    <p className="text-text-secondary">{project.approach}</p>
                  </div>
                  
                  <div className="bg-surface rounded-lg p-6">
                    <h4 className="font-semibold text-accent mb-3">Outcome</h4>
                    <p className="text-text-secondary">{project.outcome}</p>
                  </div>
                </div>
              </div>

              {/* Gallery */}
              {project.gallery.length > 1 && (
                <div>
                  <h3 className="text-xl font-semibold mb-4">Project Gallery</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {project.gallery.slice(1).map((image, index) => (
                      <div key={index} className="rounded-lg overflow-hidden">
                        <LazyImage
                          src={image}
                          alt={`${project.title} - Image ${index + 2}`}
                          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tags */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Technologies & Methods</h3>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Project Details */}
              <div className="bg-surface rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Project Details</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Calendar size={18} className="text-accent mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Team Size</div>
                      <div className="text-sm text-text-secondary">{project.Year}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Calendar size={18} className="text-accent mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Duration</div>
                      <div className="text-sm text-text-secondary">{project.duration}</div>
                    </div>
                  </div>
                  
                  {/* <div className="flex items-start space-x-3">
                    <DollarSign size={18} className="text-accent mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Budget</div>
                      <div className="text-sm text-text-secondary">{project.budget}</div>
                    </div>
                  </div> */}
                  
                  <div className="flex items-start space-x-3">
                    <Award size={18} className="text-accent mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">My Role</div>
                      <div className="text-sm text-text-secondary">{project.role}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Details */}
              <div className="bg-surface rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Technical Specifications</h3>
                <div className="space-y-3">
                  {Object.entries(project.details).map(([key, value]) => (
                    <div key={key}>
                      <div className="text-sm text-text-secondary capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                      <div className="font-medium">{value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              {/* <div className="space-y-3">
                <button className="w-full btn-primary flex items-center justify-center space-x-2">
                  <ExternalLink size={18} />
                  <span>View Live Project</span>
                </button>
                <button className="w-full btn-secondary">
                  Download Case Study
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal