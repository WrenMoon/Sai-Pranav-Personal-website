
import PageHeader from '@/components/ui/page-header';
import Image from 'next/image';
import Link from 'next/link';
import { Globe, Users, Heart, Lightbulb, ArrowRight, Target, Eye, Zap } from 'lucide-react';

const EmpoweredPage = () => {
  const empoweredSections = [
    {
      title: "Mission & Vision",
      description: "Our core mission, vision, and impact in democratizing technology education globally",
      icon: <Target className="h-8 w-8" />,
      href: "/empowered/mission-vision",
      image: "/images/global_meeting.jpg",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Join empowerED",
      description: "Multiple pathways for students to engage at different levels and contribute meaningfully",
      icon: <Users className="h-8 w-8" />,
      href: "/empowered/join",
      image: "/images/classroom.jpg",
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Events & Workshops",
      description: "Educational programming, upcoming events, and skill development opportunities",
      icon: <Lightbulb className="h-8 w-8" />,
      href: "/empowered/events",
      image: "/images/tech_bg.jpg",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Success Stories",
      description: "Impact stories, testimonials, and achievements from our global community",
      icon: <Heart className="h-8 w-8" />,
      href: "/empowered/success-stories",
      image: "/images/award.jpg",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const impactStats = [
    {
      icon: <Globe className="h-8 w-8" />,
      number: "2+",
      label: "Countries",
      description: "India & USA, expanding globally"
    },
    {
      icon: <Users className="h-8 w-8" />,
      number: "50+",
      label: "Active Students",
      description: "Engaged participants worldwide"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      number: "15+",
      label: "Projects Completed",
      description: "Collaborative initiatives"
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      number: "Multiple",
      label: "Languages",
      description: "English, expanding further"
    }
  ];

  return (
    <div>
      <PageHeader
        title="empowerED"
        subtitle="Global Student Tech Empowerment Initiative"
        description="Democratizing technology education through student-led collaboration, peer learning, and meaningful global connections"
        backgroundImage="/images/global_meeting.jpg"
        gradient="from-green-600 to-blue-700"
      />

      {/* Mission Statement */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mb-8">
              <Globe className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-3xl">
              <blockquote className="text-xl md:text-2xl text-gray-800 leading-relaxed">
                "empowerED exists to democratize technology education by creating a global network 
                of student innovators who learn from each other, collaborate across borders, and 
                build solutions that matter. We believe the future of tech education is peer-to-peer, 
                practical, and purpose-driven."
              </blockquote>
            </div>
          </div>

          {/* The empowerED Story */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                The empowerED Story
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Born from a chance meeting at the MIT AI and Education Summit in July 2024, 
                  empowerED began when students from Goa, India, and California, USA, discovered 
                  their shared passion for technology and education.
                </p>
                <p>
                  What started as a hackathon collaboration has grown into a global movement 
                  connecting students across continents. We won 3rd place in the "Hack the Climate" 
                  hackathon, but more importantly, we discovered the power of transcontinental collaboration.
                </p>
                <p>
                  Today, empowerED is expanding beyond our initial two regions, building a 
                  sustainable network of student leaders who believe that the best way to learn 
                  technology is by teaching it, sharing it, and using it to solve real problems.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/global_meeting.jpg"
                  alt="empowerED global collaboration"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-teal-600 text-white p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">2024</div>
                  <div className="text-sm">Founded</div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">MIT</div>
                  <div className="text-sm">Origin</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Global Impact & Reach
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Building meaningful connections and creating real impact across continents
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl mx-auto mb-6 flex items-center justify-center text-white">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-800 mb-2">
                  {stat.label}
                </div>
                <div className="text-gray-600 text-sm">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide every aspect of empowerED
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-500">
              <div className="w-12 h-12 bg-blue-100 rounded-lg mb-6 flex items-center justify-center">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Student-Led
              </h3>
              <p className="text-gray-600">
                By students, for students - peer learning at its finest with authentic experiences and perspectives
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-green-500">
              <div className="w-12 h-12 bg-green-100 rounded-lg mb-6 flex items-center justify-center">
                <Globe className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Global Collaboration
              </h3>
              <p className="text-gray-600">
                Breaking down geographical barriers to learning and creating opportunities for cross-cultural exchange
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-purple-500">
              <div className="w-12 h-12 bg-purple-100 rounded-lg mb-6 flex items-center justify-center">
                <Zap className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Practical Application
              </h3>
              <p className="text-gray-600">
                Learning through real projects and challenges that have meaningful impact in communities
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-orange-500">
              <div className="w-12 h-12 bg-orange-100 rounded-lg mb-6 flex items-center justify-center">
                <Heart className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Inclusive Access
              </h3>
              <p className="text-gray-600">
                Technology education for all, regardless of geographic location or economic background
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-red-500">
              <div className="w-12 h-12 bg-red-100 rounded-lg mb-6 flex items-center justify-center">
                <Target className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Meaningful Impact
              </h3>
              <p className="text-gray-600">
                Projects and initiatives that solve real-world problems and create lasting positive change
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-teal-500">
              <div className="w-12 h-12 bg-teal-100 rounded-lg mb-6 flex items-center justify-center">
                <Lightbulb className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Innovation Mindset
              </h3>
              <p className="text-gray-600">
                Encouraging creative problem-solving, experimentation, and continuous learning
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Sections */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore empowerED
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover how you can be part of the global student tech empowerment movement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {empoweredSections.map((section, index) => (
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
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {section.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {section.description}
                    </p>
                    <div className="flex items-center text-blue-600 font-medium">
                      Explore
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join the Movement?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Whether you're a student ready to innovate, an educator wanting to collaborate, 
            or an organization looking to support global tech education - there's a place for you in empowerED.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/empowered/join"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Users className="mr-2 h-5 w-5" />
              Join empowerED
            </Link>
            <Link
              href="/empowered/events"
              className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-blue-600 transition-colors"
            >
              <Lightbulb className="mr-2 h-5 w-5" />
              Attend an Event
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-blue-600 transition-colors"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmpoweredPage;
