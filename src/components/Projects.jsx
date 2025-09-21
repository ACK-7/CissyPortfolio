import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'Renovation and expansion of Our Lady of Mount Carmel Church',
      category: 'Institutional',
      year: '2024',
      image: '/images/ch1.jpg',
      description: 'The church required more seating space and transformation into a modern church with Catholic windows',
      role: 'Design consultant/supervisor',
      Year: '2024 - 2026',
      duration: '2 years',
      tags: ['Institutional', 'Renovation', 'Expansion', 'Modernization', 'Sustainable'],
      problem: 'Address the need for increased seating capacity and modern facilities while preserving the church\'s heritage.',
      approach: 'Conducted site analysis, engaged with stakeholders, and developed design concepts that balanced tradition with contemporary needs.',
      outcome: 'Successfully expanded seating capacity by 40%, improved accessibility, and integrated sustainable design features.',
      gallery: [
        '/images/ch2.jpg',
        '/images/ch3.jpg',
        '/images/ch4.jpg',
        '/images/ch5.png',
        '/images/ch6.png',
        '/images/ch7.png'
      ],
      details: {
        client: 'Our Lady of Mount Carmel Church',
        location: 'Kansanga, Kampala',
        software: 'ArchiCAD, TwinMotion'
      }
    },
    {
      id: 2,
      title: 'Reorganization and interior design of Tailoring workshop',
      category: 'Commercial',
      year: '2025',
      image: '/images/tailor1.png',
      description: 'The workshop required a complete reorganization and interior design to give their clients a feel of architecture.',
      role: 'Design consultant/interior designer',
      Year: 'May-June',
      duration: '2 months',
      tags: ['Commercial', 'Reorganization', 'Interior Design', 'Public Space'],
      problem: 'Reorganize the workshop to create a cohesive and visually appealing space.',
      approach: 'Collaborated with the client to understand their vision, developed interior design concepts, and optimized space utilization.',
      outcome: 'Transformed the workshop into a vibrant and functional space that enhanced customer experience and increased foot traffic.',
      gallery: [
        '/images/tailor2.png',
        '/images/tailor3.png',
        '/images/tailor4.png'
      ],
      details: {
        client: 'ML Designs',
        location: 'Kampala, Uganda',
        software: 'ArchiCAD, TwinMotion'
      }
    },
    {
      id: 3,
      title: 'Extension of Canteen',
      category: 'Commercial',
      year: '2025',
      image: '/images/twet1.png',
      description: 'With the growing number of parioshioners, the canteen required exterior dinning space where a few can dine outside.',
      role: 'Design consultant',
      Year: 'January-August',
      duration: '8 months',
      tags: ['Commercial', 'Extension', 'Outdoor Dining', 'Public Space'],
      problem: 'Create an outdoor dining area that complements the existing canteen and accommodates more patrons.',
      approach: 'Conducted site analysis, developed design concepts that integrated with the existing structure, and selected durable materials for outdoor use.',
      outcome: 'Successfully added outdoor seating that increased overall capacity by 30% and enhanced the dining experience.',
      gallery: [
        '/images/twet2.png',
        '/images/twet3.png',
        '/images/twet4.png'
      ],
      details: {
        client: 'KANSANGA TWEGATTE WOMEN\’S GROUP',
        location: 'Kampala, Uganda',
        software: 'ArchiCAD, TwinMotion'
      }
    },
    {
      id: 4,
      title: 'Family cottage',
      category: 'Residential',
      year: '2025',
      image: '/images/cott1.png',
      description: 'A family cottage located in a serene environment, designed to maximize natural light and ventilation while providing a cozy living space.',
      role: 'Design consultant/supervisor',
      Year: 'July - October',
      duration: '4 months',
      tags: ['Residential', 'Cottage', 'Sustainable Design', 'Natural Light'],
      problem: 'Design a family cottage that blends with the natural surroundings and meets the clients\' needs for comfort and sustainability.',
      approach: 'Engaged with the clients to understand their lifestyle, developed design concepts that emphasized natural light and ventilation, and selected eco-friendly materials.',
      outcome: 'Created a cozy and sustainable cottage that enhanced the family\'s connection to nature while providing modern amenities.',
      gallery: [
        '/images/cott1.png',
        '/images/cott2.png',
        '/images/cott3.png',
        '/images/cott4.png',
        '/images/cott5.png',
        '/images/cott6.png'
      ],
      details: {
        client: 'Medical Doctor',
        location: 'Mpigi, Kampala',
        software: 'ArchiCAD, TwinMotion'
      }
    }
  ]

  const categories = ['All', 'Residential', 'Commercial', 'Research', 'Healthcare']
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  return (
    <section id="projects" className="py-20 bg-secondary">
      <div className="container-max section-padding">
        <div className="text-center mb-16 projects-header">
          <h2 className="text-4xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
            A selection of projects demonstrating design leadership, technical expertise, 
            and collaborative problem-solving across various scales and typologies.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${ 
                  activeCategory === category
                    ? 'bg-accent text-primary'
                    : 'bg-surface text-text-secondary hover:text-accent hover:bg-surface/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 projects-grid">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  )
}

export default Projects
