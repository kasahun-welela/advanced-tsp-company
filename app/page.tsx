import SectionTitle from "@/components/common/SectionTitle";
import Hero from "@/components/Hero";
import Testimonial from "@/components/Testimonial";
import {
  CardContent,
  CardTitle,
  CardHeader,
  CardDescription,
} from "@/components/ui/card";

//   import { ArrowRight } from "lucide-react";
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
      bgImage: "/images/it-consulting.png",
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
      bgImage: "/images/learning.jpg",
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
                <div className="absolute inset-0 z-10 group-hover:opacity-100 transition-opacity duration-500 opacity-0"></div>

                <div className="p-6 relative z-20 h-full inset-0 bg-gradient-to-b from-black/60 to-black/10 group-hover:opacity-0 transition-opacity duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center text-white drop-shadow-md text-shadow-background">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold text-white  drop-shadow-md">
                      {service.description}
                    </p>
                  </CardContent>
                </div>

                <div className="absolute inset-0 p-6 z-30 space-y-4 bg-black/40 backdrop-blur  text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
                </div>
              </div>
            </Link>
          ))}
        </div>
        {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCards.map((service) => (
            <Link href={service.href} key={service.title}>
              <div className="relative overflow-hidden rounded-2xl shadow-lg group h-[400px]">
                <div className="p-6 relative  z-20 h-full group-hover:opacity-0 transition-opacity duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center text-white">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="bg-black/5 backdrop-blur">
                    <p className="text-gray-200  text-shadow-background">
                      {service.description}
                    </p>
                  </CardContent>
                </div>

                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${service.bgImage})` }}
                />

                <div className="absolute inset-0 bg-black/60 p-6 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center text-white">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-200 text-center">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="mt-4">
                    <h3 className="text-lg font-bold mb-2">Sub Services</h3>
                    <ul className="list-disc list-inside text-sm space-y-1 ml-3">
                      {service.subServices.map((subService) => (
                        <li key={subService}>{subService}</li>
                      ))}
                    </ul>
                  </CardContent>
                </div>
              </div>
            </Link>
          ))}
        </div> */}
      </section>
      <Testimonial />
    </div>
  );
}
