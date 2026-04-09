import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';

const CaseLaws = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const caseLaws = [
    {
      id: 1,
      title: 'Income Tax Act - Section 80C Deductions',
      category: 'Income Tax',
      description: 'Comprehensive guide on eligible deductions under Section 80C including investment options, maximum limits, and documentation requirements.',
      date: '2024',
    },
    {
      id: 2,
      title: 'GST Compliance for Small Businesses',
      category: 'GST',
      description: 'Understanding GST compliance requirements for small and medium enterprises including filing procedures and deadlines.',
      date: '2024',
    },
    {
      id: 3,
      title: 'Corporate Tax Planning Strategies',
      category: 'Corporate Tax',
      description: 'Legitimate tax planning strategies for corporations to optimize tax liability while maintaining full compliance.',
      date: '2023',
    },
    {
      id: 4,
      title: 'Audit Requirements Under Companies Act',
      category: 'Company Law',
      description: 'Statutory audit requirements for various types of companies under the Companies Act 2013.',
      date: '2023',
    },
    {
      id: 5,
      title: 'TDS Provisions and Compliance',
      category: 'Income Tax',
      description: 'Complete overview of Tax Deducted at Source provisions, rates, and compliance procedures.',
      date: '2024',
    },
    {
      id: 6,
      title: 'Foreign Exchange Management Act Guidelines',
      category: 'FEMA',
      description: 'Key FEMA regulations for businesses involved in foreign exchange transactions and investments.',
      date: '2023',
    },
  ];

  const filteredCaseLaws = caseLaws.filter((caseLaw) =>
    caseLaw.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    caseLaw.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    caseLaw.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-6 lg:px-16 text-center">
          <h1 className="text-5xl font-bold mb-6">Case Laws & Resources</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Stay informed with the latest tax laws, regulations, and compliance guidelines
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search case laws, categories, or topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 py-6 text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Case Laws Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-16">
          {filteredCaseLaws.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">No case laws found matching your search.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCaseLaws.map((caseLaw) => (
                <Card key={caseLaw.id} className="hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-sm font-semibold">
                        {caseLaw.category}
                      </span>
                      <span className="text-gray-500 text-sm">{caseLaw.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-3">
                      {caseLaw.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {caseLaw.description}
                    </p>
                    <Button variant="outline" className="w-full border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white">
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 lg:px-16 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Need Expert Interpretation?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Our team can help you understand complex legal and regulatory matters
          </p>
          <Button 
            size="lg" 
            className="bg-amber-500 hover:bg-amber-600 text-white font-semibold"
            onClick={() => window.location.href = '/contact'}
          >
            Consult Our Experts
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CaseLaws;