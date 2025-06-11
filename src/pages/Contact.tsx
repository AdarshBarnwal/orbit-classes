import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 9876543210", "+91 9876543211"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@orbitclasses.com", "admissions@orbitclasses.com"],
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Education Street", "Academic District, City - 123456"],
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon - Sat: 8:00 AM - 8:00 PM", "Sunday: 10:00 AM - 4:00 PM"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Contact <span className="text-orbit-600">Us</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with us for course information, admissions, or any
              queries. We're here to help you start your academic journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((item, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-orbit-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-6 w-6 text-orbit-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  {item.details.map((detail, idx) => (
                    <p key={idx} className="text-sm text-gray-600">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form Placeholder */}
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Send us a Message
                  </h2>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you as soon as
                    possible.
                  </p>
                </div>

                {/* Form Placeholder */}
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <div className="w-full h-10 bg-gray-100 rounded-md border border-gray-200"></div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="w-full h-10 bg-gray-100 rounded-md border border-gray-200"></div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <div className="w-full h-10 bg-gray-100 rounded-md border border-gray-200"></div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Course Interest
                      </label>
                      <div className="w-full h-10 bg-gray-100 rounded-md border border-gray-200"></div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <div className="w-full h-32 bg-gray-100 rounded-md border border-gray-200"></div>
                  </div>

                  <div className="text-center">
                    <Button size="lg" className="px-8">
                      Send Message
                    </Button>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-orbit-50 rounded-lg">
                  <p className="text-center text-orbit-700 font-medium">
                    🚧 Interactive Contact Form Coming Soon!
                  </p>
                  <p className="text-center text-sm text-orbit-600 mt-2">
                    For now, please call us directly or send an email using the
                    contact information above.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orbit-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-orbit-100 mb-8">
            Join thousands of successful students and take the first step
            towards achieving your dreams.
          </p>
          <Button variant="secondary" size="lg">
            Book Free Demo Class
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
