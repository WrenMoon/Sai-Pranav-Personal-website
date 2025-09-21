import PageHeader from '@/components/ui/page-header';
import { Calendar, Globe, Award, Book } from 'lucide-react';
import Link from 'next/link';

const PressPage = () => {
  const pressReleases = [
    {
      title: "National Bebras Champion 2024 Announced",
      publication: "Tech Education Weekly",
      date: "March 2024",
      description: "Sai Pranav Gandhi emerges as the National Champion in the Bebras Challenge 2024, competing against 40,000+ participants.",
      link: "#",
      icon: <Award className="h-6 w-6 text-yellow-500" />
    },
    {
      title: "empowerED: Student-Led Global Tech Initiative",
      publication: "Education Innovation Today",
      date: "February 2024",
      description: "How a student-led initiative is bridging the gap in technology education across continents.",
      link: "#",
      icon: <Globe className="h-6 w-6 text-blue-500" />
    },
    {
      title: "'Play to Purpose' Book Launch",
      publication: "Youth Leadership Magazine",
      date: "January 2024",
      description: "Student author releases book on computational thinking and problem-solving for young innovators.",
      link: "#",
      icon: <Book className="h-6 w-6 text-green-500" />
    }
  ];

  const upcomingEvents = [
    {
      title: "CTiS 2025 Conference Presentation",
      date: "April 2025",
      location: "Virtual Event",
      description: "Speaking on 'Empowering Youth Through Computational Thinking'"
    },
    {
      title: "Global Student Innovation Summit",
      date: "May 2025",
      location: "Mumbai, India",
      description: "Panel discussion on youth-led tech initiatives"
    }
  ];

  return (
    <div>
      <PageHeader
        title="Press & News"
        subtitle="Media Coverage & Upcoming Events"
        description="Latest news, press releases, and upcoming speaking engagements."
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Press Releases */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Press Coverage</h2>
            <div className="grid gap-8">
              {pressReleases.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-blue-600">
                          {item.publication}
                        </span>
                        <span className="text-sm text-gray-500">
                          {item.date}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {item.description}
                      </p>
                      <Link
                        href={item.link}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                      >
                        Read More
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Upcoming Events</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      <Calendar className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">
                        {event.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {event.date} • {event.location}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    {event.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PressPage;
