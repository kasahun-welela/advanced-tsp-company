import React from "react";
import { Code, Smartphone, Globe, Database, Zap, Palette } from "lucide-react";
import PageHero from "@/components/common/PageHero";
import CTA from "@/components/common/CTA";
import SectionTitle from "@/components/common/SectionTitle";
import Link from "next/link";

const Development = () => {
  const services = [
    {
      icon: Globe,
      title: "Custom Web Applications",
      description:
        "Scalable, responsive web applications built with modern technologies and best practices.",
      link: "development/custom-web-applications",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android devices.",
      link: "development/mobile-development",
    },
    {
      icon: Database,
      title: "Backend Development",
      description:
        "Robust APIs, databases, and server-side logic to power your applications.",
      link: "development/backend-development",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Intuitive user interfaces and exceptional user experiences that drive engagement.",
      link: "development/ui-ux-design",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Speed optimization and performance tuning for lightning-fast user experiences.",
      link: "development/performance-optimization",
    },
    {
      icon: Code,
      title: "Legacy Modernization",
      description:
        "Modernize outdated systems with contemporary technologies and architectures.",
      link: "development/legacy-modernization",
    },
  ];

  const process = [
    {
      step: "01",
      phase: "Discovery",
      description: "Requirements gathering and project planning",
    },
    {
      step: "02",
      phase: "Design",
      description: "UI/UX design and prototyping",
    },
    {
      step: "03",
      phase: "Development",
      description: "Agile development with regular updates",
    },
    {
      step: "04",
      phase: "Testing",
      description: "Comprehensive quality assurance",
    },
    {
      step: "05",
      phase: "Deployment",
      description: "Launch and ongoing maintenance",
    },
  ];

  return (
    <div>
      <PageHero
        title="Custom Web & Software Development"
        description="Transform your ideas into powerful digital solutions with custom web applications, mobile apps, and software systems."
        linkText="Schedule a Consultation"
        linkHref="/schedule-consultation"
      />

      {/* Services Section */}
      <section className="py-10 ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Development Services"
            description="End-to-end software development solutions tailored to your business needs."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link href={service.link} key={index}>
                  <div className="bg-card rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {service.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-10 ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Development Process"
            description="A proven methodology that ensures quality, efficiency, and client satisfaction."
          />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {process.map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">{phase.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-3">
                  {phase.phase}
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
        title="Ready to Build Your Next Project?"
        description="Let's turn your ideas into reality with our expert development team."
      />
    </div>
  );
};

export default Development;
