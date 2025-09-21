

import PageHeader from '@/components/ui/page-header';
import Image from 'next/image';
import Link from 'next/link';
import { Trophy, Medal, Star, TrendingUp, Globe, Users, Code, Zap } from 'lucide-react';

export default function CompetitionsPage() {
  const majorCompetitions = [
    {
      title: "FIRST Robotics Competition (FRC)",
      team: "RFactor 6024 (Mumbai-based)",
      achievement: "Engineering Inspiration Award Winner",
      year: "2025",
      role: "Primary programmer and main driver",
      impact: "First Indian team to win this prestigious award",
      media: "Featured in Hindustan Times, The Print, Tribune",
      technical: "Swerve drive programming, autonomous navigation, PID control systems",
      icon: <Trophy className="h-8 w-8" />,
      gradient: "from-yellow-500 to-orange-500",
      image: "/images/robotics.jpg"
    },
    {
      title: "FIRST Global Challenge (FGC)",
      team: "Team India",
      achievement: "International Representation",
      year: "2024", 
      role: "Programming lead, CAD designer, primary driver",
      impact: "Represented India on the global stage",
      technical: "Robot programming, elevator mechanism design, competition driving",
      skills: "International collaboration, pressure performance, technical documentation",
      icon: <Globe className="h-8 w-8" />,
      gradient: "from-blue-500 to-cyan-500",
      image: "/images/global_meeting.jpg"
    },
    {
      title: "Bebras Computational Thinking Challenge",
      achievement: "National Champion 2024",
      year: "2024",
      participants: "40,000+ participants",
      progression: "Rank 10 (2021) → Rank 7 (2022) → National Champion (2024)",
      team: "Legogoa (tutorial creation and peer mentorship)",
      impact: "Mentored multiple students to state-level rankings",
      icon: <Star className="h-8 w-8" />,
      gradient: "from-purple-500 to-pink-500",
      image: "/images/comp_thinking.jpg"
    },
    {
      title: "Mathematics Concept Test (MCT)",
      achievement: "1st Place Standard IX",
      year: "2024-25",
      score: "98/100 marks",
      progression: "Rank 10 (Grade 7) → Rank 7 (Grade 8) → Rank 1 (Grade 9)",
      organization: "All Goa Mathematics Teachers' Association (AGMTA)",
      icon: <Medal className="h-8 w-8" />,
      gradient: "from-green-500 to-teal-500",
      image: "/images/award.jpg"
    }
  ];

  const technicalSkills = [
    {
      skill: "Robot Programming",
      description: "Control systems, autonomous navigation, real-time algorithms",
      icon: <Code className="h-6 w-6" />
    },
    {
      skill: "CAD Design & 3D Modeling", 
      description: "Mechanical design, prototyping, technical documentation",
      icon: <Zap className="h-6 w-6" />
    },
    {
      skill: "Mathematical Optimization",
      description: "Algorithm optimization, performance analysis, strategic modeling",
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      skill: "Team Leadership",
      description: "Cross-cultural collaboration, mentorship, strategic planning",
      icon: <Users className="h-6 w-6" />
    }
  ];

  return (
    <div>
      <PageHeader
        title="Competitions"
        subtitle="Excellence Through Innovation"
        description="From local mathematics contests to international robotics competitions, showcasing a journey of continuous learning and achievement"
        backgroundImage="/images/robotics.jpg"
      />

      {/* Competition Journey Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Competition Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Four years of competitive excellence spanning robotics, mathematics, and computational thinking
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {majorCompetitions.map((comp, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative aspect-video">
                  <Image
                    src={comp.image}
                    alt={comp.title}
                    fill
                    className="object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${comp.gradient} opacity-80`} />
                  <div className="absolute top-4 left-4">
                    <div className="p-3 bg-white/20 backdrop-blur-sm rounded-lg text-white">
                      {comp.icon}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                      {comp.year}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {comp.title}
                  </h3>
                  <div className="text-lg font-semibold text-blue-600 mb-4">
                    {comp.achievement}
                  </div>
                  
                  <div className="space-y-3 text-gray-600">
                    {comp.team && (
                      <div><span className="font-medium">Team:</span> {comp.team}</div>
                    )}
                    {comp.role && (
                      <div><span className="font-medium">Role:</span> {comp.role}</div>
                    )}
                    {comp.participants && (
                      <div><span className="font-medium">Scale:</span> {comp.participants}</div>
                    )}
                    {comp.score && (
                      <div><span className="font-medium">Score:</span> {comp.score}</div>
                    )}
                    {comp.progression && (
                      <div><span className="font-medium">Journey:</span> {comp.progression}</div>
                    )}
                    {comp.impact && (
                      <div><span className="font-medium">Impact:</span> {comp.impact}</div>
                    )}
                    {comp.media && (
                      <div><span className="font-medium">Media:</span> {comp.media}</div>
                    )}
                    {comp.technical && (
                      <div><span className="font-medium">Technical:</span> {comp.technical}</div>
                    )}
                    {comp.organization && (
                      <div><span className="font-medium">Organization:</span> {comp.organization}</div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Developed */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Competition Skills Developed
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Technical and soft skills honed through years of competitive experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technicalSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4 flex items-center justify-center text-blue-600">
                  {skill.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-3">
                  {skill.skill}
                </h3>
                <p className="text-gray-600 text-sm">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competition Philosophy */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-12 rounded-3xl">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mx-auto mb-6 flex items-center justify-center text-white">
                <Trophy className="h-8 w-8" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Competition Philosophy
              </h2>
              <blockquote className="text-xl text-gray-800 leading-relaxed mb-8">
                "Competitions aren't just about winning—they're about pushing the boundaries of what's possible, 
                learning under pressure, and discovering that the real victory lies in the skills, friendships, 
                and confidence you gain along the way. Every competition is a classroom, every challenge is a teacher."
              </blockquote>
              <cite className="text-gray-600 font-medium">— Sai Pranav Gandhi</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-yellow-600 to-orange-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Inspired by Competition Excellence?
          </h2>
          <p className="text-xl text-yellow-100 mb-8">
            Learn how these competition experiences shaped innovative projects and global collaborations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/projects/apps"
              className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Code className="mr-2 h-5 w-5" />
              Explore App Projects
            </Link>
            <Link
              href="/projects/mentorship"
              className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-orange-600 transition-colors"
            >
              <Users className="mr-2 h-5 w-5" />
              See Mentorship Impact
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
