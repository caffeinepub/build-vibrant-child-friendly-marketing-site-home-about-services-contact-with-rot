import { Target, Heart, Lightbulb, Shield, Star, Rocket, Award } from 'lucide-react';
import DecorativeAccents from '../components/DecorativeAccents';
import { dreamonomyCopy } from '../content/dreamonomyCopy';

export default function AboutWhyPage() {
  const { about } = dreamonomyCopy;

  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 hero-bg-simple overflow-hidden">
        <DecorativeAccents variant="section" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-brand-purple to-brand-pink bg-clip-text text-transparent">
                {about.hero.title}
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              {about.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="relative py-16 sm:py-24 bg-white dark:bg-gray-900 overflow-hidden">
        <DecorativeAccents variant="sparse" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/assets/generated/illustration-learning.dim_1200x800.png"
                alt="DREAMONOMY Creative Academy"
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-brand-orange to-brand-pink bg-clip-text text-transparent">
                  {about.story.heading}
                </span>
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                {about.story.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
        <DecorativeAccents variant="section" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-brand-purple to-brand-pink bg-clip-text text-transparent">
                {about.philosophy.heading}
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {about.philosophy.subheading}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {about.philosophy.principles.map((item, index) => {
              const icons = [Lightbulb, Heart, Target];
              const colors = [
                'from-brand-yellow to-brand-orange',
                'from-brand-pink to-brand-orange',
                'from-brand-blue to-brand-purple',
              ];
              const Icon = icons[index];
              
              return (
                <div
                  key={index}
                  className="philosophy-card group"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colors[index]} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-16 sm:py-24 bg-white dark:bg-gray-900 overflow-hidden">
        <DecorativeAccents variant="sparse" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-brand-orange via-brand-pink to-brand-purple bg-clip-text text-transparent">
                {about.whyChooseUs.heading}
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {about.whyChooseUs.subheading}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {about.whyChooseUs.reasons.map((item, index) => {
              const icons = [Shield, Star, Rocket, Award];
              const Icon = icons[index];
              
              return (
                <div
                  key={index}
                  className="why-card group"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-brand-purple to-brand-pink flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
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
                <span className="bg-gradient-to-r from-brand-orange to-brand-pink bg-clip-text text-transparent">
                  {about.founder.heading}
                </span>
              </h2>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 sm:p-12 border border-gray-200 dark:border-gray-700">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8 italic">
                "{about.founder.message}"
              </p>
              <p className="text-right text-gray-900 dark:text-white font-semibold">
                — {about.founder.signature}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
