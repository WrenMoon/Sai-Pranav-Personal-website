

import PageHeader from '@/components/ui/page-header';

const TermsPage = () => {
  return (
    <div>
      <PageHeader
        title="Terms of Use"
        subtitle="Website Usage Guidelines"
        description="Terms and conditions for using this website and its content"
        backgroundImage="/images/tech_bg.jpg"
      />

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2>Terms of Use</h2>
            <p><strong>Last updated: August 2025</strong></p>

            <h3>Acceptance of Terms</h3>
            <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>

            <h3>Intellectual Property</h3>
            <p>The content on this website, including but not limited to text, graphics, images, and other material, is owned by Sai Pranav Gandhi and is protected by copyright and other intellectual property laws.</p>

            <h3>Permitted Use</h3>
            <p>You may:</p>
            <ul>
              <li>View and browse the website content</li>
              <li>Share links to website content</li>
              <li>Contact for speaking engagements and collaborations</li>
              <li>Reference work with proper attribution</li>
            </ul>

            <h3>Prohibited Use</h3>
            <p>You may not:</p>
            <ul>
              <li>Reproduce, distribute, or republish content without permission</li>
              <li>Use content for commercial purposes without authorization</li>
              <li>Attempt to gain unauthorized access to any part of the website</li>
            </ul>

            <h3>Contact Information</h3>
            <p>For questions about these Terms of Use, please contact us through the contact form on our website.</p>

            <h3>Changes to Terms</h3>
            <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;
