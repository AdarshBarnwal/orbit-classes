import { Link } from "react-router-dom";
import { Clock, Users, BookOpen, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "IIT-JEE Main & Advanced",
      description:
        "Comprehensive 2-year program for JEE preparation with expert faculty and proven methodology. Covers complete syllabus with regular practice sessions.",
      price: "₹2,50,000",
      duration: "24 Months",
      batchSize: "30 Students",
      rating: 4.9,
      features: [
        "Complete Physics, Chemistry & Mathematics",
        "Weekly mock tests and assessments",
        "Previous year question practice",
        "24/7 doubt clearing sessions",
        "Online + Offline classes",
        "Study material and DPPs included",
      ],
      subjects: ["Physics", "Chemistry", "Mathematics"],
      popular: true,
    },
    {
      id: 2,
      title: "NEET Medical Entrance",
      description:
        "Specialized medical entrance coaching focusing on Biology, Physics, and Chemistry with NEET-specific strategies and practice.",
      price: "₹2,00,000",
      duration: "24 Months",
      batchSize: "25 Students",
      rating: 4.8,
      features: [
        "Biology, Physics & Chemistry coverage",
        "NEET-specific question patterns",
        "Regular biology lab sessions",
        "Medical counseling guidance",
        "Mock tests as per NEET pattern",
        "Comprehensive study material",
      ],
      subjects: ["Biology", "Physics", "Chemistry"],
      popular: false,
    },
    {
      id: 3,
      title: "CBSE Class 11 Foundation",
      description:
        "Strong foundation building program for Class 11 students covering all subjects with focus on conceptual clarity and board preparation.",
      price: "₹1,20,000",
      duration: "12 Months",
      batchSize: "35 Students",
      rating: 4.7,
      features: [
        "All subjects covered comprehensively",
        "Regular chapter-wise tests",
        "Board exam preparation",
        "Concept clarity sessions",
        "Practical lab work",
        "Monthly parent-teacher meetings",
      ],
      subjects: ["Physics", "Chemistry", "Mathematics", "Biology", "English"],
      popular: false,
    },
    {
      id: 4,
      title: "CBSE Class 12 Board Prep",
      description:
        "Intensive Class 12 board preparation program with focus on scoring high marks and building strong concepts for competitive exams.",
      price: "₹1,50,000",
      duration: "12 Months",
      batchSize: "30 Students",
      rating: 4.8,
      features: [
        "Board-specific teaching methodology",
        "Sample paper practice",
        "Previous year question analysis",
        "Answer writing techniques",
        "Regular mock board exams",
        "Individual attention for weak areas",
      ],
      subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
      popular: false,
    },
    {
      id: 5,
      title: "JEE Foundation (Class 9-10)",
      description:
        "Early preparation program for JEE aspirants in Class 9 and 10, building strong fundamentals in science and mathematics.",
      price: "₹80,000",
      duration: "12 Months",
      batchSize: "40 Students",
      rating: 4.6,
      features: [
        "Foundation building in PCM",
        "NCERT and competitive level",
        "Logical reasoning development",
        "Monthly assessments",
        "Science olympiad preparation",
        "Career guidance sessions",
      ],
      subjects: ["Mathematics", "Science", "Reasoning"],
      popular: false,
    },
    {
      id: 6,
      title: "Crash Course - JEE/NEET",
      description:
        "Intensive 6-month crash course for final year preparation with focus on important topics and exam strategies.",
      price: "₹1,00,000",
      duration: "6 Months",
      batchSize: "20 Students",
      rating: 4.5,
      features: [
        "High-yield topic coverage",
        "Intensive practice sessions",
        "Time management strategies",
        "Weekly full-length tests",
        "Last-minute revision",
        "Exam day preparation",
      ],
      subjects: ["Physics", "Chemistry", "Mathematics/Biology"],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-orbit-600">Courses</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of courses designed to help
              you excel in competitive exams and board studies. Each program is
              carefully crafted with expert faculty and proven teaching
              methodology.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {courses.map((course) => (
              <Card
                key={course.id}
                className="relative hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {course.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {course.title}
                    </CardTitle>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">
                        {course.rating}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{course.description}</p>

                  {/* Course Details */}
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-orbit-600" />
                      <span className="text-sm text-gray-600">
                        {course.duration}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-orbit-600" />
                      <span className="text-sm text-gray-600">
                        {course.batchSize}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <BookOpen className="h-4 w-4 text-orbit-600" />
                      <span className="text-sm text-gray-600">
                        {course.subjects.length} Subjects
                      </span>
                    </div>
                  </div>

                  {/* Subjects */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {course.subjects.map((subject, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {subject}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Course Features:
                    </h4>
                    <ul className="space-y-2">
                      {course.features.slice(0, 4).map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start space-x-2 text-sm text-gray-600"
                        >
                          <div className="w-1.5 h-1.5 bg-orbit-600 rounded-full mt-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                      {course.features.length > 4 && (
                        <li className="text-sm text-orbit-600 font-medium">
                          +{course.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">
                        {course.price}
                      </span>
                      <span className="text-gray-500 ml-1">/ year</span>
                    </div>
                    <Button asChild className="group">
                      <Link to="/contact">
                        Enroll Now
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orbit-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Still Not Sure Which Course is Right for You?
          </h2>
          <p className="text-xl text-orbit-100 mb-8">
            Book a free consultation with our academic counselors to find the
            perfect course based on your goals and current level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="secondary" size="lg">
              <Link to="/contact">Book Free Consultation</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-orbit-600"
            >
              <Link to="/about">Learn About Our Faculty</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
