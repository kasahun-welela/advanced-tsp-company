import PageHero from "@/components/common/PageHero";
import SectionTitle from "@/components/common/SectionTitle";
import { Target, Users, TrendingUp, Heart, Zap } from "lucide-react";

function page() {
  const stats = [
    { icon: Target, label: "Projects Delivered", value: "500+" },
    { icon: Users, label: "Happy Clients", value: "200+" },
    { icon: TrendingUp, label: "Years Experience", value: "10+" },
  ];
  const coreValues = [
    {
      icon: Target,
      title: "Excellence",
      description:
        "We strive for excellence in every project, delivering solutions that exceed expectations and drive business success.",
    },
    {
      icon: Heart,
      title: "Integrity",
      description:
        "Trust and transparency form the foundation of our relationships with clients, partners, and team members.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description:
        "We embrace cutting-edge technologies and creative approaches to solve complex business challenges.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Success comes through teamwork, both within our organization and in partnership with our clients.",
    },
  ];
  return (
    <>
      <PageHero
        title="About Us"
        description="We are a team of experts who are dedicated to providing the best IT services to our clients."
      />
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <section className="py-10">
          <SectionTitle
            title="Key Achievements"
            description="Decades of trust, hundreds of solutions, and countless success stories all fueled by our commitment to excellence."
          />
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 text-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 "
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 dark:text-gray-50 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-10">
          <SectionTitle
            title="Core Values"
            description="Empowering your future with innovative, reliable, and secure technology solutions tailored to drive your success."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50  mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-50">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}

export default page;
