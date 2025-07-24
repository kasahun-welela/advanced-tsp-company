import { Users, Award, Video, Target } from "lucide-react";
import PageHero from "@/components/common/PageHero";
import CTA from "@/components/common/CTA";
import SectionTitle from "@/components/common/SectionTitle";
const Learning = () => {
  const programs = [
    {
      icon: Users,
      title: "Corporate Training",
      description:
        "Customized training programs designed specifically for your team and business needs.",
    },
    {
      icon: Award,
      title: "Certification Prep",
      description:
        "Industry-recognized certification preparation courses to advance your career.",
    },
    {
      icon: Video,
      title: "Online Learning",
      description:
        "Flexible online courses and webinars that fit your schedule and learning style.",
    },
    {
      icon: Target,
      title: "Skills Assessment",
      description:
        "Comprehensive evaluation of current skills and personalized learning recommendations.",
    },
  ];

  const benefits = [
    {
      icon: "🚀",
      title: "Career Advancement",
      description: "Accelerate your professional growth with in-demand skills",
    },
    {
      icon: "💡",
      title: "Practical Learning",
      description: "Hands-on training with real-world projects and scenarios",
    },
    {
      icon: "🎯",
      title: "Customized Content",
      description: "Tailored curriculum based on your specific goals and needs",
    },
    {
      icon: "🏆",
      title: "Industry Recognition",
      description:
        "Certificates and credentials recognized by leading employers",
    },
  ];
  const formats = [
    {
      title: "In-Person Training",
      description:
        "Interactive classroom sessions with hands-on labs and direct instructor support.",
      features: [
        "Face-to-face interaction",
        "Hands-on labs",
        "Group exercises",
        "Immediate feedback",
      ],
    },
    {
      title: "Virtual Instructor-Led",
      description:
        "Live online training sessions with real-time interaction and collaboration.",
      features: [
        "Live instruction",
        "Interactive discussions",
        "Screen sharing",
        "Recording available",
      ],
    },
    {
      title: "Self-Paced Online",
      description:
        "Flexible online modules that you can complete at your own pace and schedule.",
      features: [
        "Learn anytime",
        "Progress tracking",
        "Mobile accessible",
        "Lifetime access",
      ],
    },
  ];

  return (
    <>
      <PageHero
        title="Learning & Training"
        description="Empower your team and advance your career with comprehensive technology training programs and professional development courses."
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <section className="py-10 ">
          <SectionTitle
            title="Why Choose Our Training?"
            description="Experience the difference with our expert-led, practical approach to technology education."
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Learning Formats */}
        <section className="py-10 ">
          <SectionTitle
            title="Flexible Learning Formats"
            description="Choose the learning format that works best for you and your team."
          />
          <div className="grid md:grid-cols-3 gap-4 md:gap-8">
            {formats.map((format, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3">{format.title}</h3>
                <p className="dark:text-gray-300 text-gray-600 mb-4">
                  {format.description}
                </p>
                <ul className="space-y-2 ml-5">
                  {format.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center space-x-2"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="dark:text-gray-400 text-gray-600">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        <section className="py-10 ">
          <SectionTitle
            title="Training Programs"
            description="Comprehensive technology training programs and professional development courses."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/80 transition-colors">
                  <program.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {program.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <CTA
        title="Ready to Invest in Your Team's Growth?"
        description="Discover how our training programs can enhance your team's skills and drive business success."
      />
    </>
  );
};

export default Learning;
