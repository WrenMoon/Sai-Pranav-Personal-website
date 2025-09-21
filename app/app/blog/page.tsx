import PageHeader from '@/components/ui/page-header';
import Link from 'next/link';

interface BlogPageProps {
  searchParams: {
    search?: string;
    category?: string;
    tag?: string;
    page?: string;
  };
}

async function BlogPage({ searchParams }: BlogPageProps) {
  // Get filters from search params
  const search = searchParams.search || '';
  const category = searchParams.category || '';
  const tag = searchParams.tag || '';
  const page = parseInt(searchParams.page || '1');

  return (
    <div>
      <PageHeader
        title="Blog"
        subtitle="Thoughts, Insights & Updates"
        description="Explore articles about robotics, computational thinking, and student innovation"
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Placeholder for Search and Filters - removed as Strapi is gone */}
          <div className="mb-12 text-center">
            <p className="text-gray-600">Blog content is currently unavailable.</p>
            <p className="text-gray-600">You can link to your external blog here.</p>
          </div>

          {/* Placeholder for Blog Posts Grid */}
          <div className="text-center py-12">
            <p className="text-gray-600">No blog posts found.</p>
          </div>

          {/* Placeholder for Pagination */}
          <div className="mt-12 flex justify-center">
            <p className="text-gray-600">Pagination unavailable.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogPage;
