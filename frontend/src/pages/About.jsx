import React from 'react';
import { Award, Shield, Heart, Zap, Target, Users } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering the highest quality financial services',
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Maintaining ethical standards and confidentiality',
    },
    {
      icon: Heart,
      title: 'Client Focus',
      description: 'Your success is our priority',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Adapting to changing financial landscapes',
    },
    {
      icon: Target,
      title: 'Precision',
      description: 'Attention to detail in every engagement',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working together for optimal results',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-6 lg:px-16 text-center">
          <h1 className="text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Three decades of excellence in financial advisory and compliance services
          </p>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBhZHZpc29yfGVufDB8fHx8MTc3NTcyOTgxOHww&ixlib=rb-4.1.0&q=85" 
                alt="Vinod Gandhi and Associates" 
                className="rounded-lg shadow-xl w-full h-[500px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">
                Vinod Gandhi and Associates
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                With over 30 years of professional experience, we are a leading Chartered Accountancy firm based in Nagpur, Maharashtra. Our expertise spans statutory audits, taxation, and comprehensive financial advisory services.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Under the leadership of CA Vinod Gandhi (CA, BCom), we have built a reputation for solving the most complex financial and compliance challenges. When cases seem unsolvable elsewhere, they find solution here.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our firm has successfully served over 1000 clients across various industries, completing more than 500 comprehensive audits. We pride ourselves on our 100% client satisfaction rate and our ability to navigate the most challenging financial scenarios.
              </p>
            </div>
          </div>

          {/* Leadership Section */}
          <div className="bg-gray-50 rounded-lg p-12 mb-20">
            <h3 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              Our Leadership
            </h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-center mb-6">
                  <div className="mb-6">
                    <img 
                      src="https://customer-assets.emergentagent.com/job_preview-staging-11/artifacts/o2tpjvtt_IMG_1748.jpeg" 
                      alt="CA Vinod Gandhi" 
                      className="w-48 h-48 object-cover rounded-full mx-auto border-4 border-blue-900 shadow-lg"
                    />
                  </div>
                  <h4 className="text-2xl font-bold text-blue-900 mb-2">
                    CA Vinod Gandhi
                  </h4>
                  <p className="text-amber-600 font-semibold mb-4">
                    Founder & Managing Partner
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    CA Vinod Gandhi brings over three decades of experience in statutory audits, taxation, and financial advisory. His expertise in handling complex financial cases has made the firm a trusted name in the industry. With a Bachelor of Commerce degree and a Chartered Accountancy qualification, he leads a team dedicated to excellence and client satisfaction.
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-center mb-6">
                  <div className="mb-6">
                    <img 
                      src="https://customer-assets.emergentagent.com/job_preview-staging-11/artifacts/946e2j2y_a8e30352-65df-4a13-8902-e9e1c7a682a9.jpeg" 
                      alt="CA Lokesh Paliwal" 
                      className="w-48 h-48 object-cover rounded-full mx-auto border-4 border-blue-900 shadow-lg"
                    />
                  </div>
                  <h4 className="text-2xl font-bold text-blue-900 mb-2">
                    CA Lokesh Paliwal
                  </h4>
                  <p className="text-amber-600 font-semibold mb-4">
                    Partner
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    CA Lokesh Paliwal is a dynamic professional with over 5 years of specialized experience in audit, taxation, and regulatory compliance. His analytical approach and attention to detail have been instrumental in delivering comprehensive solutions to clients. He brings fresh perspectives and innovative strategies to complex financial challenges.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Audit Benefits Section */}
          <div className="bg-blue-50 rounded-lg p-12 mb-20 border-2 border-blue-100">
            <h3 className="text-3xl font-bold text-blue-900 mb-6 text-center">
              How Our Audits Protect Your Business
            </h3>
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-700 text-lg leading-relaxed mb-6 text-center">
                Our comprehensive internal and statutory audit services are designed not just for compliance, but as a strategic tool to safeguard your business from future legal complications.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-xl font-bold text-blue-900 mb-3">Internal Audits</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span>Identify and rectify discrepancies before they escalate into legal issues</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span>Strengthen internal controls to prevent fraud and misappropriation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span>Ensure regulatory compliance reducing litigation risks</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span>Provide early warning systems for potential legal exposures</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-xl font-bold text-blue-900 mb-3">Statutory Audits</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span>Ensure full compliance with legal and regulatory requirements</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span>Minimize disputes with tax authorities and regulatory bodies</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span>Create documented evidence of due diligence for legal protection</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span>Build stakeholder confidence and reduce litigation uncertainties</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 bg-amber-50 border-l-4 border-amber-500 p-6 rounded">
                <p className="text-gray-800 font-semibold text-center">
                  Our proactive audit approach helps prevent future litigation by identifying and addressing potential issues before they become legal challenges, making your business more secure and legally compliant.
                </p>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div>
            <h3 className="text-3xl font-bold text-blue-900 mb-12 text-center">
              Our Core Values
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                      <value.icon className="h-8 w-8 text-blue-900" />
                    </div>
                    <h4 className="text-xl font-bold text-blue-900 mb-3">
                      {value.title}
                    </h4>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-blue-900 py-16">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-amber-500 mb-2">30+</div>
              <div className="text-blue-100 font-medium">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-amber-500 mb-2">1000+</div>
              <div className="text-blue-100 font-medium">Clients Served</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-amber-500 mb-2">500+</div>
              <div className="text-blue-100 font-medium">Audits Completed</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-amber-500 mb-2">100%</div>
              <div className="text-blue-100 font-medium">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;