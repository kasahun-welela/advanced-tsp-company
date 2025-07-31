import PageHero from "@/components/common/PageHero";
import SectionTitle from "@/components/common/SectionTitle";
import {
  Target,
  Users,
  TrendingUp,
  Heart,
  Zap,
  ShieldCheck,
  Cloud,
  MonitorSmartphone,
  Lightbulb,
  BookOpen,
} from "lucide-react";
import CTA from "@/components/common/CTA";

function AboutPage() {
  const services = [
    {
      icon: MonitorSmartphone,
      title: "Custom Software Development",
      description:
        "We design and develop custom software from concept to deployment.",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description:
        "Secure, scalable cloud infrastructure to reduce operational costs.",
    },
    {
      icon: Lightbulb,
      title: "IT Consulting",
      description: "Strategic guidance to leverage technology for growth.",
    },
    {
      icon: ShieldCheck,
      title: "Managed IT Services",
      description: "Proactive support and monitoring for smooth operations.",
    },
    {
      icon: Zap,
      title: "Cybersecurity",
      description: "Robust protection against digital threats.",
    },
    {
      icon: BookOpen,
      title: "Learning & Training",
      description:
        "Empower your team and advance your career with comprehensive technology training programs and professional development courses.",
    },
  ];

  const reasons = [
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled professionals delivering tailored solutions.",
    },
    {
      icon: Heart,
      title: "Client-Centered Approach",
      description: "Customized support for your specific needs.",
    },
    {
      icon: Zap,
      title: "Innovation-Driven",
      description: "We stay ahead of the curve for your advantage.",
    },
    {
      icon: TrendingUp,
      title: "Results-Oriented",
      description: "We focus on outcomes that impact your growth.",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Integrity",
      description:
        "We believe in transparency and honesty in every aspect of our business.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with clients and teams for shared success.",
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Our projects meet the highest quality standards.",
    },
    {
      icon: TrendingUp,
      title: "Adaptability",
      description: "We evolve to meet your dynamic needs.",
    },
  ];

  return (
    <>
      <PageHero
        title="About Us"
        description="We are a trusted partner in digital transformation. With more than a decade of proven excellence, Advanced Technology Solutions delivers innovative, customized IT services that help businesses enhance performance, increase efficiency, and achieve sustainable growth in today’s competitive landscape."
      />

      <div className="container mx-auto px-4 pt-16 space-y-20">
        <section className="text-center max-w-4xl mx-auto">
          <SectionTitle
            title="Our Mission"
            description=" At Advanced Technology Solutions, our mission is to empower
            businesses with cutting-edge tools and strategies that solve
            real-world challenges. We are dedicated to making technology more
            accessible, helping organizations transform and thrive in an
            increasingly digital world."
          />
        </section>

        <section>
          <SectionTitle
            title="What We Do"
            description="Our range of services designed for your business."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 bg-card shadow-md rounded-2xl transform transition duration-300 hover:scale-105"
                >
                  <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section>
          <SectionTitle
            title="Why Choose Us"
            description="What sets us apart."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 border border-gray-200 dark:border-gray-700 rounded-2xl hover:shadow-lg transition-transform transform hover:scale-105"
                >
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section>
          <SectionTitle
            title="Our Values"
            description="Principles that guide us."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 bg-card rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:scale-105 text-center"
                >
                  <div className="w-14 h-14 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <SectionTitle
          title="Our Commitment to Your Success"
          description=" At Advanced Technology Solutions, we don't just provide services we
            build long-term relationships. We take pride in being a trusted
            partner who helps you succeed through every technological milestone.
            Whether you're looking to implement a new IT system, improve
            cybersecurity, or migrate to the cloud, we're here to guide you."
        />
      </div>
      <CTA
        title="Let’s Build the Future Together"
        description=" Ready to take your business to the next level? Get in touch with us
            today, and let's explore how our solutions can accelerate your
            growth."
      />
    </>
  );
}

export default AboutPage;
