import { Link } from "react-router-dom";
import {
  ArrowRight,
  Trophy,
  Users,
  BookOpen,
  Target,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Home = () => {
  const stats = [
    { number: "500+", label: "Students Enrolled", icon: Users },
    { number: "95%", label: "Success Rate", icon: Trophy },
    { number: "50+", label: "Expert Faculty", icon: BookOpen },
    { number: "10+", label: "Years Experience", icon: Target },
  ];

  const features = [
    "Expert Faculty with IIT/Medical Background",
    "Small Batch Sizes for Personal Attention",
    "Regular Mock Tests and Assessments",
    "Comprehensive Study Material",
    "24/7 Doubt Clearing Sessions",
    "Online and Offline Classes Available",
  ];

  const courses = [
    {
      title: "IIT-JEE Preparation",
      description:
        "Comprehensive coaching for JEE Main and Advanced with expert faculty and proven methodology.",
      subjects: ["Physics", "Chemistry", "Mathematics"],
      duration: "2 Years",
    },
    {
      title: "NEET Preparation",
      description:
        "Complete medical entrance preparation with focus on Biology, Physics, and Chemistry.",
      subjects: ["Biology", "Physics", "Chemistry"],
      duration: "2 Years",
    },
    {
      title: "CBSE Board Classes",
      description:
        "Strong foundation building for Class 11 and 12 students with board exam focus.",
      subjects: ["All Subjects", "Regular Tests", "Board Prep"],
      duration: "1-2 Years",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orbit-50 to-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Launch Your Dreams with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orbit-600 to-orbit-800">
                Orbit Classes
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Premier coaching institute for IIT-JEE, NEET, and CBSE
              preparation. Join thousands of successful students who achieved
              their dreams with our expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="text-lg px-8 py-3">
                <Link to="/courses">
                  Explore Courses
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 py-3"
              >
                <Link to="/contact">Book Free Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-orbit-100 rounded-lg flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-orbit-600" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Specialized Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our comprehensive programs designed to help you excel
              in competitive exams and board studies.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex flex-wrap gap-2">
                      {course.subjects.map((subject, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-orbit-100 text-orbit-700 text-sm rounded-full"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-gray-500">
                      Duration: {course.duration}
                    </p>
                  </div>
                  <Button asChild className="w-full">
                    <Link to="/courses">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Orbit Classes?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We provide comprehensive education with a focus on conceptual
                clarity, regular practice, and personalized attention to ensure
                every student reaches their potential.
              </p>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-success-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-orbit-500 to-orbit-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">
                  Ready to Start Your Journey?
                </h3>
                <p className="mb-6 opacity-90">
                  Join our community of successful students and take the first
                  step towards achieving your dreams.
                </p>
                <Button asChild variant="secondary" size="lg">
                  <Link to="/contact">Get Free Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
