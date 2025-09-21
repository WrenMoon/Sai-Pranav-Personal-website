import { getBlogPost } from '@/lib/strapi';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { format } from 'date-fns';

export const revalidate = 3600; // Revalidate every hour

async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  const { attributes } = post;

  return (
    <article className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full">
              {attributes.category}
            </span>
            <time className="text-gray-500" dateTime={attributes.publishedAt}>
              {format(new Date(attributes.publishedAt), 'MMMM d, yyyy')}
            </time>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {attributes.title}
          </h1>
          {attributes.excerpt && (
            <p className="text-xl text-gray-600 mb-8">
              {attributes.excerpt}
            </p>
          )}
        </header>

        {/* Featured Image */}
        {attributes.featuredImage?.data && (
          <div className="relative aspect-[16/9] mb-12 rounded-2xl overflow-hidden">
            <Image
              src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${attributes.featuredImage.data.attributes.url}`}
              alt={attributes.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Content */}
        <div 
          className="prose prose-lg prose-blue max-w-none"
          dangerouslySetInnerHTML={{ __html: attributes.content }}
        />

        {/* Tags */}
        {attributes.tags && attributes.tags.length > 0 && (
          <div className="mt-12 pt-8 border-t">
            <div className="flex items-center flex-wrap gap-2">
              {attributes.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="inline-block px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Additional Images */}
        {attributes.images?.data && attributes.images.data.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {attributes.images.data.map((image: any) => (
                <div
                  key={image.id}
                  className="relative aspect-square rounded-lg overflow-hidden"
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${image.attributes.url}`}
                    alt={image.attributes.alternativeText || ''}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

export default BlogPostPage;