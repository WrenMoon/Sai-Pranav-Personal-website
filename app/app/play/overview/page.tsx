

import PageHeader from '@/components/ui/page-header';
import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, Users, Lightbulb, Target, Globe, ArrowRight, CheckCircle, Star } from 'lucide-react';

export default function OverviewPage() {
  const methodology = [
    {
      step: "1",
      title: "Curiosity Activation",
      description: "Identifying and nurturing natural interests",
      icon: <Lightbulb className="h-8 w-8" />,
      color: "from-yellow-500 to-orange-500"
    },
    {
      step: "2", 
      title: "Structured Exploration",
      description: "Applying computational thinking principles",
      icon: <Target className="h-8 w-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      step: "3",
      title: "Hands-on Implementation", 
      description: "Building real projects and solutions",
      icon: <CheckCircle className="h-8 w-8" />,
      color: "from-green-500 to-teal-500"
    },
    {
      step: "4",
      title: "Collaborative Scaling",
      description: "Expanding impact through teamwork",
      icon: <Users className="h-8 w-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      step: "5",
      title: "Global Connection",
      description: "Sharing solutions across communities",
      icon: <Globe className="h-8 w-8" />,
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const targetAudiences = [
    {
      audience: "Students (Grades 6-12)",
      benefit: "Learn to channel curiosity into structured projects",
      icon: <BookOpen className="h-6 w-6" />
    },
    {
      audience: "Educators",
      benefit: "Practical framework for STEM education",
      icon: <Users className="h-6 w-6" />
    },
    {
      audience: "Parents", 
      benefit: "Guide to supporting young innovators",
      icon: <Star className="h-6 w-6" />
    },
    {
      audience: "Mentors",
      benefit: "Tools for effective student guidance", 
      icon: <Target className="h-6 w-6" />
    }
  ];

  const successStories = [
    {
      title: "Bebras Challenge Journey",
      description: "From Rank 10 to National Champion through structured approach",
      image: "/images/comp_thinking.jpg"
    },
    {
      title: "FRC Engineering Inspiration Award", 
      description: "First Indian team achievement using collaborative methods",
      image: "/images/robotics.jpg"
    },
    {
      title: "empowerED Global Initiative",
      description: "International collaboration platform launch and expansion",
      image: "/images/global_meeting.jpg"
    }
  ];

  const applications = [
    "Robotics competition preparation",
    "Mobile app development", 
    "Community problem-solving projects",
    "International collaboration initiatives",
    "Leadership development through tech"
  ];

  return (
    <div>
      <PageHeader
        title="Play to Purpose"
        subtitle="Transforming Curiosity into Innovation"
        description="A comprehensive methodology that bridges the gap between natural curiosity and structured innovation, turning questions into projects and ideas into collaborative impact"
        backgroundImage="/images/play_to_purpose_book.jpg"
        gradient="from-green-600 to-blue-700"
      />

      {/* Mission Statement */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-12 rounded-3xl text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl mx-auto mb-8 flex items-center justify-center">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Book Mission</h2>
            <blockquote className="text-xl md:text-2xl text-gray-800 leading-relaxed">
              "Play to Purpose bridges the gap between natural curiosity and structured innovation. 
              This book transforms the way students approach STEM learning by providing a proven 
              framework that turns questions into projects, ideas into solutions, and individual 
              efforts into collaborative impact."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Play to Purpose Methodology
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A five-step framework that transforms natural curiosity into structured innovation and global impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {methodology.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative">
                  <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-2xl mx-auto mb-6 flex items-center justify-center text-white shadow-lg`}>
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-sm font-bold text-gray-800 shadow-md">
                    {step.step}
                  </div>
                  {index < methodology.length - 1 && (
                    <ArrowRight className="hidden lg:block absolute top-8 left-24 h-6 w-6 text-gray-400" />
                  )}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Who Benefits from Play to Purpose
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Designed for learners, educators, and supporters across the STEM education ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {targetAudiences.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-lg mb-6 flex items-center justify-center text-blue-600">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {item.audience}
                </h3>
                <p className="text-gray-600">
                  {item.benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real-World Applications */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Real-World Applications
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                The Play to Purpose methodology has been successfully applied across diverse 
                STEM contexts, from competition robotics to international collaboration initiatives.
              </p>
              <ul className="space-y-4">
                {applications.map((app, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{app}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/tech_bg.jpg"
                  alt="Real-world applications"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories Preview
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real achievements demonstrating the methodology's effectiveness across different contexts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative aspect-video">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {story.title}
                  </h3>
                  <p className="text-gray-600">
                    {story.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Actions */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Learning Journey?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Discover how to turn your curiosity into meaningful innovation and global impact
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/play/sample-chapter"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Read Sample Chapter
            </Link>
            <Link
              href="/play/reviews"
              className="inline-flex items-center justify-center px-6 py-3 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-blue-600 transition-colors"
            >
              <Star className="mr-2 h-5 w-5" />
              See Reader Reviews
            </Link>
            <Link
              href="/play/download"
              className="inline-flex items-center justify-center px-6 py-3 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-blue-600 transition-colors"
            >
              Download Now
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-blue-600 transition-colors"
            >
              Join Book Community
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
