import React from 'react';
import { FileText, Search, TrendingUp, Briefcase, Calculator, Building, Scale, Users, FileCheck, BookOpen, ClipboardCheck, DollarSign } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: FileText,
      title: 'Statutory Audits',
      description: 'Comprehensive audit services ensuring regulatory compliance and financial accuracy. We conduct thorough examinations of financial statements in accordance with applicable standards.',
      features: [
        'Financial Statement Audits',
        'Compliance Audits',
        'Regulatory Reporting',
        'Audit Reports & Certifications',
      ],
    },
    {
      icon: Search,
      title: 'Internal Audits',
      description: 'Risk assessment and internal control evaluation to strengthen your organizational processes and identify areas of improvement.',
      features: [
        'Process Review & Evaluation',
        'Risk Assessment',
        'Control Testing',
        'Fraud Detection',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Tax Advisory',
      description: 'Expert guidance on income tax, GST, and taxation matters to optimize your tax position while ensuring full compliance.',
      features: [
        'Income Tax Planning',
        'GST Compliance',
        'Tax Return Filing',
        'Tax Dispute Resolution',
      ],
    },
    {
      icon: Briefcase,
      title: 'Business Consulting',
      description: 'Strategic financial planning and business structuring to help your organization achieve sustainable growth.',
      features: [
        'Business Strategy',
        'Financial Planning',
        'Corporate Restructuring',
        'Merger & Acquisition Advisory',
      ],
    },
    {
      icon: Calculator,
      title: 'Accounting Services',
      description: 'Comprehensive bookkeeping and accounting services to maintain accurate financial records.',
      features: [
        'Bookkeeping',
        'Financial Statements',
        'Management Reporting',
        'Payroll Services',
      ],
    },
    {
      icon: Building,
      title: 'Company Formation',
      description: 'End-to-end support for company registration, incorporation, and compliance.',
      features: [
        'Company Registration',
        'LLP Formation',
        'Partnership Deed',
        'Compliance Management',
      ],
    },
    {
      icon: Scale,
      title: 'Legal Compliance',
      description: 'Ensuring your business meets all statutory and regulatory requirements.',
      features: [
        'ROC Compliance',
        'Annual Filings',
        'Board Meetings',
        'Secretarial Services',
      ],
    },
    {
      icon: Users,
      title: 'Financial Advisory',
      description: 'Strategic financial advice to help you make informed business decisions.',
      features: [
        'Investment Advisory',
        'Cash Flow Management',
        'Working Capital Management',
        'Financial Modeling',
      ],
    },
    {
      icon: FileCheck,
      title: 'Due Diligence',
      description: 'Comprehensive due diligence services for mergers, acquisitions, and investments.',
      features: [
        'Financial Due Diligence',
        'Tax Due Diligence',
        'Operational Review',
        'Valuation Services',
      ],
    },
    {
      icon: BookOpen,
      title: 'FEMA Services',
      description: 'Foreign Exchange Management Act compliance and advisory services.',
      features: [
        'FEMA Compliance',
        'Foreign Investment Advisory',
        'RBI Reporting',
        'Cross-border Transactions',
      ],
    },
    {
      icon: ClipboardCheck,
      title: 'Certification Services',
      description: 'Various certification services required for business operations.',
      features: [
        'Net Worth Certificates',
        'Turnover Certificates',
        'Income Certificates',
        'Project Reports',
      ],
    },
    {
      icon: DollarSign,
      title: 'Loan & Finance',
      description: 'Assistance in securing loans and financial arrangements for your business.',
      features: [
        'Loan Application Support',
        'Project Financing',
        'Working Capital Loans',
        'Term Loan Advisory',
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-6 lg:px-16 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive financial solutions tailored to your business needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 border-gray-200">
                <CardContent className="p-8">
                  <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="h-8 w-8 text-blue-900" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <span className="text-amber-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 lg:px-16 text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">
            Need Expert Financial Guidance?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Our team is ready to help you with any financial or compliance challenge
          </p>
          <Button 
            size="lg" 
            className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-6 text-base"
            onClick={() => navigate('/contact')}
          >
            Schedule a Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;