import { ArrowRight, Sparkles, Users, Award, BookOpen } from 'lucide-react';

type Page = 'home' | 'about' | 'services' | 'contact';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-blue/20 via-brand-purple/20 to-brand-pink/20">
        {/* Background Decorative Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            src="/assets/generated/blob-shapes-set.dim_1600x900.png"
            alt=""
            className="absolute top-0 left-0 w-full h-full object-cover opacity-30 animate-float"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Rotating Logo Circle */}
            <div className="mb-10 sm:mb-12 flex justify-center">
              <div className="rotating-logo-container group">
                <div className="rotating-logo">
                  <img
                    src="/assets/Blue and White Vintage School Logo.png"
                    alt="Dreamonomy Creative Academy Logo"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-brand-orange via-brand-pink to-brand-purple bg-clip-text text-transparent">
                Unlock Your Child's
              </span>
              <br />
              <span className="text-gray-900 dark:text-white">Potential</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Personalized learning experiences that inspire curiosity, build confidence, and create lifelong learners
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => onNavigate('services')}
                className="btn-primary group"
              >
                Explore Programs
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="btn-secondary"
              >
                Get Started Today
              </button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float-delayed">
          <Sparkles className="w-8 h-8 text-brand-yellow opacity-60" />
        </div>
        <div className="absolute bottom-32 right-16 animate-float">
          <Sparkles className="w-6 h-6 text-brand-pink opacity-60" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-brand-purple to-brand-pink bg-clip-text text-transparent">
                Why Families
              </span>{' '}
              <span className="text-gray-900 dark:text-white">Choose Us</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We combine proven teaching methods with innovative technology to create engaging learning experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Expert Educators',
                description: 'Learn from passionate teachers who understand how children learn best',
                color: 'from-brand-blue to-brand-purple',
              },
              {
                icon: Award,
                title: 'Proven Results',
                description: 'Track progress with measurable outcomes and celebrate every milestone',
                color: 'from-brand-purple to-brand-pink',
              },
              {
                icon: BookOpen,
                title: 'Engaging Content',
                description: 'Interactive lessons that make learning fun and keep kids motivated',
                color: 'from-brand-pink to-brand-orange',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="feature-card group"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-brand-orange/10 via-brand-pink/10 to-brand-purple/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-brand-orange via-brand-pink to-brand-purple bg-clip-text text-transparent">
                Ready to Begin?
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of families who trust us to nurture their children's love of learning
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="btn-primary group"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
