
'use client';

import { useState } from 'react';
import PageHeader from '@/components/ui/page-header';
import { Mail, Phone, MapPin, Send, MessageSquare, Calendar, Users } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    formType: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          formType: 'general'
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactOptions = [
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "General Inquiry",
      description: "Questions about my work, projects, or general collaboration",
      action: "Send Message",
      color: "blue"
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Speaking Engagement",
      description: "Invite me to speak at conferences, schools, or events",
      action: "Book Speaking",
      color: "purple"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Collaboration",
      description: "Partner on projects, join empowerED, or collaborate on innovation",
      action: "Collaborate",
      color: "green"
    }
  ];

  const quickFacts = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      info: "Goa, India"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      info: "saipranav@example.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Availability",
      info: "Available for speaking engagements"
    }
  ];

  return (
    <div>
      <PageHeader
        title="Get in Touch"
        subtitle="Let's Create Something Amazing Together"
        description="Whether you're interested in collaboration, speaking engagements, or joining empowerED, I'd love to hear from you"
        backgroundImage="/images/global_meeting.jpg"
      />

      {/* Contact Options */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Can I Help You?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the type of inquiry that best matches your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactOptions.map((option, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 ${
                  option.color === 'blue' ? 'border-blue-500' :
                  option.color === 'purple' ? 'border-purple-500' : 'border-green-500'
                } cursor-pointer group`}
              >
                <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center text-white ${
                  option.color === 'blue' ? 'bg-blue-500 group-hover:bg-blue-600' :
                  option.color === 'purple' ? 'bg-purple-500 group-hover:bg-purple-600' : 'bg-green-500 group-hover:bg-green-600'
                } transition-colors`}>
                  {option.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {option.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {option.description}
                </p>
                <span className={`text-sm font-medium ${
                  option.color === 'blue' ? 'text-blue-600' :
                  option.color === 'purple' ? 'text-purple-600' : 'text-green-600'
                }`}>
                  {option.action} →
                </span>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send Me a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors pl-12"
                      style={{ paddingLeft: '3rem' }}
                    />
                    <div className="relative -mt-12 left-3 top-3 pointer-events-none">
                      <Users className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors pl-12"
                      style={{ paddingLeft: '3rem' }}
                    />
                    <div className="relative -mt-12 left-3 top-3 pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Type of Inquiry
                  </label>
                  <select
                    name="formType"
                    value={formData.formType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="speaking">Speaking Engagement</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="empowered">Join empowerED</option>
                    <option value="media">Media Interview</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell me about your inquiry or how I can help..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-3 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {quickFacts.map((fact, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                        {fact.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{fact.title}</h4>
                        <p className="text-gray-600">{fact.info}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Quick Response Times
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">General Inquiries:</span>
                    <span className="font-medium text-gray-900">24-48 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Speaking Engagements:</span>
                    <span className="font-medium text-gray-900">2-3 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Collaborations:</span>
                    <span className="font-medium text-gray-900">3-5 days</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  Alternative Contact
                </h4>
                <p className="text-gray-600 mb-4 text-sm">
                  For urgent speaking engagements or time-sensitive collaborations:
                </p>
                <a
                  href="mailto:saipranav@example.com?subject=Urgent%20Inquiry"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Send Direct Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
