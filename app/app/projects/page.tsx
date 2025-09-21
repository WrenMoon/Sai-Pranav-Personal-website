

import PageHeader from '@/components/ui/page-header';
import Image from 'next/image';
import Link from 'next/link';
import { Trophy, Smartphone, Users, Camera, FileText, Code } from 'lucide-react';

const ProjectsPage = () => {
  const projectSections = [
    {
      title: "Competitions",
      description: "Robotics competitions including FRC, FTC, FGC, and Bebras Challenge achievements",
      icon: <Trophy className="h-8 w-8" />,
      href: "/projects/competitions",
      image: "/images/robotics.jpg",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      title: "Apps",
      description: "Mobile applications and development projects including MIT App Inventor creations",
      icon: <Smartphone className="h-8 w-8" />,
      href: "/projects/apps",
      image: "/images/tech_bg.jpg",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Mentorship",
      description: "Teaching, mentoring, and empowering the next generation of young innovators",
      icon: <Users className="h-8 w-8" />,
      href: "/projects/mentorship",
      image: "/images/classroom.jpg",
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Gallery",
      description: "Visual documentation of projects, competitions, workshops, and achievements",
      icon: <Camera className="h-8 w-8" />,
      href: "/projects/gallery",
      image: "/images/award.jpg",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Documents",
      description: "Technical documentation, research papers, presentations, and educational materials",
      icon: <FileText className="h-8 w-8" />,
      href: "/projects/documents",
      image: "/images/comp_thinking.jpg",
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  const featuredProjects = [
    {
      title: "Engineering Inspiration Award",
      description: "First Indian team to win FRC's prestigious Engineering Inspiration Award",
      category: "Robotics Competition",
      image: "/images/robotics.jpg"
    },
    {
      title: "National Bebras Champion",
      description: "Achieved National Champion status among 40,000+ participants",
      category: "Computational Thinking",
      image: "/images/comp_thinking.jpg"
    },
    {
      title: "empowerED Global Initiative",
      description: "Co-founded international student technology empowerment platform",
      category: "Leadership",
      image: "/images/global_meeting.jpg"
    }
  ];

  return (
    <div>
      <PageHeader
        title="Projects"
        subtitle="Innovation Through Action"
        description="Explore my journey through robotics competitions, app development, mentorship, and global collaboration initiatives"
        backgroundImage="/images/robotics.jpg"
      />

      {/* Featured Projects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key achievements and initiatives that showcase innovation and impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative aspect-video">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Project Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore different aspects of my work and contributions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectSections.map((section, index) => (
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

      {/* Technical Skills */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technical Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Core technical skills developed through hands-on projects and competitions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <Code className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Programming</h3>
              <p className="text-gray-600 text-sm">Robot control systems, mobile app development</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <FileText className="h-8 w-8 text-green-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">CAD Design</h3>
              <p className="text-gray-600 text-sm">3D modeling, prototyping, technical documentation</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <Users className="h-8 w-8 text-purple-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Project Management</h3>
              <p className="text-gray-600 text-sm">Team coordination, global collaboration</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <Trophy className="h-8 w-8 text-yellow-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Competition Strategy</h3>
              <p className="text-gray-600 text-sm">Strategic thinking, problem-solving</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Collaborate
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Interested in working together on innovative projects or learning more about my work?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Read Project Stories
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-blue-600 transition-colors"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
