import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { useToast } from '../hooks/use-toast';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await axios.post(`${API}/contact/submit`, formData);
      
      if (response.data.success) {
        toast({
          title: 'Message Sent Successfully!',
          description: response.data.message,
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: error.response?.data?.detail || 'Failed to send message. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: '8275791859 / 9156293959',
      link: 'tel:8275791859',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'vgabackoffice@gmail.com',
      link: 'mailto:vgabackoffice@gmail.com',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'vinodgandhica@gmail.com',
      link: 'mailto:vinodgandhica@gmail.com',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'lokeshvpaliwal@gmail.com',
      link: 'mailto:lokeshvpaliwal@gmail.com',
    },
    {
      icon: MapPin,
      title: 'Head Office',
      content: 'Nagpur, Maharashtra, India',
      link: 'https://maps.app.goo.gl/pizNAPHmtwzmYQ1dA?g_st=ic',
    },
    {
      icon: MapPin,
      title: 'Branch Office',
      content: 'Rasik Building, Behind Old Income Tax Office, Ambapeth, Amravati 444601',
      link: 'https://maps.app.goo.gl/pizNAPHmtwzmYQ1dA?g_st=ic',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Mon - Sat: 9:00 AM - 6:00 PM',
      link: null,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-6 lg:px-16 text-center">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Get in touch with us for expert financial guidance and consultation
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="h-7 w-7 text-blue-900" />
                  </div>
                  <h3 className="font-bold text-blue-900 mb-2">{info.title}</h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-gray-600 hover:text-amber-500 transition-colors text-sm"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-gray-600 text-sm">{info.content}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            <Card className="border-2">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your name"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Enter your email"
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="Enter your phone"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Subject *
                      </label>
                      <Input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="Enter subject"
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell us about your requirements..."
                      className="w-full"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    size="lg"
                    disabled={loading}
                    className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold"
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-6 lg:px-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            Visit Our Office
          </h2>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.5!2d79.08!3d21.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDA5JzAwLjAiTiA3OcKwMDQnNDguMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vinod Gandhi & Associates Location"
            ></iframe>
          </div>
          <div className="text-center mt-6">
            <a
              href="https://maps.app.goo.gl/pizNAPHmtwzmYQ1dA?g_st=ic"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-900 hover:text-amber-500 font-semibold"
            >
              <MapPin className="mr-2 h-5 w-5" />
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;