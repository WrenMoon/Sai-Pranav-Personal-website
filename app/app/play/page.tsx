
import PageHeader from '@/components/ui/page-header';
import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, Play, MessageSquare, Star, Download, Users, Award } from 'lucide-react';

const PlaySectionPage = () => {
  const playSections = [
    {
      title: "Overview",
      description: "Comprehensive overview of the Play to Purpose methodology and value proposition",
      icon: <BookOpen className="h-8 w-8" />,
      href: "/play/overview",
      image: "/images/book_cover.jpg",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Interact",
      description: "Interactive elements and experiences to engage with the book's concepts",
      icon: <Play className="h-8 w-8" />,
      href: "/play/interact", 
      image: "/images/tech_bg.jpg",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Sample Chapter",
      description: "Complete sample chapter demonstrating writing style and practical approach",
      icon: <MessageSquare className="h-8 w-8" />,
      href: "/play/sample-chapter",
      image: "/images/comp_thinking.jpg",
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Reviews & Testimonials",
      description: "Authentic reviews and social proof from readers and educators",
      icon: <Star className="h-8 w-8" />,
      href: "/play/reviews",
      image: "/images/classroom.jpg",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      title: "Download",
      description: "Purchase options and immediate access to the book in multiple formats",
      icon: <Download className="h-8 w-8" />,
      href: "/play/download",
      image: "/images/play_to_purpose_book.jpg",
      gradient: "from-red-500 to-pink-500"
    }
  ];

  const methodology = [
    {
      step: 1,
      title: "Curiosity Activation",
      description: "Identifying and nurturing natural interests and questions",
      icon: "🤔"
    },
    {
      step: 2,
      title: "Structured Exploration", 
      description: "Applying computational thinking principles to organize learning",
      icon: "🧩"
    },
    {
      step: 3,
      title: "Hands-on Implementation",
      description: "Building real projects and tangible solutions",
      icon: "🔧"
    },
    {
      step: 4,
      title: "Collaborative Scaling",
      description: "Expanding impact through teamwork and partnerships",
      icon: "👥"
    },
    {
      step: 5,
      title: "Global Connection",
      description: "Sharing solutions and learning across communities worldwide",
      icon: "🌍"
    }
  ];

  return (
    <div>
      <PageHeader
        title="Play to Purpose"
        subtitle="Interactive Book Experience"
        description="Explore the comprehensive guide to turning curiosity into meaningful action through STEM innovation"
        backgroundImage="/images/play_to_purpose_book.jpg"
        gradient="from-purple-600 to-blue-700"
      />

      {/* Book Mission Statement */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Mission Statement
            </h2>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-3xl">
              <blockquote className="text-xl md:text-2xl text-gray-800 leading-relaxed italic">
                "Play to Purpose bridges the gap between natural curiosity and structured innovation. 
                This book transforms the way students approach STEM learning by providing a proven 
                framework that turns questions into projects, ideas into solutions, and individual 
                efforts into collaborative impact."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Play to Purpose Methodology */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Play to Purpose Methodology
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A systematic approach to transforming curiosity into meaningful innovation
            </p>
          </div>

          <div className="space-y-8">
            {methodology.map((step, index) => (
              <div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className={`bg-white rounded-2xl shadow-lg p-8 max-w-2xl ${
                  index % 2 === 0 ? 'mr-auto' : 'ml-auto'
                }`}>
                  <div className={`flex items-center space-x-6 ${
                    index % 2 === 0 ? '' : 'flex-row-reverse space-x-reverse'
                  }`}>
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                        {step.step}
                      </div>
                    </div>
                    <div className={index % 2 === 0 ? '' : 'text-right'}>
                      <div className="text-4xl mb-2">{step.icon}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore the Book Experience
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dive deeper into different aspects of Play to Purpose
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {playSections.map((section, index) => (
              <Link
                key={index}
                href={section.href}
                className="group block"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative aspect-video">
                    <Image
                      src={section.image}
                      alt={section.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${section.gradient} opacity-80`} />
                    <div className="absolute top-4 left-4">
                      <div className="p-3 bg-white/20 backdrop-blur-sm rounded-lg text-white">
                        {section.icon}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {section.title}
                    </h3>
                    <p className="text-gray-600">
                      {section.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Preview */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories Preview
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real examples of the Play to Purpose methodology in action
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Bebras Journey</h3>
                <p className="text-gray-600 text-sm">Rank 10 → Rank 7 → National Champion</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">FRC Success</h3>
                <p className="text-gray-600 text-sm">Engineering Inspiration Award</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">empowerED Launch</h3>
                <p className="text-gray-600 text-sm">Global initiative creation</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Student Mentorship</h3>
                <p className="text-gray-600 text-sm">Multiple success stories</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your Journey Today
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Ready to transform curiosity into meaningful action? Explore the book, 
            try interactive features, or join our community of young innovators.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/play/sample-chapter"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Read Sample Chapter
            </Link>
            <Link
              href="/play/interact"
              className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-blue-600 transition-colors"
            >
              <Play className="mr-2 h-5 w-5" />
              Try Interactive Features
            </Link>
            <Link
              href="/play/download"
              className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-blue-600 transition-colors"
            >
              <Download className="mr-2 h-5 w-5" />
              Get the Complete Guide
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlaySectionPage;
