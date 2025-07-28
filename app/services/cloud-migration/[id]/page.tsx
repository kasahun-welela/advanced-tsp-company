import React from "react";
import { CheckCircle } from "lucide-react";
import SubServiceHero from "@/components/common/SubServiceHero";
import SectionTitle from "@/components/common/SectionTitle";
import CTA from "@/components/common/CTA";

const CloudMigrationDetails = () => {
  const businessValue = [
    {
      title: "Enhance Agility",
      description:
        "Accelerate product development, deployment, and time-to-market with cloud-native capabilities.",
    },
    {
      title: "Improve Efficiency",
      description:
        "Automate infrastructure management and streamline operations to reduce manual overhead.",
    },
    {
      title: "Enable Innovation",
      description:
        "Unlock access to advanced technologies such as AI, machine learning, and analytics platforms.",
    },
    {
      title: "Strengthen Competitive Advantage",
      description:
        "Deliver better customer experiences while reducing total cost of ownership (TCO).",
    },
  ];

  const whyOrganizationsNeed = [
    {
      title: "Infrastructure Modernization ",
      description:
        "Replace outdated systems with modern, cloud-native architectures.",
    },
    {
      title: "Scalability & Flexibility ",
      description: "Instantly scale resources based on business demand.",
    },
    {
      title: "Cost Optimization ",
      description:
        "Eliminate capital expenditures and reduce operational overhead.",
    },
    {
      title: "Workforce Mobility ",
      description: "Enable secure remote access to systems and data.",
    },
    {
      title: "Security & Compliance ",
      description:
        "Leverage enterprise-grade security and regulatory compliance frameworks.",
    },
    {
      title: "Business Continuity ",
      description:
        "Ensure data redundancy, disaster recovery, and high availability.",
    },
  ];

  return (
    <div>
      <SubServiceHero
        title="Cloud Migration "
        description="Seamlessly transition your business to the cloud with our comprehensive migration services. Reduce costs, improve scalability, and enhance security while maintaining business continuity."
      />
      <section className="pt-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="What is Cloud Migration?"
          description=" Cloud migration is the strategic process of relocating an organization's digital assets including applications, 
              data, servers, and IT infrastructure from on-premise environments or legacy systems to cloud platforms such as 
              Amazon Web Services (AWS), Microsoft Azure, or Google Cloud. This transition may involve full migration or the 
              implementation of a hybrid model that integrates both on-premise and cloud resources."
        />

        <SectionTitle
          title="Why Organizations Need Cloud Migration"
          description="As the demands for agility, scalability, and operational efficiency grow, many businesses find that traditional IT environments are no longer sustainable. "
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyOrganizationsNeed.map((reason, index) => (
            <div
              key={index}
              className="bg-blue-50 rounded-xl p-6 flex items-center gap-3 dark:bg-card"
            >
              <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200 mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-400">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="my-10">
          <SectionTitle
            title="Business Value of Cloud Migration"
            description="Migrating to the cloud enables organizations to transform their operations and achieve strategic business objectives."
          />
          <div className="grid md:grid-cols-2 gap-8">
            {businessValue.map((value, index) => (
              <div
                key={index}
                className="bg-blue-50 rounded-xl p-6 dark:bg-card"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <SectionTitle
          title="Our Commitment to Your Success
"
          description="At Advanced Technology Solutions, we deliver comprehensive cloud migration services that are secure, seamless, and tailored to your unique business needs. From initial assessment and planning to execution, optimization, and post-migration support, we ensure your journey to the cloud is smooth, strategic, and future-ready."
        />
      </section>
      <CTA
        title="Ready to Start Your Cloud Journey?"
        description="Let Advanced Technology Solutions guide you through a seamless cloud migration that transforms your business."
      />
    </div>
  );
};

export default CloudMigrationDetails;
