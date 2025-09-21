
import PageHeader from '@/components/ui/page-header';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Download, Play, Camera, Newspaper, Video, FileText, Share2 } from 'lucide-react';

const MediaPage = () => {
  const pressCoverage = [
    {
      outlet: "Hindustan Times",
      title: "Team RFactor 6024 Engineering Inspiration Award",
      description: "Coverage of the first Indian team to win the prestigious FRC Engineering Inspiration Award",
      date: "April 2025",
      link: "#",
      image: "/images/robotics.jpg"
    },
    {
      outlet: "The Print",
      title: "First Indian team to win prestigious FRC award", 
      description: "In-depth coverage of the historic achievement at FRC Championships",
      date: "April 2025",
      link: "#",
      image: "/images/award.jpg"
    },
    {
      outlet: "D-hunt Tribune",
      title: "Robotics achievement coverage",
      description: "Local coverage of robotics competition success and student innovation",
      date: "May 2025", 
      link: "#",
      image: "/images/robotics.jpg"
    },
    {
      outlet: "Local Goa Media",
      title: "MCT 2024-25 first place coverage",
      description: "Recognition for achieving first place in Mathematics Concept Test",
      date: "February 2025",
      link: "#",
      image: "/images/award.jpg"
    }
  ];

  const presentations = [
    {
      event: "CTiS 2025",
      title: "Fostering Computational Thinking through CAD in Robotic Competitions",
      description: "Detailed presentation on integrating CAD into robotics education",
      date: "June 2025",
      location: "Goa, India",
      videoAvailable: true,
      image: "/images/tech_bg.jpg"
    },
    {
      event: "CTiS 2024",
      title: "Learning Computational Thinking with Robotics",
      description: "Previous year's presentation on robotics and CT education",
      date: "June 2024",
      location: "Goa, India", 
      videoAvailable: false,
      image: "/images/comp_thinking.jpg"
    },
    {
      event: "MIT AI and Education Summit",
      title: "Hack the Climate Hackathon Presentation",
      description: "3rd place presentation at prestigious MIT summit",
      date: "July 2024",
      location: "Virtual",
      videoAvailable: true,
      image: "/images/tech_bg.jpg"
    }
  ];

  const photoGalleries = [
    {
      category: "Competition Photos",
      description: "FRC, FTC, FGC events and robot demonstrations",
      count: 45,
      image: "/images/robotics.jpg"
    },
    {
      category: "Award Ceremonies",
      description: "MCT, Bebras, Engineering Inspiration Award ceremonies",
      count: 32,
      image: "/images/award.jpg"
    },
    {
      category: "Workshop & Mentorship", 
      description: "Teaching sessions, lab work, and mentoring activities",
      count: 28,
      image: "/images/classroom.jpg"
    },
    {
      category: "Team Collaborations",
      description: "Group photos, working sessions, and team meetings",
      count: 41,
      image: "/images/global_meeting.jpg"
    }
  ];

  const publications = [
    {
      title: "FGC 2024: A Rollercoaster Ride of Engineering and Teamwork",
      platform: "Medium",
      description: "Detailed blog post about the FGC experience and robot development process",
      date: "February 2025",
      type: "Blog Post",
      link: "https://medium.com/@saipranavsg/fgc-2024-a-rollercoaster-ride-of-engineering-and-teamwork-4a7372274fcc"
    },
    {
      title: "Showcasing Innovation in Computational Thinking at CTiS 2025",
      platform: "Personal Blog",
      description: "Reflection on presenting at CTiS 2025 conference",
      date: "June 2025", 
      type: "Conference Report",
      link: "#"
    },
    {
      title: "empowerED Initiative Documentation",
      platform: "empowerED Website",
      description: "Comprehensive documentation of the global student collaboration initiative",
      date: "Ongoing",
      type: "Initiative Documentation",
      link: "#"
    }
  ];

  return (
    <div>
      <PageHeader
        title="Media Coverage"
        subtitle="Press, Presentations & Documentation"
        description="Showcase of media coverage, interviews, presentations, and visual documentation of my journey and achievements"
        backgroundImage="/images/tech_bg.jpg"
      />

      {/* Press Coverage */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Press Coverage
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Media recognition for achievements and contributions to STEM education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pressCoverage.map((article, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
              >
                <div className="relative aspect-video">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Press
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-blue-600 font-semibold">{article.outlet}</span>
                    <span className="text-gray-500 text-sm">{article.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {article.description}
                  </p>
                  <Link
                    href={article.link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Read Article
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conference Presentations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Conference Presentations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Speaking engagements and presentations at educational conferences
            </p>
          </div>

          <div className="space-y-8">
            {presentations.map((presentation, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  <div className="relative aspect-video lg:aspect-square">
                    <Image
                      src={presentation.image}
                      alt={presentation.title}
                      fill
                      className="object-cover"
                    />
                    {presentation.videoAvailable && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                        <div className="bg-white/90 p-3 rounded-full">
                          <Play className="h-6 w-6 text-blue-600" />
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="lg:col-span-2 p-6 flex flex-col justify-center">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                        {presentation.event}
                      </span>
                      <span className="text-gray-500 text-sm">{presentation.date}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {presentation.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {presentation.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-gray-500">
                        📍 {presentation.location}
                      </div>
                      {presentation.videoAvailable && (
                        <Link
                          href="#"
                          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                        >
                          <Play className="mr-2 h-4 w-4" />
                          Watch Video
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Galleries */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Photo Galleries
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Visual documentation of competitions, workshops, and collaborative work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {photoGalleries.map((gallery, index) => (
              <div
                key={index}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src={gallery.image}
                    alt={gallery.category}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center justify-between text-white">
                      <div>
                        <h3 className="text-xl font-bold mb-1">
                          {gallery.category}
                        </h3>
                        <p className="text-white/90 text-sm">
                          {gallery.description}
                        </p>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="text-sm font-medium">{gallery.count} photos</span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg">
                      <Camera className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications & Articles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Publications & Articles
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Written content, blog posts, and technical documentation
            </p>
          </div>

          <div className="space-y-6">
            {publications.map((publication, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {publication.type}
                      </span>
                      <span className="text-gray-500 text-sm">{publication.platform}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-500 text-sm">{publication.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {publication.title}
                    </h3>
                    <p className="text-gray-600">
                      {publication.description}
                    </p>
                  </div>
                  <Link
                    href={publication.link}
                    className="ml-4 inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    Read
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Media Resources
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Access press materials, high-resolution photos, and biography for media coverage
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              <Download className="mr-2 h-5 w-5" />
              Download Media Kit
            </button>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-blue-600 transition-colors"
            >
              Request Interview
            </Link>
            <button className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-blue-600 transition-colors">
              <Share2 className="mr-2 h-5 w-5" />
              Share on Social Media
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MediaPage;
