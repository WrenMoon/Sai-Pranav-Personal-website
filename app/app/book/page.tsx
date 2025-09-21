
import PageHeader from '@/components/ui/page-header';
import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, Users, Download, Star, Play, MessageSquare, Award } from 'lucide-react';

const BookPage = () => {
  const keyThemes = [
    {
      title: "Computational Thinking Fundamentals", 
      description: "Decomposition, pattern recognition, abstraction, algorithmic thinking",
      icon: <Award className="h-6 w-6" />
    },
    {
      title: "From Idea to Implementation",
      description: "Project development methodology for turning concepts into reality",
      icon: <Play className="h-6 w-6" />
    },
    {
      title: "Building and Leading Teams",
      description: "Lessons from robotics competitions and collaborative projects",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "Global Collaboration",
      description: "empowerED case study and cross-cultural project management",
      icon: <MessageSquare className="h-6 w-6" />
    },
    {
      title: "Overcoming Challenges",
      description: "Real stories from competitions and projects with practical solutions",
      icon: <Star className="h-6 w-6" />
    }
  ];

  const chapters = [
    {
      number: 1,
      title: "The Curiosity Catalyst",
      description: "Understanding your natural learning drive and how to harness it",
      readTime: "15 min"
    },
    {
      number: 2, 
      title: "Computational Thinking in Action",
      description: "Real-world applications of CT principles in problem-solving",
      readTime: "20 min"
    },
    {
      number: 3,
      title: "Building Your First Robot", 
      description: "Step-by-step guide to robotics with hands-on examples",
      readTime: "25 min"
    },
    {
      number: 4,
      title: "Leading Through Innovation",
      description: "Team dynamics, leadership lessons from competitions",
      readTime: "18 min"
    },
    {
      number: 5,
      title: "Global Impact",
      description: "Scaling local solutions worldwide through collaboration",
      readTime: "22 min"
    }
  ];

  const targetAudience = [
    {
      group: "Students (Grades 6-12)",
      benefit: "Learn to channel curiosity into structured projects and meaningful solutions",
      icon: <BookOpen className="h-8 w-8 text-blue-600" />
    },
    {
      group: "Educators", 
      benefit: "Practical framework for integrating computational thinking into curriculum",
      icon: <Users className="h-8 w-8 text-green-600" />
    },
    {
      group: "Parents",
      benefit: "Guide to supporting young innovators and understanding their interests",
      icon: <Star className="h-8 w-8 text-purple-600" />
    },
    {
      group: "Mentors",
      benefit: "Tools and strategies for effective student guidance and empowerment",
      icon: <MessageSquare className="h-8 w-8 text-orange-600" />
    }
  ];

  return (
    <div>
      <PageHeader
        title="Play to Purpose"
        subtitle="Turning Curiosity into Meaningful Action"
        description="A comprehensive guide for students, educators, and parents interested in STEM education and innovation"
        backgroundImage="/images/play_to_purpose_book.jpg"
      />

      {/* Book Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  About the Book
                </h2>
                <div className="space-y-4">
                  <div>
                    <span className="text-blue-600 font-semibold">Title:</span>
                    <span className="ml-2 text-gray-800">"Play to Purpose: Turning Curiosity into Meaningful Action"</span>
                  </div>
                  <div>
                    <span className="text-blue-600 font-semibold">Author:</span>
                    <span className="ml-2 text-gray-800">Sai Pranav Gandhi</span>
                  </div>
                  <div>
                    <span className="text-blue-600 font-semibold">Target Audience:</span>
                    <span className="ml-2 text-gray-800">Students (Grades 6-12), Educators, Parents</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Core Message</h3>
                <p className="text-gray-700 leading-relaxed">
                  Drawing from my journey as a national champion in computational thinking, 
                  robotics competitions, and founding empowerED, this book provides a practical 
                  framework for students to channel their curiosity into meaningful STEM projects. 
                  Learn how to approach problems systematically, build innovative solutions, 
                  and create lasting impact in your community.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/play/sample-chapter"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <BookOpen className="mr-2 h-5 w-5" />
                  Download Sample Chapter
                </Link>
                <Link
                  href="/play/reviews"
                  className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors"
                >
                  <Star className="mr-2 h-5 w-5" />
                  Read Reviews
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[2/3] relative rounded-2xl overflow-hidden shadow-2xl max-w-sm mx-auto">
                <Image
                  src="/images/play_to_purpose_book.jpg"
                  alt="Play to Purpose Book Cover"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating stats */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-teal-600 text-white p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">5</div>
                  <div className="text-sm">Chapters</div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">100+</div>
                  <div className="text-sm">Pages</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Themes */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Themes Covered
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive coverage of essential skills for young innovators
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyThemes.map((theme, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                    {theme.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {theme.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {theme.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chapter Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Chapter Preview
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore the structure and content of each chapter
            </p>
          </div>

          <div className="space-y-4">
            {chapters.map((chapter, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {chapter.number}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {chapter.title}
                      </h3>
                      <p className="text-gray-600 mt-1">
                        {chapter.description}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">{chapter.readTime}</div>
                    <div className="text-xs text-gray-400">read time</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience Benefits */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Who This Book Is For
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tailored benefits for different audiences in the education ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {targetAudience.map((audience, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {audience.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {audience.group}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {audience.benefit}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Turn Your Curiosity into Action?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of students, educators, and parents who are transforming 
            the way they approach STEM learning and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/play/download"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Download className="mr-2 h-5 w-5" />
              Purchase Book
            </Link>
            <Link
              href="/play/interact"
              className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-blue-600 transition-colors"
            >
              <Play className="mr-2 h-5 w-5" />
              Try Interactive Preview
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-blue-600 transition-colors"
            >
              Book Speaking Engagement
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookPage;
