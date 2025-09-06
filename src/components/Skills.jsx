import React from 'react'
import { 
  Lightbulb, 
  Cpu, 
  Eye, 
  Hammer, 
  Users, 
  CheckCircle 
} from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      icon: Lightbulb,
      title: 'Design Thinking',
      skills: [
        { name: 'Conceptual Design', level: 90, context: 'From sketch to 3D modeling' },
        { name: 'Sustainable Design', level: 85, context: 'LEED principles & passive strategies' },
        { name: 'Urban Planning', level: 75, context: 'Site analysis & zoning compliance' },
        { name: 'Design Research', level: 80, context: 'User studies & precedent analysis' },
      ]
    },
    {
      icon: Cpu,
      title: 'Technical/BIM',
      skills: [
        { name: 'Revit', level: 75, context: 'Construction documentation' },
        { name: 'ArchiCAD', level: 85, context: 'Technical drawings & detailing' },
        { name: 'SketchUp', level: 70, context: 'Quick modeling & presentations' },
      ]
    },
    {
      icon: Eye,
      title: 'Visualization',
      skills: [
        { name: 'TwinMotion', level: 80, context: 'Real-time visualization' },
        { name: 'Adobe Creative Suite', level: 75, context: 'Post-production & layouts' },
        { name: 'Lumion', level: 70, context: 'Animation & walkthroughs' },
      ]
    },
    // {
    //   icon: Hammer,
    //   title: 'Fabrication',
    //   skills: [
    //     { name: 'Laser Cutting', level: 80, context: 'Model making & prototyping' },
    //     { name: '3D Printing', level: 75, context: 'Rapid prototyping' },
    //     { name: 'Woodworking', level: 70, context: 'Physical model construction' },
    //     { name: 'CNC Milling', level: 65, context: 'Digital fabrication' },
    //   ]
    // },
    {
      icon: Users,
      title: 'Soft Skills',
      skills: [
        { name: 'Team Leadership', level: 90, context: 'Led 5+ multidisciplinary teams' },
        { name: 'Client Communication', level: 85, context: 'Presentations & stakeholder meetings' },
        { name: 'Project Management', level: 80, context: 'Timeline coordination & deliverables' },
        { name: 'Problem Solving', level: 95, context: 'Design challenges & technical issues' },
      ]
    }
  ]

  const SkillBar = ({ skill }) => (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-medium">{skill.name}</span>
        <span className="text-sm text-accent font-mono">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div 
          className="bg-gradient-to-r from-accent to-blue-400 h-2 rounded-full transition-all duration-1000 ease-out skill-bar"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
      <p className="text-sm text-text-secondary">{skill.context}</p>
    </div>
  )

  return (
    <section id="skills" className="py-20">
      <div className="container-max section-padding">
        <div className="text-center mb-16 skills-header">
          <h2 className="text-4xl font-bold mb-6">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            A comprehensive toolkit developed through academic projects, internships, 
            and hands-on experience in architectural practice.
          </p>
        </div>

        <div className="flex overflow-x-auto gap-8 skills-grid min-w-0">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="card space-y-6 w-80 flex-shrink-0">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <category.icon size={24} className="text-accent" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar key={skillIndex} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8">Certifications & Training</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-center justify-center space-x-3 p-4 bg-surface rounded-lg">
              <CheckCircle size={20} className="text-accent" />
              <span>Manifesto for climate responsive design launch by Enabel</span>
            </div>
            <div className="flex items-center justify-center space-x-3 p-4 bg-surface rounded-lg">
              <CheckCircle size={20} className="text-accent" />
              <span>Sustainable school design for East Africa conference by Enabel</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills