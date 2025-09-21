
import PageHeader from '@/components/ui/page-header';
import Image from 'next/image';
import Link from 'next/link';
import { User, Calendar, Camera, Award, Code, Users, BookOpen } from 'lucide-react';

const AboutPage = () => {
  const aboutSections = [
    {
      title: "Biography",
      description: "Comprehensive background on my journey, achievements, and philosophy as a student innovator",
      icon: <User className="h-8 w-8" />,
      href: "/about/bio",
      image: "/images/professional_headshot.jpg"
    },
    {
      title: "Timeline",
      description: "Chronological journey of key milestones and achievements from 2021 to 2025",
      icon: <Calendar className="h-8 w-8" />,
      href: "/about/timeline", 
      image: "/images/award.jpg"
    },
    {
      title: "Media Coverage",
      description: "Press coverage, interviews, presentations, and visual documentation of my work",
      icon: <Camera className="h-8 w-8" />,
      href: "/about/media",
      image: "/images/tech_bg.jpg"
    }
  ];

  const expertise = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Robotics & Engineering",
      description: "FRC, FTC, FGC competition experience with robot design and programming"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Computational Thinking",
      description: "National-level expertise with Bebras Challenge championship"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Leadership & Mentorship",
      description: "Team building, student empowerment, and global collaboration"
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Education & Speaking",
      description: "Conference presentations and educational content creation"
    }
  ];

  return (
    <div>
      <PageHeader
        title="About Sai Pranav"
        subtitle="Student Innovator & Technology Leader"
        description="Learn about my journey from curious student to national champion and global collaborator"
        gradient="from-blue-600 to-purple-700"
      />

      {/* Introduction */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Driven by Curiosity, Powered by Innovation
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm Sai Pranav Gandhi, a Grade 10 student from Goa, India, driven by an 
                insatiable curiosity for how things work and a passion for using technology 
                to solve real-world problems. My journey began with simple questions about 
                robots and algorithms, leading me to become a national champion, published 
                author, and global collaborator.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                I believe that the best learning happens when curiosity meets structured thinking. 
                Through computational thinking principles—decomposition, pattern recognition, 
                abstraction, and algorithmic thinking—any complex problem becomes manageable. 
                My goal is to help other students discover this power and use it to create meaningful change.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/professional_headshot.jpg"
                  alt="Sai Pranav Gandhi"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Expertise */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core Expertise Areas
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Combining technical skills with leadership and communication abilities
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore My Story
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dive deeper into my background, achievements, and journey
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {aboutSections.map((section, index) => (
              <Link
                key={index}
                href={section.href}
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
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
