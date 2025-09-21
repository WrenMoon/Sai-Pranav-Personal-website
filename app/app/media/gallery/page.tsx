import PageHeader from '@/components/ui/page-header';
import Image from 'next/image';

const GalleryPage = () => {
  const galleryItems = [
    {
      title: "Robotics Competition",
      image: "/images/robotics.jpg",
      category: "Competitions",
      description: "Team RFactor 6024 at the FIRST Robotics Competition"
    },
    {
      title: "Global Meeting",
      image: "/images/global_meeting.jpg",
      category: "empowerED",
      description: "Virtual collaboration with international student innovators"
    },
    {
      title: "Award Ceremony",
      image: "/images/award.jpg",
      category: "Achievements",
      description: "Receiving the Engineering Inspiration Award"
    },
    {
      title: "Computational Thinking Workshop",
      image: "/images/computational_thinking_viz.jpg",
      category: "Education",
      description: "Leading a workshop on computational thinking principles"
    },
    {
      title: "Book Launch",
      image: "/images/play_to_purpose_book.jpg",
      category: "Publications",
      description: "Play to Purpose book launch event"
    },
    {
      title: "Classroom Innovation",
      image: "/images/classroom.jpg",
      category: "Education",
      description: "Implementing innovative teaching methods in STEM education"
    }
  ];

  return (
    <div>
      <PageHeader
        title="Media Gallery"
        subtitle="Visual Journey Through My Work"
        description="Explore moments from competitions, workshops, and global collaborations that showcase our impact in technology and education."
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full mb-3">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
