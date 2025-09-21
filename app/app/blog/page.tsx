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
          {/* Results Summary */}
          {search && (
            <div className="mb-8">
              <p className="text-gray-600">
                Found {meta.pagination.total} results for "{search}"
              </p>
            </div>
          )}

          {/* Blog Posts Grid */}
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post: any) => {
                const { attributes } = post;
                return (
                  <Link
                    key={attributes.slug}
                    href={`/blog/${attributes.slug}`}
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    {attributes.featuredImage?.data && (
                      <div className="aspect-[16/9] relative overflow-hidden">
                        <Image
                          src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${attributes.featuredImage.data.attributes.url}`}
                          alt={attributes.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full">
                          {attributes.category}
                        </span>
                        <span className="text-sm text-gray-500">
                          {formatDistanceToNow(new Date(attributes.publishedAt), { addSuffix: true })}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {attributes.title}
                      </h3>
                      <p className="text-gray-600 line-clamp-3">
                        {attributes.excerpt}
                      </p>
                      <div className="mt-4 flex items-center space-x-4">
                        {attributes.tags && attributes.tags.map((tag: string) => (
                          <span
                            key={tag}
                            className="text-sm text-gray-500"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">No blog posts found.</p>
            </div>
          )}

          {/* Pagination */}
          {meta.pagination.pageCount > 1 && (
            <div className="mt-12 flex justify-center">
              <nav className="flex items-center space-x-2">
                {Array.from({ length: meta.pagination.pageCount }, (_, i) => i + 1).map((pageNum) => (
                  <Link
                    key={pageNum}
                    href={{
                      pathname: '/blog',
                      query: {
                        ...searchParams,
                        page: pageNum
                      }
                    }}
                    className={`px-4 py-2 rounded-lg ${
                      pageNum === page
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {pageNum}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default BlogPage;