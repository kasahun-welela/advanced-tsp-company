"use client";
import React from "react";
import { CheckCircle } from "lucide-react";
import SubServiceHero from "@/components/common/SubServiceHero";
import SectionTitle from "@/components/common/SectionTitle";
import CTA from "@/components/common/CTA";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { ServiceDetails } from "@/interface";

const ConsultingDetails = () => {
  const params = useParams();
  const serviceId = params.id;
  console.log("Service ID:", serviceId);
  const [servicesDetails, setServicesDetails] = useState<ServiceDetails | null>(
    null
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServicesDetails = async () => {
      if (serviceId) {
        try {
          setLoading(true);
          const res = await axios.get(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/services/it-consulting-strategy/${serviceId}`
          );
          const data = await res.data;
          console.log("data", data);
          setServicesDetails(data.data);
          console.log("Fetched service details:", data);
        } catch (error) {
          console.error("Error fetching service details:", error);
        } finally {
          setLoading(false);
        }
      }
    };
    fetchServicesDetails();
  }, [serviceId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!servicesDetails?.subService) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-gray-600">Service not found</p>
        </div>
      </div>
    );
  }

  const { subService } = servicesDetails;

  return (
    <div>
      <SubServiceHero
        title={subService.subServiceName}
        description={subService.moto}
      />
      <section className="pt-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={`What is ${subService.subServiceName}?`}
          description={subService.definition}
        />

        <SectionTitle
          title={`Why Organizations Need ${subService.subServiceName}`}
          description={subService.organizationNeed.organizationalDefinition}
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subService.organizationNeed.needs.map((reason) => (
            <div
              key={reason._id}
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
            title={`Business Value of ${subService.subServiceName}`}
            description={subService.businessValue.businessValueDefinition}
          />
          <div className="grid md:grid-cols-2 gap-8">
            {subService.businessValue.values.map((value) => (
              <div
                key={value._id}
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
          title="Our Commitment to Your Success"
          description={subService.commitment}
        />
      </section>
      <CTA
        title={subService.cta.title}
        description={subService.cta.description}
      />
    </div>
  );
};

export default ConsultingDetails;
