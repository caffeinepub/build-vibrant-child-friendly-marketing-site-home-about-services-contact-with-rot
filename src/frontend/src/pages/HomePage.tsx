import { ArrowRight, Sparkles, Palette, Target, Code, Lightbulb, BookOpen, Users } from 'lucide-react';
import DecorativeAccents from '../components/DecorativeAccents';
import ServiceCard from '../components/ServiceCard';
import WhyChooseUsContentBox from '../components/WhyChooseUsContentBox';
import { dreamonomyCopy } from '../content/dreamonomyCopy';

type Page = 'home' | 'about' | 'services' | 'contact';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const { homepage, services, about } = dreamonomyCopy;

  const iconMap: Record<string, any> = {
    Palette,
    Target,
    Code,
    Lightbulb,
    BookOpen,
    Users,
  };

  const colorGradients = [
    'from-brand-blue to-brand-purple',
    'from-brand-purple to-brand-pink',
    'from-brand-pink to-brand-orange',
    'from-brand-orange to-brand-yellow',
    'from-brand-yellow to-brand-green',
    'from-brand-green to-brand-blue',
  ];

  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden hero-bg-simple">
        {/* Decorative Accents */}
        <DecorativeAccents variant="hero" />

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

            {/* User-provided hero copy */}
            <div className="space-y-6 max-w-4xl mx-auto">
              {homepage.hero.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className={`${
                    index === 0
                      ? 'text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white leading-tight'
                      : 'text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed'
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* CTA Button integrated into hero */}
            <div className="mt-10">
              <button
                onClick={() => onNavigate('contact')}
                className="btn-primary group"
              >
                {homepage.cta.buttonText}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float-delayed z-10">
          <Sparkles className="w-8 h-8 text-brand-yellow opacity-60" />
        </div>
        <div className="absolute bottom-32 right-16 animate-float z-10">
          <Sparkles className="w-6 h-6 text-brand-pink opacity-60" />
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-16 sm:py-24 bg-white dark:bg-gray-900 overflow-hidden">
        <DecorativeAccents variant="section" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">
                {services.hero.title}
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {services.hero.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.categories.map((service, index) => {
              const Icon = iconMap[service.icon] || Palette;
              return (
                <ServiceCard
                  key={index}
                  icon={Icon}
                  title={service.title}
                  description={service.description}
                  color={colorGradients[index % colorGradients.length]}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Message from the Founder Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
        <DecorativeAccents variant="sparse" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-brand-purple to-brand-pink bg-clip-text text-transparent">
                  {about.founder.heading}
                </span>
              </h2>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-100 dark:border-gray-700">
              <div className="space-y-6 text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                {about.founder.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              <p className="text-right text-lg font-semibold text-gray-900 dark:text-white">
                {about.founder.signature}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-16 sm:py-24 bg-white dark:bg-gray-900 overflow-hidden">
        <DecorativeAccents variant="section" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-brand-purple to-brand-pink bg-clip-text text-transparent">
                  {homepage.whyChooseUs.heading}
                </span>
              </h2>
              <p className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200">
                {homepage.whyChooseUs.subtitle}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-100 dark:border-gray-700">
              <WhyChooseUsContentBox data={homepage.whyChooseUs} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
