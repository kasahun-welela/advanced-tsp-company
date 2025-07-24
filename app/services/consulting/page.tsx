import React from "react";
import {
  Users,
  Target,
  TrendingUp,
  Lightbulb,
  Cog,
  BarChart,
} from "lucide-react";
import PageHero from "@/components/common/PageHero";
import CTA from "@/components/common/CTA";
import SectionTitle from "@/components/common/SectionTitle";

const Consulting = () => {
  const services = [
    {
      icon: Target,
      title: "Strategic IT Planning",
      description:
        "Develop comprehensive IT strategies aligned with your business objectives and growth plans.",
    },
    {
      icon: TrendingUp,
      title: "Digital Transformation",
      description:
        "Guide your organization through digital transformation initiatives to improve efficiency and competitiveness.",
    },
    {
      icon: Lightbulb,
      title: "Technology Assessment",
      description:
        "Evaluate your current technology stack and recommend improvements for optimal performance.",
    },
    {
      icon: Cog,
      title: "Process Optimization",
      description:
        "Streamline business processes through technology integration and automation solutions.",
    },
    {
      icon: BarChart,
      title: "Performance Analytics",
      description:
        "Implement data-driven insights and analytics to make informed technology decisions.",
    },
    {
      icon: Users,
      title: "Change Management",
      description:
        "Support your team through technology transitions with comprehensive change management strategies.",
    },
  ];
  const approach = [
    {
      step: "01",
      title: "Discovery",
      description:
        "Comprehensive analysis of your current technology landscape and business requirements.",
    },
    {
      step: "02",
      title: "Strategy",
      description:
        "Development of a tailored IT strategy that aligns with your business objectives.",
    },
    {
      step: "03",
      title: "Planning",
      description:
        "Detailed implementation roadmap with timelines, resources, and risk mitigation.",
    },
    {
      step: "04",
      title: "Execution",
      description:
        "Guided implementation with ongoing support and performance monitoring.",
    },
  ];

  return (
    <div>
      <PageHero
        title="IT Consulting & Strategy"
        description="Strategic technology guidance to align your IT investments with business goals and drive sustainable growth."
      />
      {/* Services Section */}
      <section className="py-10 ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Consulting Services"
            description="Expert guidance across all aspects of your technology strategy and implementation."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-10 ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Consulting Approach"
            description="A structured methodology to understand, plan, and implement technology solutions."
          />
          <div className="grid md:grid-cols-4 gap-8">
            {approach.map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">{phase.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-3">
                  {phase.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Ready to Transform Your IT Strategy?"
        description="Let's discuss how our expert consulting can help you achieve your technology goals."
      />
    </div>
  );
};

export default Consulting;
