import {
  Shield,
  Lock,
  Eye,
  AlertTriangle,
  FileCheck,
  Users,
} from "lucide-react";
import PageHero from "@/components/common/PageHero";
import SectionTitle from "@/components/common/SectionTitle";
import CTA from "@/components/common/CTA";

const Cybersecurity = () => {
  const services = [
    {
      icon: Shield,
      title: "Threat Detection & Response",
      description:
        "Advanced threat monitoring and rapid incident response to protect your business 24/7.",
    },
    {
      icon: Lock,
      title: "Security Infrastructure",
      description:
        "Comprehensive security architecture including firewalls, VPNs, and access controls.",
    },
    {
      icon: Eye,
      title: "Vulnerability Assessment",
      description:
        "Regular security audits and penetration testing to identify and address weaknesses.",
    },
    {
      icon: AlertTriangle,
      title: "Risk Management",
      description:
        "Strategic risk assessment and mitigation planning to minimize security exposure.",
    },
    {
      icon: FileCheck,
      title: "Compliance Management",
      description:
        "Ensure adherence to industry regulations and standards like GDPR, HIPAA, and SOX.",
    },
    {
      icon: Users,
      title: "Security Training",
      description:
        "Employee education and awareness programs to build your human firewall.",
    },
  ];

  return (
    <div>
      <PageHero
        title="Cybersecurity & Risk Management"
        description="Protect your business from evolving cyber threats with comprehensive security solutions and proactive risk management."
      />

      {/* Services Section */}
      <section className="py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Security Services"
            description="Comprehensive cybersecurity solutions to protect your business assets."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Secure Your Business Today"
        description="Don't wait for a security incident. Protect your business with our comprehensive cybersecurity solutions."
      />
    </div>
  );
};

export default Cybersecurity;
