import React from 'react'
import { MapPin, Calendar, Globe, Clock } from 'lucide-react'

const About = () => {
  const quickFacts = [
    { icon: Calendar, label: 'Graduated', value: '2024' },
    { icon: MapPin, label: 'Location', value: 'Kansanga, Kampala' },
    { icon: Globe, label: 'Languages', value: 'English, Luganda' },
    { icon: Clock, label: 'Availability', value: 'Immediate' },
  ]

  const milestones = [
    { year: '2022', title: 'Design Intern', description: 'Smart Globe Architects, Bweyogerere' },
    { year: '2023', title: 'Final Semester Project(Buganda Totem Museum)', description: 'Kyambogo University' },
    { year: '2024', title: 'Clerk Of Works', description: 'St. Kizito’s School, Kansanga' },
    { year: '2024', title: 'Bachelor of Architecture', description: 'Kyambogo University' },
  ]

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Main Content */}
          <div className="space-y-8 about-content">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                About <span className="text-gradient">Me</span>
              </h2>
              <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
                <p>
                  As a recent graduate of Architecture, I bring a unique blend of design thinking, 
                  technical expertise, and collaborative leadership to every project. My experience spans 
                  from conceptual design to construction documentation, with a particular focus on 
                  sustainable design.
                </p>
                <p>
                  Throughout my academic and professional journey, I've led multidisciplinary teams, 
                  coordinated with consultants, and delivered comprehensive project documentation. 
                  My proficiency in industry-standard software including Revit, TwinMotion, and Archicard, 
                  combined with my understanding of construction processes, enables me to bridge the 
                  gap between design vision and built reality.
                </p>
                <p>
                  I'm passionate about creating architecture that responds to environmental challenges 
                  while enhancing human experience. My approach emphasizes research-driven design, 
                  stakeholder collaboration, and innovative problem-solving.
                </p>
              </div>
            </div>

            {/* Quick Facts */}
            <div className="grid grid-cols-2 gap-6">
              {quickFacts.map((fact, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-surface rounded-lg">
                  <fact.icon size={20} className="text-accent flex-shrink-0" />
                  <div>
                    <div className="text-sm text-text-secondary">{fact.label}</div>
                    <div className="font-medium">{fact.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-8 about-timeline">
            <h3 className="text-2xl font-semibold mb-8">Key Milestones</h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-accent/30"></div>
              
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-start space-x-6 pb-8">
                  {/* Timeline dot */}
                  <div className="relative z-10 w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-sm">{milestone.year.slice(-2)}</span>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0 pb-4">
                    <div className="bg-surface p-6 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-semibold">{milestone.title}</h4>
                        <span className="text-sm text-accent font-mono">{milestone.year}</span>
                      </div>
                      <p className="text-text-secondary">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About