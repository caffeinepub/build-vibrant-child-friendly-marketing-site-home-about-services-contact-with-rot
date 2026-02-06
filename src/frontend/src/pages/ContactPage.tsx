import ContactForm from '../components/ContactForm';
import DecorativeAccents from '../components/DecorativeAccents';
import { dreamonomyCopy } from '../content/dreamonomyCopy';

export default function ContactPage() {
  const { contact } = dreamonomyCopy;

  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 hero-bg-simple overflow-hidden">
        <DecorativeAccents variant="section" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-brand-purple to-brand-pink bg-clip-text text-transparent">
                {contact.hero.title}
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              {contact.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-16 sm:py-24 bg-white dark:bg-gray-900 overflow-hidden">
        <DecorativeAccents variant="sparse" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-8">
                <span className="bg-gradient-to-r from-brand-orange to-brand-pink bg-clip-text text-transparent">
                  {contact.intro.heading}
                </span>
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                {contact.intro.body}
              </p>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
