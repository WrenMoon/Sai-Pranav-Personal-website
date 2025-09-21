
import PageHeader from '@/components/ui/page-header';
import Image from 'next/image';
import Link from 'next/link';
import { Download, ExternalLink, Calendar, Award, Code, Users } from 'lucide-react';

const BioPage = () => {
  const achievements = [
    "1st Place MCT 2024-25 (Mathematics Concept Test)",
    "National Champion Bebras Challenge 2024 (40,000+ participants)",
    "Engineering Inspiration Award Winner - Team RFactor 6024", 
    "Progressive improvement in Bebras: Rank 10 → Rank 7 → National Champion",
    "CTiS 2025 Conference Presenter",
    "empowerED Co-founder and Global Collaborator"
  ];

  const education = [
    {
      level: "Current",
      details: "Grade 10 Student, Goa, India",
      achievements: ["Consistent top performer in STEM subjects", "Active in robotics competitions"]
    },
    {
      level: "Academic Excellence",
      details: "Progressive Achievement Record",
      achievements: ["1st Place MCT 2024-25", "National Bebras Champion 2024", "Multiple competition wins"]
    }
  ];

  return (
    <div>
      <PageHeader
        title="Biography"
        subtitle="From Curious Student to National Champion"
        description="Comprehensive background on my journey, achievements, and philosophy as a student innovator and tech leader"
        backgroundImage="/images/tech_bg.jpg"
      />

      {/* Personal Introduction */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Personal Introduction
                </h2>
                <div className="prose prose-lg prose-blue max-w-none">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    I'm Sai Pranav Gandhi, a Grade 10 student from Goa, India, driven by an 
                    insatiable curiosity for how things work and a passion for using technology 
                    to solve real-world problems. My journey began with simple questions about 
                    robots and algorithms, leading me to become a national champion, published 
                    author, and global collaborator.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    What started as childhood fascination with LEGO robots has evolved into a 
                    comprehensive understanding of computational thinking, advanced robotics, 
                    and collaborative innovation. Through competitions like FIRST Robotics 
                    and the Bebras Challenge, I've learned that the most complex problems 
                    become manageable when approached with structured thinking and creativity.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    My work extends beyond personal achievement to empowering others. Through 
                    the empowerED initiative, I collaborate with students across continents, 
                    sharing knowledge and building solutions that matter. I believe that when 
                    we combine individual curiosity with collaborative action, we can create 
                    meaningful change in the world.
                  </p>
                </div>
              </div>

              {/* Philosophy & Approach */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Philosophy & Approach
                </h3>
                <blockquote className="text-lg text-gray-700 italic leading-relaxed">
                  "I believe that the best learning happens when curiosity meets structured thinking. 
                  Through computational thinking principles—decomposition, pattern recognition, 
                  abstraction, and algorithmic thinking—any complex problem becomes manageable. 
                  My goal is to help other students discover this power and use it to create meaningful change."
                </blockquote>
              </div>
            </div>

            {/* Profile Image & Quick Stats */}
            <div className="space-y-8">
              <div className="relative">
                <div className="aspect-[3/4] relative rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/professional_headshot.jpg"
                    alt="Sai Pranav Gandhi - Professional Portrait"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Facts</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Users className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Grade 10 Student</p>
                      <p className="text-sm text-gray-600">Goa, India</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-yellow-100 rounded-lg">
                      <Award className="h-4 w-4 text-yellow-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">National Champion</p>
                      <p className="text-sm text-gray-600">Bebras Challenge 2024</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <Code className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Robotics Expert</p>
                      <p className="text-sm text-gray-600">FRC/FTC/FGC Competitor</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Background */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Educational Background
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {education.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.level}</h3>
                <p className="text-lg text-blue-600 font-medium mb-4">{item.details}</p>
                <ul className="space-y-2">
                  {item.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Key Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex-shrink-0"></div>
                <span className="text-gray-800 font-medium">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Explore More
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Learn more about my journey, see my timeline of achievements, or connect with me
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about/timeline"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Calendar className="mr-2 h-5 w-5" />
              View Timeline
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-blue-600 transition-colors"
            >
              See My Projects
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-blue-600 transition-colors"
            >
              Connect With Me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BioPage;
