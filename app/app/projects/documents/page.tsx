

import PageHeader from '@/components/ui/page-header';
import Link from 'next/link';

export default function DocumentsPage() {
  return (
    <div>
      <PageHeader
        title="Documents"
        subtitle="Coming Soon"
        description="Technical documentation and research papers will be available in the next phase"
        backgroundImage="/images/comp_thinking.jpg"
      />
      
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-gray-600 mb-8">
            This section will feature technical documentation and research materials.
          </p>
          <Link
            href="/projects"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Projects
          </Link>
        </div>
      </section>
    </div>
  );
}
