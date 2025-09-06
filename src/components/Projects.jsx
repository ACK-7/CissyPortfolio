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
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'The church required more seating space and transformation into a modern church with Catholic windows',
      role: 'Design consultant/supervisor',
      Year: '2024 - 2026',
      duration: '2 years',
      tags: ['Institutional', 'Renovation', 'Expansion', 'Modernization', 'Sustainable'],
      problem: 'Address the need for increased seating capacity and modern facilities while preserving the church\'s heritage.',
      approach: 'Conducted site analysis, engaged with stakeholders, and developed design concepts that balanced tradition with contemporary needs.',
      outcome: 'Successfully expanded seating capacity by 40%, improved accessibility, and integrated sustainable design features.',
      gallery: [
        'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1200'
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
      image: '/src/assets/images/tailor1.png',
      description: 'The workshop required a complete reorganization and interior design to give their clients a feel of architecture.',
      role: 'Design consultant/interior designer',
      Year: 'May-June',
      duration: '2 months',
      tags: ['Commercial', 'Reorganization', 'Interior Design', 'Public Space'],
      problem: 'Reorganize the workshop to create a cohesive and visually appealing space.',
      approach: 'Collaborated with the client to understand their vision, developed interior design concepts, and optimized space utilization.',
      outcome: 'Transformed the workshop into a vibrant and functional space that enhanced customer experience and increased foot traffic.',
      gallery: [
        '/src/assets/images/tailor2.png',
        '/src/assets/images/tailor3.png',
        '/src/assets/images/tailor4.png'
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
      image: '/src/assets/images/twet1.png',
      description: 'With the growing number of parioshioners, the canteen required exterior dinning space where a few can dine outside.',
      role: 'Design consultant',
      Year: 'January-August',
      duration: '8 months',
      tags: ['Commercial', 'Extension', 'Outdoor Dining', 'Public Space'],
      problem: 'Create an outdoor dining area that complements the existing canteen and accommodates more patrons.',
      approach: 'Conducted site analysis, developed design concepts that integrated with the existing structure, and selected durable materials for outdoor use.',
      outcome: 'Successfully added outdoor seating that increased overall capacity by 30% and enhanced the dining experience.',
      gallery: [
        '/src/assets/images/twet2.png',
        '/src/assets/images/twet3.png',
        '/src/assets/images/twet4.png'
      ],
      details: {
        client: 'KANSANGA TWEGATTE WOMEN\’S GROUP',
        location: 'Kampala, Uganda',
        software: 'ArchiCAD, TwinMotion'
      }
    },
    {
      id: 4,
      title: 'Dormitory/Class block',
      category: 'Institutional',
      year: '2023-2025',
      image: 'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'The project was an arleady designed upper primary class/dormitory with roof designed not to clients satisfaction',
      role: 'Design consultant/supervisor',
      Year: '2023 - 2025',
      duration: '2 years',
      tags: ['Dormitory', 'Class Block', 'Renovation', 'Roof Design', 'Sustainable'],
      problem: 'Redesign the roof to improve aesthetics, functionality, and sustainability while ensuring structural integrity.',
      approach: 'Collaborated with structural engineers, developed new roof design concepts, and selected eco-friendly materials.',
      outcome: 'Implemented a new roof design that enhanced the building\'s appearance, improved water drainage, and increased energy efficiency.',
      gallery: [
        'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=1200'
      ],
      details: {
        client: 'St. Kizito\'s Primary School',
        location: 'Kansanga, Kampala',
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
