

import PageHeader from '@/components/ui/page-header';

const PrivacyPage = () => {
  return (
    <div>
      <PageHeader
        title="Privacy Policy"
        subtitle="Your Privacy Matters"
        description="Information about how we collect, use, and protect your personal information"
        backgroundImage="/images/tech_bg.jpg"
      />

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2>Privacy Policy</h2>
            <p><strong>Last updated: August 2025</strong></p>

            <h3>Information We Collect</h3>
            <p>When you contact us through our website forms, we collect:</p>
            <ul>
              <li>Name and email address</li>
              <li>Subject and message content</li>
              <li>Type of inquiry (speaking, collaboration, etc.)</li>
            </ul>

            <h3>How We Use Your Information</h3>
            <p>We use the collected information to:</p>
            <ul>
              <li>Respond to your inquiries and requests</li>
              <li>Provide information about speaking engagements or collaborations</li>
              <li>Send updates about empowerED activities (only if requested)</li>
            </ul>

            <h3>Information Security</h3>
            <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>

            <h3>Contact Information</h3>
            <p>If you have questions about this Privacy Policy, please contact us through the contact form on our website.</p>

            <h3>Changes to This Policy</h3>
            <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;
