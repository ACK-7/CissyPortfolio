import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

export const useGsapAnimations = () => {
  useEffect(() => {
    // Set up GSAP animations
    const initAnimations = () => {
      // Hero section animations
      gsap.fromTo('.hero-content', 
        { 
          opacity: 0, 
          y: 50 
        },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          ease: 'power3.out',
          delay: 0.2
        }
      )

      gsap.fromTo('.hero-visual', 
        { 
          opacity: 0, 
          scale: 0.8 
        },
        { 
          opacity: 1, 
          scale: 1, 
          duration: 1.2, 
          ease: 'power3.out',
          delay: 0.4
        }
      )

      // Section headers animation
      gsap.utils.toArray('.about-content, .skills-header, .projects-header, .process-header, .cv-header, .contact-header').forEach((element) => {
        gsap.fromTo(element,
          {
            opacity: 0,
            y: 30
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      })

      // Timeline animations
      gsap.utils.toArray('.about-timeline').forEach((timeline) => {
        const items = timeline.querySelectorAll('.relative')
        gsap.fromTo(items,
          {
            opacity: 0,
            x: -30
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: timeline,
              start: 'top 70%',
              end: 'bottom 30%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      })

      // Skills grid animation
      gsap.utils.toArray('.skills-grid .card').forEach((card, index) => {
        gsap.fromTo(card,
          {
            opacity: 0,
            y: 40,
            scale: 0.9
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              end: 'bottom 15%',
              toggleActions: 'play none none reverse'
            },
            delay: index * 0.1
          }
        )
      })

      // Skill bars animation
      gsap.utils.toArray('.skill-bar').forEach((bar) => {
        const width = bar.style.width
        gsap.fromTo(bar,
          {
            width: '0%'
          },
          {
            width: width,
            duration: 1.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: bar,
              start: 'top 90%',
              end: 'bottom 10%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      })

      // Projects grid animation
      gsap.utils.toArray('.project-card').forEach((card, index) => {
        gsap.fromTo(card,
          {
            opacity: 0,
            y: 50,
            rotationY: 15
          },
          {
            opacity: 1,
            y: 0,
            rotationY: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              end: 'bottom 15%',
              toggleActions: 'play none none reverse'
            },
            delay: index * 0.15
          }
        )
      })

      // Process steps animation
      gsap.utils.toArray('.process-steps > div').forEach((step, index) => {
        gsap.fromTo(step,
          {
            opacity: 0,
            y: 60,
            scale: 0.8
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: step,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse'
            },
            delay: index * 0.2
          }
        )
      })

      // Contact form animation
      gsap.utils.toArray('.contact-form, .contact-info').forEach((element, index) => {
        gsap.fromTo(element,
          {
            opacity: 0,
            x: index === 0 ? -40 : 40
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse'
            },
            delay: index * 0.2
          }
        )
      })

      // Project modal animation
      gsap.utils.toArray('.project-modal').forEach((modal) => {
        gsap.fromTo(modal,
          {
            opacity: 0,
            scale: 0.9,
            y: 50
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.4,
            ease: 'power2.out'
          }
        )
      })

      // Hover animations for project cards
      gsap.utils.toArray('.project-card').forEach((card) => {
        const tl = gsap.timeline({ paused: true })
        
        tl.to(card, {
          y: -10,
          scale: 1.02,
          duration: 0.3,
          ease: 'power2.out'
        })

        card.addEventListener('mouseenter', () => tl.play())
        card.addEventListener('mouseleave', () => tl.reverse())
      })

      // Parallax effect for hero visual elements
      gsap.utils.toArray('.hero-visual > div > div > div').forEach((element, index) => {
        gsap.to(element, {
          y: -30 * (index + 1),
          scrollTrigger: {
            trigger: '.hero-visual',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
          }
        })
      })
    }

    // Initialize animations after a short delay to ensure DOM is ready
    const timer = setTimeout(initAnimations, 100)

    // Cleanup function
    return () => {
      clearTimeout(timer)
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  // Utility function to animate page transitions
  const animatePageTransition = (element, direction = 'in') => {
    if (direction === 'in') {
      gsap.fromTo(element,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
      )
    } else {
      gsap.to(element,
        { opacity: 0, y: -30, duration: 0.4, ease: 'power2.in' }
      )
    }
  }

  // Utility function for staggered animations
  const staggerAnimation = (elements, options = {}) => {
    const defaults = {
      opacity: 0,
      y: 30,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out'
    }
    
    const config = { ...defaults, ...options }
    
    gsap.fromTo(elements, 
      { opacity: config.opacity, y: config.y },
      { 
        opacity: 1, 
        y: 0, 
        duration: config.duration,
        stagger: config.stagger,
        ease: config.ease
      }
    )
  }

  return {
    animatePageTransition,
    staggerAnimation
  }
}