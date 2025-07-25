import ScheduleForm from "@/components/ScheduleForm";
import PageHero from "@/components/common/PageHero";
import SectionTitle from "@/components/common/SectionTitle";

const Consultation = () => {
  const steps = [
    {
      step: "1",
      title: "Form Submission",
      description:
        "Submit your consultation request with your specific needs and goals.",
    },
    {
      step: "2",
      title: "Initial Review",
      description:
        "Our team reviews your information and prepares for your consultation.",
    },
    {
      step: "3",
      title: "Consultation Call",
      description:
        "Meet with our experts to discuss your challenges and opportunities.",
    },
    {
      step: "4",
      title: "Custom Proposal",
      description:
        "Receive a tailored proposal with recommendations and next steps.",
    },
  ];
  return (
    <div>
      <PageHero
        title="Schedule Your Consultation"
        description="Get expert advice tailored to your business needs. Our technology consultants will help you identify opportunities and create a roadmap for success."
      />

      <ScheduleForm />

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="What Happens Next?"
            description="Our streamlined process ensures you get the most value from your consultation."
          />
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Consultation;
