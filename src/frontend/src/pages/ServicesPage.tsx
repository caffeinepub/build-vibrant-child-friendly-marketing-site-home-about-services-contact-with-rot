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
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              {services.hero.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Services Content */}
      <section className="relative py-16 sm:py-24 bg-white dark:bg-gray-900 overflow-hidden">
        <DecorativeAccents variant="sparse" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto space-y-16">
            {services.sections.map((section, index) => (
              <div key={section.id} className="space-y-6">
                {/* Section Title */}
                <h2 className="text-3xl sm:text-4xl font-bold">
                  <span className="bg-gradient-to-r from-brand-purple to-brand-pink bg-clip-text text-transparent">
                    {index + 1}. {section.title}
                  </span>
                </h2>

                {/* Core Academic Subjects */}
                {section.id === 'core-academic' && (
                  <>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                      {section.intro}
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                      {section.subjects?.map((subject, idx) => (
                        <li key={idx} className="leading-relaxed">{subject}</li>
                      ))}
                    </ul>
                    {section.approach && (
                      <div className="mt-6">
                        <p className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                          {section.approach.heading}
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                          {section.approach.points.map((point, idx) => (
                            <li key={idx} className="leading-relaxed">{point}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {section.closing && (
                      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                        {section.closing}
                      </p>
                    )}
                  </>
                )}

                {/* Interdisciplinary Learning */}
                {section.id === 'interdisciplinary' && (
                  <>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                      {section.intro}
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                      {section.subjects?.map((subject, idx) => (
                        <li key={idx} className="leading-relaxed">{subject}</li>
                      ))}
                    </ul>
                    {section.benefits && (
                      <div className="mt-6">
                        <p className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                          {section.benefits.heading}
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                          {section.benefits.points.map((point, idx) => (
                            <li key={idx} className="leading-relaxed">{point}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </>
                )}

                {/* AI Education */}
                {section.id === 'ai-education' && (
                  <>
                    {section.positioning?.map((line, idx) => (
                      <p key={idx} className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                        {line}
                      </p>
                    ))}
                    {section.curriculum && (
                      <div className="mt-6">
                        <p className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                          {section.curriculum.heading}
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                          {section.curriculum.points.map((point, idx) => (
                            <li key={idx} className="leading-relaxed">{point}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {section.outcome && (
                      <p className="text-lg font-semibold text-gray-900 dark:text-gray-100 mt-4">
                        {section.outcome}
                      </p>
                    )}
                  </>
                )}

                {/* Journaling */}
                {section.id === 'journaling' && (
                  <>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                      {section.intro}
                    </p>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                      {section.description}
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                      {section.tracking?.map((item, idx) => (
                        <li key={idx} className="leading-relaxed">{item}</li>
                      ))}
                    </ul>
                    {section.benefits && (
                      <div className="mt-6">
                        <p className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                          {section.benefits.heading}
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                          {section.benefits.points.map((point, idx) => (
                            <li key={idx} className="leading-relaxed">{point}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </>
                )}

                {/* Mentorship */}
                {section.id === 'mentorship' && (
                  <>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                      {section.intro}
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                      {section.programs?.map((program, idx) => (
                        <li key={idx} className="leading-relaxed">{program}</li>
                      ))}
                    </ul>
                    {section.careerGuidance && (
                      <div className="mt-6">
                        <p className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                          {section.careerGuidance.heading}
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                          {section.careerGuidance.points.map((point, idx) => (
                            <li key={idx} className="leading-relaxed">{point}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
