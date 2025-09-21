

import PageHeader from '@/components/ui/page-header';
import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, Clock, MessageSquare, Play, ArrowRight, Lightbulb, CheckCircle, Users } from 'lucide-react';

export default function SampleChapterPage() {
  const chapterHighlights = [
    {
      concept: "Decomposition in Robot Design",
      description: "Breaking complex mechanisms into manageable components",
      icon: <Lightbulb className="h-6 w-6" />
    },
    {
      concept: "Practical Problem-Solving",
      description: "Step-by-step approach to engineering challenges",
      icon: <CheckCircle className="h-6 w-6" />
    },
    {
      concept: "Real-World Application",
      description: "FGC robot elevator mechanism case study",
      icon: <Users className="h-6 w-6" />
    }
  ];

  const readingFeatures = [
    "Estimated reading time: 12 minutes",
    "Key concept highlights throughout",
    "Interactive diagrams and illustrations", 
    "Progress tracking as you read",
    "Note-taking capability for study groups"
  ];

  return (
    <div>
      <PageHeader
        title="Sample Chapter"
        subtitle="From Curiosity to Code: My First Robot"
        description="Experience the Play to Purpose methodology through a complete chapter showcasing personal narrative, technical concepts, and practical problem-solving"
        backgroundImage="/images/robotics.jpg"
        gradient="from-purple-600 to-blue-700"
      />

      {/* Chapter Overview */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-12 rounded-3xl">
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
              Featured Sample Chapter
            </h2>
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-semibold text-gray-800">
                "From Curiosity to Code: My First Robot"
              </h3>
              <div className="flex items-center justify-center space-x-6 text-gray-600">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>12 min read</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageSquare className="h-5 w-5" />
                  <span>Discussion questions included</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Play className="h-5 w-5" />
                  <span>Video explanations</span>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                This chapter showcases the complete Play to Purpose methodology through the author's 
                journey from initial curiosity about robotics to building and programming a competition robot. 
                Experience the personal narrative, step-by-step problem-solving approach, and technical concepts 
                explained in an accessible way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Chapter Highlights
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key concepts and practical applications you'll discover in this sample chapter
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {chapterHighlights.map((highlight, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-purple-100 rounded-lg mb-6 flex items-center justify-center text-purple-600">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {highlight.concept}
                </h3>
                <p className="text-gray-600">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Content Preview */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border-l-4 border-purple-500 rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Chapter Preview</h3>
            
            <div className="prose prose-lg max-w-none">
              <blockquote className="text-xl text-gray-800 italic leading-relaxed mb-8 bg-gray-50 p-6 rounded-lg">
                "I still remember the moment I first saw a robot move under its own control. It was at a local FTC demonstration, 
                and watching that seemingly simple metal frame navigate obstacles and complete tasks felt like witnessing magic. 
                But as I would learn over the coming months, the real magic wasn't in the robot itself—it was in the systematic 
                approach to breaking down complex challenges into manageable pieces."
              </blockquote>

              <h4 className="text-xl font-semibold text-gray-900 mb-4">The Curiosity Spark</h4>
              <p className="text-gray-700 leading-relaxed mb-6">
                My journey into robotics began not with code or circuits, but with a simple question: "How does it know what to do?" 
                This question, sparked by watching robots at a local competition, would become the foundation for everything I learned 
                about computational thinking, problem-solving, and collaborative innovation.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                What started as curiosity quickly transformed into something more structured when I joined my first robotics team. 
                But I quickly discovered that building a robot wasn't just about assembling parts—it required a completely new way 
                of thinking about problems...
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                <h5 className="font-semibold text-blue-900 mb-2">Key Concept: Decomposition</h5>
                <p className="text-blue-800">
                  In robotics, decomposition means breaking down complex mechanisms into individual components that can be 
                  understood, designed, and programmed separately. This fundamental principle of computational thinking 
                  applies far beyond robotics—it's a life skill for tackling any complex challenge.
                </p>
              </div>

              <h4 className="text-xl font-semibold text-gray-900 mb-4">From Problem to Solution</h4>
              <p className="text-gray-700 leading-relaxed mb-6">
                The elevator mechanism on our FGC robot became my first real lesson in decomposition. What seemed like an 
                impossibly complex system—lift objects, maintain stability, coordinate with other mechanisms—suddenly became 
                manageable when we broke it down into its component parts:
              </p>

              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6 ml-6">
                <li>Power transmission: How do we convert motor rotation into linear motion?</li>
                <li>Load management: How do we support the weight at different heights?</li>
                <li>Position control: How does the robot know where the elevator is?</li>
                <li>Safety systems: What happens if something goes wrong?</li>
              </ul>

              <div className="text-center py-6">
                <p className="text-gray-600 italic">
                  [This preview represents approximately 15% of the complete chapter...]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reading Experience Features */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Enhanced Reading Experience
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                The complete chapter includes interactive features designed to enhance learning 
                and engagement, making complex concepts accessible to readers at all levels.
              </p>
              <ul className="space-y-4">
                {readingFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/comp_thinking.jpg"
                  alt="Interactive reading experience"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Chapter Resources
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Enhance your learning with supplementary materials and community engagement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Play className="h-10 w-10 text-purple-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Video Explanations</h3>
              <p className="text-gray-600 text-sm">Watch the author explain key concepts with visual demonstrations</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <BookOpen className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Additional Resources</h3>
              <p className="text-gray-600 text-sm">Links to reference materials, tools, and further reading</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <MessageSquare className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Discussion Questions</h3>
              <p className="text-gray-600 text-sm">Thought-provoking questions for individual reflection or group study</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <ArrowRight className="h-10 w-10 text-orange-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Next Chapter Preview</h3>
              <p className="text-gray-600 text-sm">Sneak peek at the next chapter's concepts and applications</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Actions */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Read the Complete Book?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            This sample chapter is just the beginning. Discover the complete Play to Purpose methodology and transform your approach to learning and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/play/download"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Get the Complete Book
            </Link>
            <Link
              href="/play/reviews"
              className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-blue-600 transition-colors"
            >
              Read More Reviews
            </Link>
            <Link
              href="/play/interact"
              className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-blue-600 transition-colors"
            >
              Try Interactive Tools
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
