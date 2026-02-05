import ServiceCard from '../components/ServiceCard';
import { BookOpen, Calculator, Globe, Palette, Music, Code } from 'lucide-react';

const services = [
  {
    icon: BookOpen,
    title: 'Reading & Writing',
    description: 'Build strong literacy skills through engaging stories, creative writing exercises, and personalized reading programs.',
    color: 'from-brand-blue to-brand-purple',
  },
  {
    icon: Calculator,
    title: 'Mathematics',
    description: 'Master math concepts from basic arithmetic to advanced problem-solving with interactive lessons and real-world applications.',
    color: 'from-brand-purple to-brand-pink',
  },
  {
    icon: Globe,
    title: 'Science & Discovery',
    description: 'Explore the wonders of science through hands-on experiments, virtual labs, and fascinating discoveries.',
    color: 'from-brand-pink to-brand-orange',
  },
  {
    icon: Palette,
    title: 'Creative Arts',
    description: 'Express creativity through art, design, and visual storytelling while developing fine motor skills and imagination.',
    color: 'from-brand-orange to-brand-yellow',
  },
  {
    icon: Music,
    title: 'Music & Rhythm',
    description: 'Discover the joy of music with lessons in rhythm, melody, and musical expression for all skill levels.',
    color: 'from-brand-yellow to-brand-orange',
  },
  {
    icon: Code,
    title: 'Coding & Technology',
    description: 'Learn programming fundamentals and computational thinking through fun, age-appropriate coding challenges.',
    color: 'from-brand-blue to-brand-purple',
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-brand-orange/20 via-brand-pink/20 to-brand-purple/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gray-900 dark:text-white">Our</span>{' '}
              <span className="bg-gradient-to-r from-brand-orange via-brand-pink to-brand-purple bg-clip-text text-transparent">
                Programs
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              Comprehensive learning programs designed to help every child excel in their educational journey
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-brand-purple/10 via-brand-pink/10 to-brand-orange/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-brand-purple to-brand-pink bg-clip-text text-transparent">
                Not Sure Where to Start?
              </span>
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Our team is here to help you find the perfect program for your child's unique needs and interests
            </p>
            <a
              href="#contact"
              className="btn-primary inline-flex items-center gap-2"
            >
              Get Personalized Recommendations
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
