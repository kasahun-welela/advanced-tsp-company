import SectionTitle from "@/components/common/SectionTitle";
import Hero from "@/components/Hero";
import { CardContent, CardTitle, CardHeader } from "@/components/ui/card";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const serviceCards = [
    {
      title: "Managed IT Services",
      description:
        "Proactive support and maintenance to keep your IT infrastructure running smoothly and securely.",
      tasks: [
        "24/7 IT Infrastructure Monitoring & Support",
        "Help Desk & Remote Troubleshooting",
        "Patch Management & System Updates",
        "Backup & Disaster Recovery Planning",
        "Performance Optimization & Reporting",
        "Endpoint Management (PCs, servers, mobile)",
        "Vendor Management (ISP, software providers)",
      ],
      href: "/services/managed-services",
      bgImage: "/images/managed-services.jpg",
    },
    {
      title: "Cloud Computing & Migration ",
      description:
        "End-to-end cloud strategy, migration, and management to scale your business with flexibility and speed.",
      tasks: [
        "Cloud Readiness Assessment",
        "Design and Deployment of Scalable Cloud Architecture",
        "Server, Database & App Migration",
        "Cost Optimization & Auto-scaling Setup",
        "Multi-cloud and Hybrid Cloud Setup",
        "Ongoing Cloud Infrastructure Management",
        "Connect on-premise systems with cloud services using VPN, Direct Connect, or ExpressRoute",
        "Integrate SaaS platforms  with cloud-native applications",
        "Setup of CI/CD pipelines for cloud-hosted applications",
      ],
      href: "/services/cloud-migration",
      bgImage: "/images/cloud.jpg",
    },
    {
      title: "Cybersecurity & Risk Management",
      description:
        "Secure your digital environment with risk assessments, threat prevention, and compliance support.",
      tasks: [
        "Risk Assessments & Security Audits",
        "Firewall and Intrusion Detection/Prevention Setup",
        "Endpoint Protection and Anti-malware Solutions",
        "Identity & Access Management (IAM)",
        "Compliance Support (ISO, GDPR, HIPAA)",
        "Security Awareness Training",
        "SSO & IAM integration with cloud platforms ",
        "MFA and VPN integration across business systems",
      ],
      href: "/services/cybersecurity",
      bgImage: "/images/security.jpg",
    },
    {
      title: "IT Consulting & Strategy",
      description:
        "Strategic guidance to align your IT investments with business goals, enabling transformation and resilience.",
      tasks: [
        "IT Infrastructure Assessments",
        "Digital Transformation Roadmaps",
        "IT Budgeting & Cost Optimization Plans",
        "Business Continuity & Disaster Recovery Planning",
        "Cloud and Security Strategy Alignment",
        "Technology Vendor Selection Guidance",
        "Evaluate integration feasibility across legacy and modern platforms",
        "Design interoperability frameworks for CRM, ERP, and business tools",
        "Strategic planning for enterprise application modernization",
      ],
      href: "/services/consulting",
      bgImage: "/images/it-consulting.jpg",
    },
    {
      title: "Custom Web & Software Development",
      description:
        "Tailored software solutions to drive efficiency, innovation, and seamless integration across platforms.",
      tasks: [
        "Requirement Gathering & Business Analysis",
        "UI/UX Design and Prototyping",
        "Frontend and Backend Development",
        "API Development & Integration",
        "QA Testing and Bug Fixing",
        "Deployment & Maintenance",
        "Develop RESTful or GraphQL APIs for integration with ERPs, CRMs",
        "Integrate 3rd-party services ",
        "Create microservices to connect various systems and databases",
      ],
      href: "/services/development",
      bgImage: "/images/development.jpg",
    },
    {
      title: "Learning & Training",
      description:
        "Upskill your workforce with technical training programs, certifications, and onboarding for new systems.",
      tasks: [
        "Corporate IT Training (Cloud, Cybersecurity, DevOps, etc.)",
        "User Onboarding for New Systems",
        "Certification Preparation ",
        "Teaching courses in: MuleSoft, MERN Full Stack, Salesforce, AWS, Power BI, SharePoint",
        "Integrate enterprise applications using MuleSoft Anypoint Platform",
      ],
      href: "/services/training",
      bgImage: "/images/training.jpg",
    },
  ];

  return (
    <div className="">
      <Hero />
      {/* <section className="container mx-auto px-6 lg:px-8 py-10">
        <SectionTitle
          title="Our Services"
          description="Comprehensive technology solutions designed to accelerate your business growth and digital transformation."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCards.map((service) => (
            <Card
              key={service.title}
              className="hover:scale-105 transition-all duration-300 flex flex-col justify-between shadow-lg"
            >
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="">
                <p className="text-gray-600 dark:text-gray-200">
                  {service.description}
                </p>
              </CardContent>
              <CardFooter>
                <Link
                  href={service.href}
                  className="flex items-center gap-2 text-primary hover:text-primary/80 group"
                >
                  Learn More{" "}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section> */}
      <section className="container mx-auto px-6 lg:px-8 py-10">
        <SectionTitle
          title="Our Services"
          description="Comprehensive technology solutions designed to accelerate your business growth and digital transformation."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCards.map((service) => (
            <div
              key={service.title}
              className="relative overflow-hidden rounded-2xl shadow-lg group bg-cover bg-center h-[400px]"
              style={{ backgroundImage: `url(${service.bgImage})` }}
            >
              <div className="absolute inset-0 bg-black/50 z-10 group-hover:opacity-100 transition-opacity duration-500 opacity-0"></div>

              <div className="p-6 relative z-20 h-full  bg-white/80 dark:bg-black/40 backdrop-blur group-hover:opacity-0 transition-opacity duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-center">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-200">
                    {service.description}
                  </p>
                </CardContent>
              </div>

              <div className="absolute inset-0 p-6 z-30 flex flex-col justify-between text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    {service.tasks.slice(0, 5).map((task, idx) => (
                      <li key={idx}>{task}</li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4">
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-white font-semibold underline hover:opacity-80"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
