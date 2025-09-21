
'use client';

import PageHeader from '@/components/ui/page-header';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Award, Users, Code, Globe, BookOpen, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TimelinePage = () => {
  const timelineEvents = [
    {
      year: "2025",
      events: [
        {
          month: "June",
          title: "CTiS 2025 Conference Presentation",
          description: "Presented 'Fostering Computational Thinking through CAD in Robotic Competitions' at CTiS 2025 Conference, Goa",
          category: "Speaking",
          icon: <BookOpen className="h-5 w-5" />,
          image: "/images/tech_bg.jpg"
        },
        {
          month: "April", 
          title: "Engineering Inspiration Award",
          description: "Team RFactor 6024 wins Engineering Inspiration Award - First Indian team to achieve this at FRC Championships, Houston",
          category: "Competition",
          icon: <Award className="h-5 w-5" />,
          image: "/images/robotics.jpg"
        },
        {
          month: "February",
          title: "MCT First Place",
          description: "Achieved 1st Place in MCT 2024-25 (Mathematics Concept Test) with 98 marks",
          category: "Academic",
          icon: <Award className="h-5 w-5" />,
          image: "/images/award.jpg"
        }
      ]
    },
    {
      year: "2024", 
      events: [
        {
          month: "December",
          title: "National Bebras Champion", 
          description: "Achieved National Champion status in Bebras Challenge with 40,000+ participants",
          category: "Competition",
          icon: <Award className="h-5 w-5" />,
          image: "/images/comp_thinking.jpg"
        },
        {
          month: "October",
          title: "empowerED Global Expansion",
          description: "Launched empowerED global expansion with transcontinental collaboration",
          category: "Leadership",
          icon: <Globe className="h-5 w-5" />,
          image: "/images/global_meeting.jpg"
        },
        {
          month: "September", 
          title: "First empowerED Meeting",
          description: "First empowerED online meeting with 12+ students from Goa and California",
          category: "Collaboration",
          icon: <Users className="h-5 w-5" />,
          image: "/images/global_meeting.jpg"
        },
        {
          month: "July",
          title: "MIT AI Summit Success",
          description: "Participated in MIT AI and Education Summit, won 3rd place in 'Hack the Climate' hackathon",
          category: "Competition",
          icon: <Code className="h-5 w-5" />,
          image: "/images/tech_bg.jpg"
        }
      ]
    },
    {
      year: "2023",
      events: [
        {
          month: "Season",
          title: "FGC 2024 Participation",
          description: "Participated in FGC 2024 as Team India member (Programming, CAD, Driving)",
          category: "Competition", 
          icon: <Code className="h-5 w-5" />,
          image: "/images/robotics.jpg"
        },
        {
          month: "Year",
          title: "FTC Mentorship",
          description: "Active mentorship with FTC Team #25005 TechInfinity - Mentored Progress High School to 2nd runners-up for Judges Choice Award",
          category: "Mentorship",
          icon: <Users className="h-5 w-5" />,
          image: "/images/classroom.jpg"
        }
      ]
    },
    {
      year: "2022",
      events: [
        {
          month: "Achievement",
          title: "Bebras State Level",
          description: "Rank 7 in Bebras Challenge (State level) - significant improvement from previous year",
          category: "Competition",
          icon: <Award className="h-5 w-5" />,
          image: "/images/comp_thinking.jpg"
        },
        {
          month: "Initiative",
          title: "Legogoa Team Launch",
          description: "Started 'Legogoa' team for Bebras preparation and tutorials, helping other students",
          category: "Teaching",
          icon: <BookOpen className="h-5 w-5" />,
          image: "/images/classroom.jpg"
        }
      ]
    },
    {
      year: "2021", 
      events: [
        {
          month: "Achievement",
          title: "First Bebras Participation",
          description: "Rank 10 in Bebras Challenge (First participation) - beginning of computational thinking journey",
          category: "Competition",
          icon: <Award className="h-5 w-5" />,
          image: "/images/comp_thinking.jpg"
        },
        {
          month: "Beginning",
          title: "STEM Journey Begins",
          description: "Started journey in computational thinking and robotics - the foundation of everything that followed",
          category: "Learning",
          icon: <Code className="h-5 w-5" />,
          image: "/images/tech_bg.jpg"
        }
      ]
    }
  ];

  const categoryColors = {
    Competition: "bg-yellow-100 text-yellow-800",
    Academic: "bg-blue-100 text-blue-800", 
    Speaking: "bg-purple-100 text-purple-800",
    Leadership: "bg-green-100 text-green-800",
    Collaboration: "bg-indigo-100 text-indigo-800",
    Mentorship: "bg-red-100 text-red-800",
    Teaching: "bg-orange-100 text-orange-800",
    Learning: "bg-gray-100 text-gray-800"
  };

  return (
    <div>
      <PageHeader
        title="Timeline"
        subtitle="Journey of Growth & Achievement"
        description="Chronological journey of key milestones, achievements, and growth in my STEM and leadership journey from 2021 to 2025"
        backgroundImage="/images/tech_bg.jpg"
      />

      {/* Interactive Timeline */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Interactive Timeline (2021-2025)
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From first-time participant to national champion and global collaborator
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>

            <div className="space-y-16">
              {timelineEvents.map((yearGroup, yearIndex) => (
                <motion.div
                  key={yearGroup.year}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: yearIndex * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Year marker */}
                  <div className="flex justify-center mb-8">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white px-8 py-4 rounded-full text-2xl font-bold shadow-lg">
                      {yearGroup.year}
                    </div>
                  </div>

                  {/* Events for the year */}
                  <div className="space-y-8">
                    {yearGroup.events.map((event, eventIndex) => (
                      <motion.div
                        key={eventIndex}
                        initial={{ opacity: 0, x: eventIndex % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: eventIndex * 0.1 }}
                        viewport={{ once: true }}
                        className={`relative flex items-center ${
                          eventIndex % 2 === 0 ? 'justify-start' : 'justify-end'
                        }`}
                      >
                        {/* Timeline dot */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-blue-500 rounded-full shadow-lg z-10"></div>

                        {/* Event card */}
                        <div className={`w-full max-w-md bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 ${
                          eventIndex % 2 === 0 ? 'mr-auto pr-12' : 'ml-auto pl-12'
                        }`}>
                          <div className="flex items-start space-x-4">
                            <div className="relative aspect-video w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                              <Image
                                src={event.image}
                                alt={event.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-2">
                                <span className={`px-2 py-1 text-xs font-medium rounded-full ${categoryColors[event.category as keyof typeof categoryColors]}`}>
                                  {event.category}
                                </span>
                                <span className="text-sm text-gray-500">{event.month}</span>
                              </div>
                              <h3 className="text-lg font-bold text-gray-900 mb-2">
                                {event.title}
                              </h3>
                              <p className="text-gray-600 text-sm leading-relaxed">
                                {event.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Insights */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Journey Insights
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key patterns and growth themes across my timeline
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Award className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Progressive Excellence
              </h3>
              <p className="text-gray-600">
                Consistent improvement from Bebras Rank 10 → Rank 7 → National Champion, 
                showing sustained growth and dedication
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                From Learning to Leading
              </h3>
              <p className="text-gray-600">
                Evolution from individual participant to mentor, team leader, 
                and global initiative founder
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Globe className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Global Impact
              </h3>
              <p className="text-gray-600">
                Expansion from local achievements to international collaboration 
                and cross-continental initiatives
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Explore More of My Journey
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Read detailed stories about these achievements or explore my current projects
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Read Detailed Stories
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Project Details
            </Link>
            <Link
              href="/about/media"
              className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-blue-600 transition-colors"
            >
              See Media Coverage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TimelinePage;
