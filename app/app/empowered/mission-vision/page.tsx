

import PageHeader from '@/components/ui/page-header';
import Link from 'next/link';

export default function MissionVisionPage() {
  return (
    <div>
      <PageHeader
        title="Mission & Vision"
        subtitle="Coming Soon"
        description="Detailed mission and vision content will be available in the next phase"
        backgroundImage="/images/global_meeting.jpg"
      />
      
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-gray-600 mb-8">
            This section will feature detailed content about empowerED&apos;s mission and vision.
          </p>
          <Link
            href="/empowered"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to empowerED
          </Link>
        </div>
      </section>
    </div>
  );
}
