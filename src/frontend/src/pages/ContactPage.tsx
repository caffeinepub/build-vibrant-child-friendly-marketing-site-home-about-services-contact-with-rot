import ContactForm from '../components/ContactForm';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-brand-blue/20 via-brand-purple/20 to-brand-pink/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-brand-purple to-brand-pink bg-clip-text text-transparent">
                Get in Touch
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              We'd love to hear from you! Whether you have questions or want to learn more about our programs, we're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-8">
                <span className="text-gray-900 dark:text-white">Start a</span>{' '}
                <span className="bg-gradient-to-r from-brand-orange to-brand-pink bg-clip-text text-transparent">
                  Conversation
                </span>
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                Our friendly team is ready to answer your questions and help you find the perfect learning path for your child.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    title: 'Email',
                    content: 'hello@learnhub.example',
                    color: 'from-brand-blue to-brand-purple',
                  },
                  {
                    icon: Phone,
                    title: 'Phone',
                    content: '+1 (555) 123-4567',
                    color: 'from-brand-purple to-brand-pink',
                  },
                  {
                    icon: MapPin,
                    title: 'Address',
                    content: '123 Learning Street, Education City, EC 12345',
                    color: 'from-brand-pink to-brand-orange',
                  },
                  {
                    icon: Clock,
                    title: 'Hours',
                    content: 'Monday - Friday: 9:00 AM - 6:00 PM',
                    color: 'from-brand-orange to-brand-yellow',
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
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
