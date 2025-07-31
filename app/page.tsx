import SectionTitle from "@/components/common/SectionTitle";
import Hero from "@/components/Hero";
import {
  CardContent,
  CardTitle,
  CardHeader,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const serviceCards = [
    {
      title: "Managed IT Services",
      description:
        "Proactive support and maintenance to keep your IT infrastructure running smoothly and securely.",
      subServices: [
        "24/7 Network Monitoring",
        "Help Desk Support",
        "Proactive Maintenance",
        "Rapid Response",
      ],

      href: "/services/managed-services",
      bgImage: "/images/managed-services.jpg",
    },
    {
      title: "Cloud Computing & Migration ",
      description:
        "End-to-end cloud strategy, migration, and management to scale your business with flexibility and speed.",
      subServices: [
        "Cloud Migration",
        "Cloud Storage solutions",
        "Cloud Security",
        "Performance Optimization",
      ],
      href: "/services/cloud-computing",
      bgImage: "/images/cloud.jpg",
    },
    {
      title: "Cybersecurity & Risk Management",
      description:
        "Secure your digital environment with risk assessments, threat prevention, and compliance support.",
      subServices: [
        "Threat Detection & Response",
        "Security Infrastructure",
        "Vulnerability Assessment",
        "Risk Management",
        "Compliance Management",
        "Security Training",
      ],
      href: "/services/cybersecurity",
      bgImage: "/images/security.jpg",
    },
    {
      title: "IT Consulting & Strategy",
      description:
        "Strategic guidance to align your IT investments with business goals, enabling transformation and resilience.",
      subServices: [
        "Strategic IT Planning",
        "Digital Transformation",
        "Technology Assessment",
        "Process Optimization",
        "Performance Analytics",
        "Change Management",
      ],
      href: "/services/consulting",
      bgImage: "/images/it-consulting.jpg",
    },
    {
      title: "Custom Web & Software Development",
      description:
        "Tailored software solutions to drive efficiency, innovation, and seamless integration across platforms.",
      subServices: [
        "Custom Web Applications",
        "Mobile Development",
        "Backend Development",
        "UI/UX Design",
        "Performance Optimization",
        "Legacy Modernization",
      ],
      href: "/services/development",
      bgImage: "/images/development.jpg",
    },
    {
      title: "Learning & Training",
      description:
        "Upskill your workforce with technical training programs, certifications, and onboarding for new systems.",
      subServices: [
        "In-Person Training",
        "Virtual Instructor-Led",
        "Self-Paced Online",
      ],
      href: "/services/training",
      bgImage: "/images/training.jpg",
    },
  ];

  return (
    <div className="">
      <Hero />
      <section className="container mx-auto px-6 lg:px-8 py-10">
        <SectionTitle
          title="Our Services"
          description="Comprehensive technology solutions designed to accelerate your business growth and digital transformation."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCards.map((service) => (
            <Link href={service.href} key={service.title}>
              <div
                className="relative overflow-hidden rounded-2xl shadow-lg group bg-cover bg-center h-[400px]"
                style={{ backgroundImage: `url(${service.bgImage})` }}
              >
                <div className="absolute inset-0 bg-black/50 z-10 group-hover:opacity-100 transition-opacity duration-500 opacity-0"></div>

                <div className="p-6 relative z-20 h-full bg-black/40 backdrop-blur group-hover:opacity-0 transition-opacity duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center text-white">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-200">{service.description}</p>
                  </CardContent>
                </div>

                <div className="absolute inset-0 p-6 z-30 space-y-4  text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-200">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h3 className="text-lg font-bold mb-2">Sub Services</h3>
                    <ul className="list-disc list-inside text-sm space-y-1 ml-3">
                      {service.subServices.map((subService) => (
                        <li key={subService}>{subService}</li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <div>
                      <Link
                        href={service.href}
                        className="inline-flex items-center gap-2 text-white font-semibold underline hover:opacity-80"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </CardFooter>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
