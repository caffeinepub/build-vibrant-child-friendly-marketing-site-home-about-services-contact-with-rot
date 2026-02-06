import { BookOpen, Lightbulb, Brain, Heart, Users, Target, Sparkles, CheckCircle2, Award, Rocket } from 'lucide-react';
import DecorativeAccents from '../components/DecorativeAccents';
import { dreamonomyCopy } from '../content/dreamonomyCopy';

export default function ServicesPage() {
  const { services } = dreamonomyCopy;
  
  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 hero-bg-simple overflow-hidden">
        <DecorativeAccents variant="section" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-brand-orange via-brand-pink to-brand-purple bg-clip-text text-transparent">
                {services.hero.title}
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
              {services.hero.subtitle}
            </p>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
              {services.hero.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Services Content */}
      <section className="relative py-16 sm:py-24 bg-white dark:bg-gray-900 overflow-hidden">
        <DecorativeAccents variant="sparse" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto space-y-20">
            
            {/* Section 1: Core Academic Subjects */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center shadow-lg">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold mb-2">
                    <span className="bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">
                      1. Core Academic Subjects (Elementary K–10)
                    </span>
                  </h2>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    {services.sections[0].intro}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.sections[0].subjects?.map((subject, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-5 border border-blue-100 dark:border-gray-600 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0 mt-1" />
                      <p className="text-gray-800 dark:text-gray-200 font-medium leading-relaxed">{subject}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-3">
                  <Target className="w-7 h-7 text-brand-purple" />
                  {services.sections[0].approach?.heading}
                </h3>
                <ul className="space-y-3">
                  {services.sections[0].approach?.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-lg text-gray-700 dark:text-gray-300">
                      <Sparkles className="w-5 h-5 text-brand-yellow flex-shrink-0 mt-1" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-xl border-l-4 border-brand-purple">
                  <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed font-medium">
                    {services.sections[0].closing}
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: Interdisciplinary Learning */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-purple to-brand-pink flex items-center justify-center shadow-lg">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold mb-2">
                    <span className="bg-gradient-to-r from-brand-purple to-brand-pink bg-clip-text text-transparent">
                      2. Out-of-Syllabus & Interdisciplinary Learning (Our USP)
                    </span>
                  </h2>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    {services.sections[1].intro}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.sections[1].subjects?.map((subject, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-5 border border-purple-100 dark:border-gray-600 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-brand-purple flex-shrink-0 mt-1" />
                      <p className="text-gray-800 dark:text-gray-200 font-medium leading-relaxed">{subject}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-3">
                  <Rocket className="w-7 h-7 text-brand-pink" />
                  {services.sections[1].benefits?.heading}
                </h3>
                <ul className="space-y-3">
                  {services.sections[1].benefits?.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-lg text-gray-700 dark:text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-brand-pink flex-shrink-0 mt-1" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Section 3: AI Education */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-pink to-brand-orange flex items-center justify-center shadow-lg">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold mb-2">
                    <span className="bg-gradient-to-r from-brand-pink to-brand-orange bg-clip-text text-transparent">
                      3. Responsible AI Education for Children
                    </span>
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.sections[2].positioning?.map((line, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-pink-50 to-orange-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 border-2 border-brand-pink dark:border-gray-600 shadow-lg">
                    <p className="text-xl font-bold text-gray-900 dark:text-white leading-relaxed">
                      {line}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-3">
                  <Brain className="w-7 h-7 text-brand-orange" />
                  {services.sections[2].curriculum?.heading}
                </h3>
                <ul className="space-y-3">
                  {services.sections[2].curriculum?.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-lg text-gray-700 dark:text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-1" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-5 bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-gray-700 dark:to-gray-600 rounded-xl border-l-4 border-brand-orange">
                  <p className="text-xl font-bold text-gray-900 dark:text-white leading-relaxed">
                    {services.sections[2].outcome}
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4: Journaling & Emotional Tracking */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-orange to-brand-yellow flex items-center justify-center shadow-lg">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold mb-2">
                    <span className="bg-gradient-to-r from-brand-orange to-brand-yellow bg-clip-text text-transparent">
                      4. Subject Journaling & Emotional Tracking
                    </span>
                  </h2>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed italic">
                    {services.sections[3].intro}
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  {services.sections[3].description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {services.sections[3].tracking?.map((item, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-5 border border-orange-100 dark:border-gray-600">
                      <div className="flex items-start gap-3">
                        <Heart className="w-5 h-5 text-brand-orange flex-shrink-0 mt-1" />
                        <p className="text-gray-800 dark:text-gray-200 font-medium leading-relaxed">{item}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-6 border-l-4 border-brand-yellow">
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-3">
                    <Target className="w-6 h-6 text-brand-yellow" />
                    {services.sections[3].benefits?.heading}
                  </h3>
                  <ul className="space-y-3">
                    {services.sections[3].benefits?.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-lg text-gray-800 dark:text-gray-200">
                        <CheckCircle2 className="w-5 h-5 text-brand-yellow flex-shrink-0 mt-1" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 5: Mentorship Programs */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-yellow to-brand-green flex items-center justify-center shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold mb-2">
                    <span className="bg-gradient-to-r from-brand-yellow to-brand-green bg-clip-text text-transparent">
                      5. Personalised Growth & Mentorship Programs
                    </span>
                  </h2>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed italic font-medium">
                    {services.sections[4].intro}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {services.sections[4].programs?.map((program, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-yellow-50 to-green-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 border-2 border-brand-green dark:border-gray-600 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-start gap-3">
                      <Users className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                      <p className="text-lg font-bold text-gray-900 dark:text-white leading-relaxed">{program}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-3">
                  <Target className="w-7 h-7 text-brand-green" />
                  Career Guidance & Future Planning
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  {services.sections[4].careerGuidance?.heading}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services.sections[4].careerGuidance?.points.map((point, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-5 border border-green-100 dark:border-gray-600">
                      <div className="flex items-start gap-3">
                        <Rocket className="w-5 h-5 text-brand-green flex-shrink-0 mt-1" />
                        <p className="text-gray-800 dark:text-gray-200 font-medium leading-relaxed">{point}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-br from-brand-purple via-brand-pink to-brand-orange overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl animate-float-delayed"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Transform Your Child's Learning Journey?
            </h2>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              Join DREAMONOMY and give your child the education they truly deserve—one that nurtures their mind, heart, and future.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-brand-purple px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl hover:shadow-2xl"
            >
              Get Started Today
              <Sparkles className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
