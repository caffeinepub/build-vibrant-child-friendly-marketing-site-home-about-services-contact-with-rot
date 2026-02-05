import { Target, Heart, Lightbulb, Shield, Star, Rocket } from 'lucide-react';

export default function AboutWhyPage() {
  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-brand-blue/20 via-brand-purple/20 to-brand-pink/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-brand-purple to-brand-pink bg-clip-text text-transparent">
                About Us
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              We're on a mission to make quality education accessible, engaging, and effective for every child
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 sm:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/assets/generated/illustration-learning.dim_1200x800.png"
                alt="Children learning together"
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">Our</span>{' '}
                <span className="bg-gradient-to-r from-brand-orange to-brand-pink bg-clip-text text-transparent">
                  Story
                </span>
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  Founded by educators and parents who believe every child deserves the opportunity to thrive, we've built a learning platform that combines the best of traditional teaching with modern innovation.
                </p>
                <p>
                  Our approach is rooted in understanding that each child learns differently. We create personalized pathways that adapt to individual needs, ensuring every student can progress at their own pace while building confidence and curiosity.
                </p>
                <p>
                  Today, we're proud to serve thousands of families worldwide, helping children discover their potential and develop skills that will serve them for a lifetime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-brand-purple/10 via-brand-pink/10 to-brand-orange/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gray-900 dark:text-white">Our</span>{' '}
              <span className="bg-gradient-to-r from-brand-purple to-brand-pink bg-clip-text text-transparent">
                Philosophy
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'Child-Centered',
                description: 'Every decision we make puts the child\'s needs, interests, and wellbeing first',
                color: 'from-brand-pink to-brand-orange',
              },
              {
                icon: Lightbulb,
                title: 'Curiosity-Driven',
                description: 'We nurture natural curiosity and encourage questions, exploration, and discovery',
                color: 'from-brand-yellow to-brand-orange',
              },
              {
                icon: Target,
                title: 'Goal-Oriented',
                description: 'Clear objectives and measurable progress help students see their growth',
                color: 'from-brand-blue to-brand-purple',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="philosophy-card group"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-brand-orange via-brand-pink to-brand-purple bg-clip-text text-transparent">
                Why Choose
              </span>{' '}
              <span className="text-gray-900 dark:text-white">LearnHub?</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              What sets us apart from other learning platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Shield,
                title: 'Trusted by Parents',
                description: 'Safe, secure, and transparent. We prioritize your child\'s safety and privacy in everything we do.',
              },
              {
                icon: Star,
                title: 'Proven Track Record',
                description: 'Thousands of success stories from families who\'ve seen real, measurable improvements in their children\'s learning.',
              },
              {
                icon: Rocket,
                title: 'Innovative Approach',
                description: 'We blend time-tested educational methods with cutting-edge technology to create engaging, effective learning experiences.',
              },
              {
                icon: Heart,
                title: 'Passionate Community',
                description: 'Join a supportive network of educators, parents, and learners who celebrate every achievement together.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="why-card group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-brand-purple to-brand-pink flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6 text-white" />
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
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
