import CTA from "@/components/common/CTA";
import PageHero from "@/components/common/PageHero";
import ServiceCard from "@/components/common/ServiceCard";
import SectionTitle from "@/components/common/SectionTitle";
import { Monitor, Shield, Headphones, Clock, CheckCircle } from "lucide-react";

function ManagedServices() {
  const features = [
    {
      icon: Monitor,
      title: "24/7 Network Monitoring",
      description:
        "Continuous monitoring of your IT infrastructure to prevent issues before they impact your business.",
      link: "managed-services/network-monitoring",
    },
    {
      icon: Headphones,
      title: "Help Desk Support",
      description:
        "Dedicated technical support team available to resolve issues quickly and efficiently.",
      link: "managed-services/help-desk-technical-support",
    },
    {
      icon: Shield,
      title: "Proactive Maintenance",
      description:
        "Regular system updates, patches, and maintenance to ensure optimal performance and security.",
      link: "managed-services/proactive-monitoring-and-maintenance",
    },
    {
      icon: Clock,
      title: "Rapid Response",
      description:
        "Quick response times with guaranteed SLAs to minimize downtime and maintain productivity.",
      link: "managed-services/rapid-response",
    },
  ];

  const benefits = [
    "Reduced IT costs and overhead",
    "Improved system reliability and uptime",
    "Access to expert technical knowledge",
    "Scalable solutions that grow with your business",
    "Enhanced security and compliance",
    "Focus on core business activities",
  ];
  return (
    <>
      <PageHero
        title="Managed IT Services"
        description="Comprehensive IT infrastructure management that keeps your business running smoothly while you focus on growth."
        linkText="Schedule a Consultation"
        linkHref="/schedule-consultation"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Features Section */}
        <section className="py-20 ">
          <div className="max-w-7xl mx-auto ">
            <SectionTitle
              title="Our Managed IT Services"
              description="Complete IT support and management solutions tailored to your business needs."
            />
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <ServiceCard
                  key={index}
                  link={feature.link}
                  icon={<feature.icon className="w-6 h-6 text-white" />}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </section>
        <section>
          <SectionTitle
            title="What's Included"
            description="Our managed IT services provide comprehensive support for all your technology needs, from routine maintenance to emergency response."
          />
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4 md:gap-8 ">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-200">
                      {benefit}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <CTA
        title="Ready to Streamline Your IT Operations?"
        description="Let us handle your IT infrastructure so you can focus on growing your business."
      />
    </>
  );
}

export default ManagedServices;
