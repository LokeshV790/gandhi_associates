import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Users, Award, CheckCircle, Phone, Mail } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { mockData } from '../utils/mockData';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-[600px] flex items-center justify-start bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.85), rgba(30, 58, 138, 0.85)), url('${mockData.images.hero}')`,
        }}
      >
        <div className="container mx-auto px-6 lg:px-16 py-20">
          <div className="max-w-3xl">
            <div className="inline-block mb-6">
              <span className="bg-amber-500 text-white px-6 py-2 rounded-md font-semibold text-sm">
                {mockData.hero.badge}
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {mockData.hero.title}
            </h1>
            
            <p className="text-xl text-blue-100 mb-6">
              {mockData.hero.subtitle}
            </p>
            
            <p className="text-lg text-blue-200 mb-8">
              {mockData.hero.description}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-6 text-base"
                onClick={() => navigate('/contact')}
              >
                Book a Consultation
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-6 text-base"
                onClick={() => navigate('/services')}
              >
                Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {mockData.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-blue-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={mockData.images.about} 
                alt="Vinod Gandhi and Associates" 
                className="rounded-lg shadow-xl w-full h-[500px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">
                {mockData.about.title}
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {mockData.about.paragraph1}
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                {mockData.about.paragraph2}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-gray-600 text-lg">
              Comprehensive financial solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mockData.services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 border-gray-200">
                <CardContent className="p-8">
                  <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="h-8 w-8 text-blue-900" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-blue-900 hover:bg-blue-800 text-white font-semibold px-8"
              onClick={() => navigate('/services')}
            >
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Why Choose Us
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mockData.whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation CTA Section */}
      <section 
        className="relative min-h-[400px] flex items-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.9), rgba(30, 58, 138, 0.9)), url('${mockData.images.consultation}')`,
        }}
      >
        <div className="container mx-auto px-6 lg:px-16 py-16">
          <div className="max-w-2xl">
            <div className="text-5xl font-bold text-white mb-4">
              {mockData.clientStats.count}
            </div>
            <div className="text-2xl text-blue-100 mb-8">
              {mockData.clientStats.label}
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">
                Proud Members of ICAI
              </h3>
              <p className="text-blue-100 mb-6">
                Institute of Chartered Accountants of India
              </p>
              <img 
                src="https://www.icai.org/images/icai-logo.png" 
                alt="ICAI Logo" 
                className="h-16 bg-white p-2 rounded"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 lg:px-16 text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Let us help you navigate your financial and compliance challenges with confidence
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Button 
              size="lg" 
              className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-6 text-base"
              onClick={() => window.location.href = 'tel:8275791859'}
            >
              <Phone className="mr-2 h-5 w-5" />
              Call: {mockData.contact.phone}
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-semibold px-8 py-6 text-base"
              onClick={() => navigate('/contact')}
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;