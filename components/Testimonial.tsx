import SectionTitle from "./common/SectionTitle";
import { Star } from "lucide-react";
import React from "react";
import Image from "next/image";

function Testimonial() {
  const testimonials = [
    {
      id: "1",
      name: "Daniel Tesfaye",
      service: "Digital Transformation",
      rating: 5,
      comment:
        "Advanced Technology Solutions transformed our legacy infrastructure into a modern, scalable digital environment. Their strategic guidance and flawless execution helped us stay ahead of the competition.",
      image: "/images/testimonial.jpeg",
    },
    {
      id: "2",
      name: "Lily Worku",
      service: "Managed IT Services",
      rating: 5,
      comment:
        "Their managed IT services have drastically improved our system uptime and performance. The support team is proactive, responsive, and truly understands our needs.",
      image: "/images/testimonial.jpeg",
    },
    {
      id: "3",
      name: "Samuel Kebede",
      service: "Cloud Solutions (AWS & Azure)",
      rating: 5,
      comment:
        "We migrated to the cloud with zero downtime, thanks to their expert planning and support. Security, scalability, and performance have all improved since partnering with them.",
      image: "/images/testimonial.jpeg",
    },
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <SectionTitle
            title="What Our Customers Say"
            description="Don't just take our word for it. Here's what our satisfied customers have to say about our services."
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-card rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />

                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-200">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.service}
                  </p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <p className="text-gray-700 dark:text-gray-300 italic">
                {`"${testimonial.comment}"`}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
