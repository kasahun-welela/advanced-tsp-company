import Contact from "@/components/Contact";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

function ContactUs() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@advancedtsp.com",
      link: "mailto:hello@advancedtsp.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "lorem ipsum",
      link: "#",
    },
  ];
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-slate-900 dark:to-slate-800"
    >
      <div className="container lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold ">Get In Touch</h2>
          <p className="text-xl  max-w-3xl mx-auto">
            Ready to start your next project? Contact us today to discuss how we
            can help transform your business with technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold  mb-6">Send us a message</h3>

            <Contact />
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold  mb-6">Contact Information</h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600">
                        {info.label}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-50">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            {/* <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Office Hours
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-700">Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Saturday</span>
                  <span className="font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Sunday</span>
                  <span className="font-medium">Closed</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  Emergency support available 24/7 for enterprise clients.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
