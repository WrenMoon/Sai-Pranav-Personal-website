import PageHeader from '@/components/ui/page-header';
import { Camera, Newspaper } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const MediaPage = () => {
  const featuredImages = [
    {
      src: "/images/robotics.jpg",
      alt: "Robotics Competition"
    },
    {
      src: "/images/award.jpg",
      alt: "Award Ceremony"
    },
    {
      src: "/images/global_meeting.jpg",
      alt: "Global Meeting"
    }
  ];

  return (
    <div>
      <PageHeader
        title="Media Center"
        subtitle="Gallery & Press Coverage"
        description="Explore visual highlights of our journey and latest media coverage"
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Gallery Section */}
            <Link
              href="/media/gallery"
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="aspect-[4/3] relative">
                <div className="grid grid-cols-2 gap-2 absolute inset-0 p-4">
                  {featuredImages.map((image, index) => (
                    <div
                      key={index}
                      className={`relative overflow-hidden rounded-lg ${
                        index === 2 ? 'col-span-2' : ''
                      }`}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center space-x-3 mb-2">
                  <Camera className="h-6 w-6" />
                  <h3 className="text-2xl font-bold">Photo Gallery</h3>
                </div>
                <p className="text-white/80">
                  Visual journey through competitions, events, and achievements
                </p>
              </div>
            </Link>

            {/* Press Section */}
            <Link
              href="/media/press"
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="aspect-[4/3] relative bg-gradient-to-br from-blue-600 to-purple-700">
                <div className="absolute inset-0 p-8">
                  <div className="space-y-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <span className="text-white/60 text-sm">Latest Coverage</span>
                      <h4 className="text-white font-medium mt-1">
                        National Bebras Champion 2024 Announced
                      </h4>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <span className="text-white/60 text-sm">Featured Story</span>
                      <h4 className="text-white font-medium mt-1">
                        empowerED: Student-Led Global Tech Initiative
                      </h4>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <span className="text-white/60 text-sm">Book Launch</span>
                      <h4 className="text-white font-medium mt-1">
                        'Play to Purpose' Released
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center space-x-3 mb-2">
                  <Newspaper className="h-6 w-6" />
                  <h3 className="text-2xl font-bold">Press Coverage</h3>
                </div>
                <p className="text-white/80">
                  Latest news, press releases, and media mentions
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Media Inquiries
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            For press inquiries, interview requests, or speaking engagements, 
            please reach out through our contact page.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MediaPage;