import React from 'react'
import { Search, Lightbulb, Cog, Truck } from 'lucide-react'

const Process = () => {
  const processSteps = [
    {
      icon: Search,
      title: 'Research & Analysis',
      description: 'Comprehensive site analysis, user research, and precedent studies to inform design decisions.',
      details: [
        'Site surveys and environmental analysis',
        'Stakeholder interviews and user needs assessment',
        'Zoning and regulatory compliance review',
        'Market research and feasibility studies'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Lightbulb,
      title: 'Concept Development',
      description: 'Iterative design process from initial sketches to refined concepts with stakeholder feedback.',
      details: [
        'Conceptual sketching and ideation',
        'Digital modeling and visualization',
        'Design charrettes and team collaboration',
        'Client presentations and feedback integration'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Cog,
      title: 'Design Development',
      description: 'Technical refinement, systems coordination, and detailed documentation for construction.',
      details: [
        'BIM modeling and coordination',
        'MEP systems integration',
        'Material selection and specification',
        'Sustainability strategy implementation'
      ],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Truck,
      title: 'Delivery & Implementation',
      description: 'Construction documentation, permit coordination, and construction administration support.',
      details: [
        'Construction document preparation',
        'Permit application and approval process',
        'Contractor coordination and RFIs',
        'Construction observation and quality control'
      ],
      color: 'from-green-500 to-teal-500'
    }
  ]

  return (
    <section id="process" className="py-20">
      <div className="container-max section-padding">
        <div className="text-center mb-16 process-header">
          <h2 className="text-4xl font-bold mb-6">
            Design <span className="text-gradient">Process</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            A collaborative, research-driven approach that ensures successful project delivery 
            from initial concept through construction completion.
          </p>
        </div>

        {/* Process Flow */}
        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-accent/20 via-accent to-accent/20 transform -translate-y-1/2"></div>
          
          <div className="grid lg:grid-cols-4 gap-8 process-steps">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="bg-surface rounded-xl p-8 text-center relative z-10 h-full flex flex-col">
                  {/* Icon */}
                  <div className="relative mx-auto mb-6">
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mb-4`}>
                      <step.icon size={32} className="text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-primary font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                    <p className="text-text-secondary mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Details */}
                    <div className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-start space-x-2 text-sm text-text-secondary">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Mobile Connection Arrow */}
                {index < processSteps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-4 mb-4">
                    <div className="w-0.5 h-8 bg-accent"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process