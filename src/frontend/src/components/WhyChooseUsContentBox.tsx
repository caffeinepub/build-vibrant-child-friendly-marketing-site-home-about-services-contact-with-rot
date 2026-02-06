interface WhyChooseUsContent {
  heading: string;
  subtitle: string;
  content: {
    expertGuidance: {
      heading: string;
      text: string;
    };
    dynamicFaculty: {
      heading: string;
      youngProfessionals: {
        heading: string;
        points: string[];
      };
      seasonedExperts: {
        heading: string;
        points: string[];
      };
    };
    personalizedAttention: {
      heading: string;
      intro: string;
      points: string[];
      closing: string;
    };
    beyondClassroom: {
      heading: string;
      intro: string;
      points: string[];
      closing: string;
    };
  };
}

interface WhyChooseUsContentBoxProps {
  data: WhyChooseUsContent;
}

export default function WhyChooseUsContentBox({ data }: WhyChooseUsContentBoxProps) {
  return (
    <div className="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed">
      {/* Expert Guidance */}
      <div>
        <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 dark:text-white">
          {data.content.expertGuidance.heading}
        </h3>
        <p className="text-base sm:text-lg">
          {data.content.expertGuidance.text}
        </p>
      </div>

      {/* Dynamic Teaching Faculty */}
      <div>
        <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          {data.content.dynamicFaculty.heading}
        </h3>
        
        {/* Young Professionals */}
        <div className="mb-4">
          <h4 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900 dark:text-white">
            {data.content.dynamicFaculty.youngProfessionals.heading}
          </h4>
          <ul className="list-none space-y-2 ml-4">
            {data.content.dynamicFaculty.youngProfessionals.points.map((point, index) => (
              <li key={index} className="text-base sm:text-lg flex items-start">
                <span className="mr-2 text-brand-purple font-bold">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Seasoned Experts */}
        <div>
          <h4 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900 dark:text-white">
            {data.content.dynamicFaculty.seasonedExperts.heading}
          </h4>
          <ul className="list-none space-y-2 ml-4">
            {data.content.dynamicFaculty.seasonedExperts.points.map((point, index) => (
              <li key={index} className="text-base sm:text-lg flex items-start">
                <span className="mr-2 text-brand-pink font-bold">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Personalized Attention */}
      <div>
        <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 dark:text-white">
          {data.content.personalizedAttention.heading}
        </h3>
        <p className="text-base sm:text-lg mb-3">
          {data.content.personalizedAttention.intro}
        </p>
        <ul className="list-none space-y-2 ml-4 mb-3">
          {data.content.personalizedAttention.points.map((point, index) => (
            <li key={index} className="text-base sm:text-lg flex items-start">
              <span className="mr-2 text-brand-orange font-bold">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <p className="text-base sm:text-lg">
          {data.content.personalizedAttention.closing}
        </p>
      </div>

      {/* Education Beyond the Classroom */}
      <div>
        <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 dark:text-white">
          {data.content.beyondClassroom.heading}
        </h3>
        <p className="text-base sm:text-lg mb-3">
          {data.content.beyondClassroom.intro}
        </p>
        <ul className="list-none space-y-2 ml-4 mb-3">
          {data.content.beyondClassroom.points.map((point, index) => (
            <li key={index} className="text-base sm:text-lg flex items-start">
              <span className="mr-2 text-brand-blue font-bold">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <p className="text-base sm:text-lg">
          {data.content.beyondClassroom.closing}
        </p>
      </div>
    </div>
  );
}
