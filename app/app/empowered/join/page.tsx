

import PageHeader from '@/components/ui/page-header';
import Image from 'next/image';
import Link from 'next/link';
import { Users, Star, Crown, Globe, Clock, ArrowRight, Check, MessageSquare, Code } from 'lucide-react';

export default function JoinPage() {
  const membershipLevels = [
    {
      level: "Community Member",
      type: "Free",
      icon: <Users className="h-8 w-8" />,
      color: "green",
      gradient: "from-green-500 to-teal-500",
      perfectFor: "Students exploring tech interests",
      timeCommitment: "1-2 hours/month",
      benefits: [
        "Access to community forums and discussions",
        "Invitations to open workshops and webinars",
        "Basic learning resources and materials",
        "Networking opportunities with global peers",
        "Monthly newsletter and updates"
      ]
    },
    {
      level: "Active Contributor",
      type: "Application Required",
      icon: <Star className="h-8 w-8" />,
      color: "blue",
      gradient: "from-blue-500 to-purple-500",
      perfectFor: "Students ready to engage actively",
      timeCommitment: "3-5 hours/month",
      benefits: [
        "All Community Member benefits",
        "Participate in hackathons and competitions",
        "Access to mentorship programs (give and receive)",
        "Join special interest groups (App Dev, Robotics, AI)",
        "Contribute to community projects",
        "Priority access to advanced workshops"
      ]
    },
    {
      level: "Student Leader",
      type: "Selective Application",
      icon: <Crown className="h-8 w-8" />,
      color: "purple",
      gradient: "from-purple-500 to-pink-500",
      perfectFor: "Students ready to lead and inspire others",
      timeCommitment: "8-10 hours/month",
      benefits: [
        "All Active Contributor benefits",
        "Leadership training and development programs",
        "Opportunity to lead regional chapters",
        "Direct involvement in strategic planning",
        "Exclusive leadership retreats and summits",
        "Global council nomination eligibility"
      ]
    }
  ];

  const applicationSteps = [
    {
      step: "1",
      title: "Complete Interest Form",
      description: "Share your basic information and goals with our community",
      icon: <MessageSquare className="h-6 w-6" />
    },
    {
      step: "2", 
      title: "Submit Portfolio",
      description: "Showcase your projects, achievements, and interests",
      icon: <Code className="h-6 w-6" />
    },
    {
      step: "3",
      title: "Virtual Interview",
      description: "15-minute conversation with current members",
      icon: <Users className="h-6 w-6" />
    },
    {
      step: "4",
      title: "Onboarding Session", 
      description: "Introduction to community and available resources",
      icon: <Globe className="h-6 w-6" />
    },
    {
      step: "5",
      title: "First Project Assignment",
      description: "Collaborative welcome project to get started",
      icon: <Star className="h-6 w-6" />
    }
  ];

  const benefits = [
    {
      title: "Technical Skills",
      description: "App development, programming, design thinking",
      icon: <Code className="h-6 w-6 text-blue-600" />
    },
    {
      title: "Global Network",
      description: "Friends and collaborators worldwide",
      icon: <Globe className="h-6 w-6 text-green-600" />
    },
    {
      title: "Leadership Experience", 
      description: "Real opportunities to lead and mentor",
      icon: <Crown className="h-6 w-6 text-purple-600" />
    },
    {
      title: "Project Portfolio",
      description: "Meaningful projects for college applications",
      icon: <Star className="h-6 w-6 text-orange-600" />
    }
  ];

  return (
    <div>
      <PageHeader
        title="Join empowerED"
        subtitle="Multiple Pathways to Global Tech Empowerment"
        description="Choose your level of engagement and become part of a global community of student innovators"
        backgroundImage="/images/classroom.jpg"
        gradient="from-blue-600 to-purple-700"
      />

      {/* Membership Levels */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your empowerED Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Three distinct membership levels designed to meet you wherever you are in your tech journey
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {membershipLevels.map((membership, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-gray-100"
              >
                <div className={`bg-gradient-to-r ${membership.gradient} p-8 text-white`}>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-white/20 backdrop-blur-sm rounded-lg">
                      {membership.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">
                        {membership.level}
                      </h3>
                      <p className="text-white/90">
                        {membership.type}
                      </p>
                    </div>
                  </div>
                  <p className="text-white/90 mb-4">
                    Perfect for: {membership.perfectFor}
                  </p>
                  <div className="flex items-center text-white/90">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="text-sm">{membership.timeCommitment}</span>
                  </div>
                </div>

                <div className="p-8">
                  <h4 className="font-semibold text-gray-900 mb-4">Benefits Include:</h4>
                  <ul className="space-y-3">
                    {membership.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="px-8 pb-8">
                  <button className={`w-full bg-gradient-to-r ${membership.gradient} text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-opacity`}>
                    Apply for {membership.level}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple Application Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join our global community in five easy steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {applicationSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                    {step.step}
                  </div>
                  {index < applicationSteps.length - 1 && (
                    <ArrowRight className="hidden md:block absolute top-6 left-20 h-6 w-6 text-gray-400" />
                  )}
                </div>
                <h3 className="font-bold text-gray-900 mb-3">
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

      {/* What You'll Gain */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What You'll Gain
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Beyond technical skills, empowerED provides life-changing experiences and connections
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="w-12 h-12 bg-gray-100 rounded-lg mx-auto mb-6 flex items-center justify-center">
                  {benefit.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* Additional Benefits */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-12 rounded-3xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Cultural Exchange
                </h3>
                <p className="text-gray-700 mb-4">
                  Learn from diverse perspectives and build friendships across continents. 
                  empowerED connects students from India, USA, and expanding globally.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>Cross-cultural project collaborations</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>Language exchange opportunities</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>Global perspective on technology solutions</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Career Guidance
                </h3>
                <p className="text-gray-700 mb-4">
                  Get mentorship from older students and professionals who've walked the same path. 
                  Build a network that will support your future endeavors.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>Mentorship from college students and professionals</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>Portfolio development for college applications</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>Industry connections and internship opportunities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Tech Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of students worldwide who are turning their curiosity into meaningful action
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              <Users className="mr-2 h-5 w-5" />
              Start Your Application
            </button>
            <Link
              href="/empowered/events"
              className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-blue-600 transition-colors"
            >
              <Globe className="mr-2 h-5 w-5" />
              Attend an Info Session
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-blue-600 transition-colors"
            >
              Have Questions?
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
