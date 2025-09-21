
import HeroSection from '@/components/ui/hero-section';
import { Award, Users, BookOpen, Zap, Trophy, Globe, Code, Lightbulb } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const HomePage = () => {
  const achievements = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "National Bebras Champion 2024",
      description: "40,000+ participants"
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "1st Place MCT 2024-25",
      description: "Mathematics Competition"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Engineering Inspiration Award",
      description: "First Indian team"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "empowerED Co-founder",
      description: "Global student initiative"
    }
  ];

  const featuredSections = [
    {
      title: "Latest Achievement",
      content: "Engineering Inspiration Award win with Team RFactor 6024",
      image: "/images/robotics.jpg",
      link: "/projects/competitions",
      icon: <Trophy className="h-8 w-8 text-yellow-500" />
    },
    {
      title: "Current Project", 
      content: "empowerED global expansion",
      image: "/images/global_meeting.jpg",
      link: "/empowered",
      icon: <Globe className="h-8 w-8 text-blue-500" />
    },
    {
      title: "Recent Publication",
      content: "Play to Purpose book",
      image: "/images/play_to_purpose_book.jpg", 
      link: "/book",
      icon: <BookOpen className="h-8 w-8 text-green-500" />
    },
    {
      title: "Speaking Engagement",
      content: "CTiS 2025 Conference presentation",
      image: "/images/tech_bg.jpg",
      link: "/about/media",
      icon: <Lightbulb className="h-8 w-8 text-purple-500" />
    }
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection
        title="Sai Pranav Gandhi"
        subtitle="Student Innovator & Robotics Champion"
        description="I'm a Grade 10 student from Goa, India, passionate about robotics, computational thinking, and empowering the next generation of tech innovators. Through competitions like FIRST Robotics, Bebras Challenge, and initiatives like empowerED, I bridge the gap between theoretical STEM concepts and real-world engineering solutions."
        imageUrl="/images/professional_headshot.jpg"
        imageAlt="Sai Pranav Gandhi - Professional headshot"
        primaryCta={{
          text: "Explore My Projects",
          href: "/projects"
        }}
        secondaryCta={{
          text: "Read My Book", 
          href: "/book"
        }}
        achievements={achievements}
      />

      {/* Quick Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Achievements & Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Turning curiosity into meaningful action through innovation and collaboration
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    {achievement.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600 text-xs">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Sections Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Highlights
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore my latest achievements, ongoing projects, and contributions to the tech community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredSections.map((section, index) => (
              <Link
                key={index}
                href={section.link}
                className="group block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative aspect-video">
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="p-3 bg-white/20 backdrop-blur-sm rounded-lg">
                      {section.icon}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {section.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Me Summary */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                About Me
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm a Grade 10 student from Goa, India, passionate about robotics, 
                computational thinking, and empowering the next generation of tech innovators. 
                Through competitions like FIRST Robotics, Bebras Challenge, and initiatives 
                like empowerED, I bridge the gap between theoretical STEM concepts and 
                real-world engineering solutions.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Code className="h-6 w-6 text-blue-600" />
                  <span className="font-medium text-gray-900">Programming</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="h-6 w-6 text-yellow-500" />
                  <span className="font-medium text-gray-900">Robotics</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-green-500" />
                  <span className="font-medium text-gray-900">Leadership</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Lightbulb className="h-6 w-6 text-purple-500" />
                  <span className="font-medium text-gray-900">Innovation</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/about/bio"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Learn More About Me
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/computational_thinking_viz.jpg"
                  alt="Computational thinking visualization"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Collaborate?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Whether you're interested in joining empowerED, booking a speaking engagement, 
            or collaborating on innovative tech projects, I'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/empowered/join"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Join empowerED
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-blue-600 transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
