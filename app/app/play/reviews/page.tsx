

import PageHeader from '@/components/ui/page-header';
import Link from 'next/link';

export default function ReviewsPage() {
  return (
    <div>
      <PageHeader
        title="Reviews & Testimonials"
        subtitle="Coming Soon"
        description="Reader reviews and testimonials will be available in the next phase"
        backgroundImage="/images/classroom.jpg"
      />
      
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-gray-600 mb-8">
            This section will feature reviews and testimonials from readers and educators.
          </p>
          <Link
            href="/play"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Play Section
          </Link>
        </div>
      </section>
    </div>
  );
}
