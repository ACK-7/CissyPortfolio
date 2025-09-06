import React from 'react'
import { Download, ExternalLink, MapPin, Calendar, Building } from 'lucide-react'

const CVExperience = () => {
  const experiences = [
    {
      title: 'Casual Worker at Marriot Hotel Construction site',
      location: 'Nsambya, Kampala',
      period: 'Jun 2020 - January 2021',
      type: 'Internship',
      achievements: [
        'Post Tension engineering works for storey buildings',
        'Steel bending and fixing of concrete slabs',
        'Site carpentry works, dampproofing and painting works',
        'Landsurvey which included setting out of columns'
      ],
      skills: ['Concrete works', 'Steel fixing', 'Carpentry', 'Site Surveying']
    },
    {
      title: 'Training at Mvara Church of Uganda',
      location: 'Arua, Uganda',
      period: 'April 2021  - May 2021',
      type: 'Internship',
      achievements: [
        'Site setting out and surveying',
        'Site safety and management',
        'Excavation and masonry works',
      ],
      skills: ['Site Surveying', 'Masonry', 'Excavation', 'Site Safety' ]
    },
    {
      title: 'Student Internship',
      company: 'Smart Globe Architects',
      location: 'Kirinya, Bweyogerere',
      period: 'May 2022 - July 2022',
      type: 'Internship',
      achievements: [
        'Interpretation of client briefs and development of schematic designs for residential and commercial projects',
        'Physical planning acts and regulations compliance for building plans submission to Kampala Capital City Authority (KCCA)',
        'Collaborated with engineering faculty on interdisciplinary research'
      ],
      skills: ['ArchiCAD', 'Building Regulations']
    },
    {
      title: 'Student Internship',
      company: 'K.EUC Architects',
      location: 'Kabalagala, Kampala',
      period: 'Feb 2023 - Mar 2023',
      type: 'Internship',
      achievements: [
        'Office and work environment ethics',
        'Designing and drafting of real-life projects',
        'Conducted site visits and construction observation, documenting progress and quality control issues',
        'Prepared presentation materials for city planning commission, securing unanimous project approval'
      ],
      skills: ['Construction Documentation', 'Site Analysis']
    }
  ]

  const education = [
    {
      degree: 'Bachelor of Architecture',
      school: 'Kyambogo University',
      period: '2018 - 2023',
    },
    {
      degree: 'Uganda Advanced Certificate of Education (UACE)',
      school: 'Trinity College, Nabbingo',
      period: '2016 - 2017',
    }
  ]

  return (
    <section id="experience" className="py-20 bg-secondary">
      <div className="container-max section-padding">
        <div className="text-center mb-16 cv-header">
          <h2 className="text-4xl font-bold mb-6">
            Experience & <span className="text-gradient">Education</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
            Progressive experience in architectural practice, research, and leadership roles 
            with measurable contributions to project success and team performance.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Experience Timeline */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold mb-8 flex items-center space-x-2">
              <Building size={24} className="text-accent" />
              <span>Professional Experience</span>
            </h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-accent/30"></div>

              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-start space-x-6 pb-12 last:pb-0">
                  {/* Timeline dot */}
                  <div className="relative z-10 w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Building size={20} className="text-primary" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="bg-surface rounded-xl p-6">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-semibold">{exp.title}</h4>
                          <p className="text-accent font-medium">{exp.company}</p>
                        </div>
                        <div className="text-sm text-text-secondary mt-2 sm:mt-0 sm:text-right">
                          <div className="flex items-center space-x-1">
                            <Calendar size={14} />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center space-x-1 mt-1">
                            <MapPin size={14} />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Type Badge */}
                      <div className="mb-4">
                        <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium">
                          {exp.type}
                        </span>
                      </div>

                      {/* Achievements */}
                      <div className="space-y-3 mb-6">
                        {exp.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-text-secondary leading-relaxed">{achievement}</p>
                          </div>
                        ))}
                      </div>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="bg-gray-700 text-text-secondary px-3 py-1 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Education */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Education</h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="bg-surface rounded-lg p-6">
                    <h4 className="font-semibold text-accent mb-2">{edu.degree}</h4>
                    <p className="font-medium mb-2">{edu.school}</p>
                    <p className="text-sm text-text-secondary mb-3">{edu.period}</p>
                    <p className="text-sm text-text-secondary leading-relaxed">{edu.details}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Certifications</h3>
              <div className="space-y-4">
                <div className="bg-surface rounded-lg p-4">
                  <div className="font-medium text-accent">LEED Green Associate</div>
                  <div className="text-sm text-text-secondary">U.S. Green Building Council • 2023</div>
                </div>
                <div className="bg-surface rounded-lg p-4">
                  <div className="font-medium text-accent">Revit Professional</div>
                  <div className="text-sm text-text-secondary">Autodesk • 2023</div>
                </div>
                <div className="bg-surface rounded-lg p-4">
                  <div className="font-medium text-accent">OSHA 30-Hour</div>
                  <div className="text-sm text-text-secondary">Construction Safety • 2022</div>
                </div>
              </div>
            </div>

            {/* Awards */}
            {/* <div>
              <h3 className="text-xl font-semibold mb-6">Awards & Recognition</h3>
              <div className="space-y-4">
                <div className="bg-surface rounded-lg p-4">
                  <div className="font-medium text-accent">Outstanding Thesis Award</div>
                  <div className="text-sm text-text-secondary">UC Berkeley Architecture • 2024</div>
                </div>
                <div className="bg-surface rounded-lg p-4">
                  <div className="font-medium text-accent">Design Excellence Award</div>
                  <div className="text-sm text-text-secondary">AIA Student Competition • 2023</div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CVExperience