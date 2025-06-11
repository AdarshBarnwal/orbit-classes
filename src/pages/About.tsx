import { Users, Award, BookOpen, Target } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              About <span className="text-orbit-600">Orbit Classes</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering students to reach their academic goals through
              excellence in education and personalized guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Content Placeholder */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <div className="w-16 h-16 bg-orbit-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8 text-orbit-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Founded with a vision to provide quality education and guidance to
              students preparing for competitive exams, Orbit Classes has been a
              trusted name in academic excellence for over a decade.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <Award className="h-8 w-8 text-orbit-600 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">Excellence</h3>
                <p className="text-sm text-gray-600">
                  Committed to academic excellence
                </p>
              </div>
              <div className="text-center">
                <BookOpen className="h-8 w-8 text-orbit-600 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">Innovation</h3>
                <p className="text-sm text-gray-600">
                  Modern teaching methodologies
                </p>
              </div>
              <div className="text-center">
                <Target className="h-8 w-8 text-orbit-600 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">Results</h3>
                <p className="text-sm text-gray-600">
                  Proven track record of success
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orbit-500 to-orbit-700 text-white rounded-lg p-8">
            <h3 className="text-xl font-bold mb-4">
              Full Content Coming Soon!
            </h3>
            <p className="opacity-90">
              We're working on providing you with detailed information about our
              faculty, teaching methodology, success stories, and much more.
              Stay tuned!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
