import { notFound } from 'next/navigation';
import Image from 'next/image'; // Keep Image import if other images are used, otherwise remove.
import { format } from 'date-fns'; // Keep format import if other date formatting is used.

// Blog post functionality has been removed as it is no longer required.
// If you wish to re-implement this feature, please integrate a new data fetching method.

async function BlogPostPage({ params }: { params: { slug: string } }) {
  // const post = await getBlogPost(params.slug); // Removed Strapi call

  // if (!post) { // Removed Strapi check
  //   notFound();
  // }

  // const { attributes } = post; // Removed Strapi data access

  return (
    <article className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Feature Removed</h1>
        <p className="text-xl text-gray-600 mb-8">
          The blog post functionality has been removed. Please integrate a new data fetching method if you wish to restore this feature.
        </p>
      </div>
    </article>
  );
}

export default BlogPostPage;
