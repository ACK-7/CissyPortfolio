import React from 'react'
import { ExternalLink, Calendar, Users } from 'lucide-react'
import LazyImage from './LazyImage'

const ProjectCard = ({ project, index, onClick }) => {
  return (
    <div 
      className="card group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl project-card"
      onClick={onClick}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden rounded-lg mb-6">
        <LazyImage
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center justify-between text-white">
              <span className="text-sm font-medium">View Details</span>
              <ExternalLink size={16} />
            </div>
          </div>
        </div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-accent text-primary px-3 py-1 rounded-full text-sm font-medium">
            {project.category}
          </span>
        </div>
      </div>

      {/* Project Info */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <span className="text-sm text-text-secondary font-mono">{project.year}</span>
        </div>

        <p className="text-text-secondary leading-relaxed">
          {project.description}
        </p>

        {/* Project Meta */}
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-700">
          <div className="flex items-center space-x-2 text-sm text-text-secondary">
            <Calendar size={16} className="text-accent" />
            <span>{project.Year}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-text-secondary">
            <Calendar size={16} className="text-accent" />
            <span>{project.duration}</span>
          </div>
        </div>

        {/* Role */}
        <div className="bg-surface/50 rounded-lg p-3">
          <div className="text-sm text-text-secondary mb-1">Role</div>
          <div className="font-medium text-accent">{project.role}</div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="bg-gray-700 text-text-secondary px-2 py-1 rounded text-xs"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="text-xs text-text-secondary">
              +{project.tags.length - 3} more
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard