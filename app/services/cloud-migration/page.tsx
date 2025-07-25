import { ArrowUp, Database, Globe, Lock, Zap } from "lucide-react";
import PageHero from "@/components/common/PageHero";
import CTA from "@/components/common/CTA";
import SectionTitle from "@/components/common/SectionTitle";

const CloudComputing = () => {
  const services = [
    {
      icon: ArrowUp,
      title: "Cloud Migration",
      description:
        "Seamless migration of your existing infrastructure to the cloud with minimal downtime.",
    },
    {
      icon: Database,
      title: "Cloud Storage Solutions",
      description:
        "Scalable and secure cloud storage options tailored to your data requirements.",
    },
    {
      icon: Globe,
      title: "Multi-Cloud Strategy",
      description:
        "Optimize costs and performance with strategic multi-cloud implementations.",
    },
    {
      icon: Lock,
      title: "Cloud Security",
      description:
        "Comprehensive security measures to protect your cloud-based assets and data.",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Continuous monitoring and optimization for peak cloud performance and cost efficiency.",
    },
  ];

  const whyMoveToCloud = [
    {
      title: "Cost Reduction",
      description:
        "Reduce IT infrastructure costs by up to 60% with cloud solutions.",
      percentage: "60%",
      color: "text-green-600",
    },
    {
      title: "Uptime Guarantee",
      description: "Enterprise-grade reliability with 99.9% uptime SLA.",
      percentage: "99.9%",
      color: "text-blue-600",
    },
    {
      title: "Global Accessibility",
      description: "Access your data and applications from anywhere, anytime.",
      percentage: "24/7",
      color: "text-purple-600",
    },
  ];

  const migrationProcess = [
    {
      step: "01",
      title: "Assessment",
      description:
        "Comprehensive analysis of your current infrastructure and requirements.",
    },
    {
      step: "02",
      title: "Planning",
      description:
        "Detailed migration strategy and timeline with risk mitigation.",
    },

    {
      step: "03",
      title: "Migration",
      description:
        "Careful execution of the migration plan with minimal disruption.",
    },
    {
      step: "04",
      title: "Optimization",
      description: "Post-migration optimization and ongoing support.",
    },
  ];
  return (
    <>
      <PageHero
        title="Cloud Computing & Migration"
        description=" Transform your business with scalable, secure, and cost-effective
              cloud solutions that drive innovation and growth."
        linkText="Schedule a Consultation"
        linkHref="/schedule-consultation"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services Section */}
        <section className="py-10">
          <SectionTitle
            title="Our Cloud Services"
            description="Comprehensive cloud solutions to meet all your business
              requirements."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
        {/* Why to cloud Section */}
        <section className="py-10">
          <SectionTitle
            title=" Why Move to the Cloud?"
            description="Discover the transformative benefits of cloud computing for your
              business."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {whyMoveToCloud.map((item) => (
              <div className="text-center" key={item.title}>
                <span className={`text-2xl font-bold ${item.color}`}>
                  {item.percentage}
                </span>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
        {/* Migration Process */}
        <section className="py-10">
          <SectionTitle
            title="Our Migration Process"
            description="A proven methodology to ensure smooth and successful cloud
              migration."
          />
          <div className="grid md:grid-cols-4 gap-8">
            {migrationProcess.map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">{phase.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  {phase.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <CTA
        title="Ready to Embrace the Cloud?"
        description="   Start your cloud journey today with our expert guidance and support."
      />
    </>
  );
};

export default CloudComputing;
