import { FileText, Search, TrendingUp, Briefcase, Award, Shield, Heart, Zap } from 'lucide-react';

export const mockData = {
  images: {
    hero: 'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA3MDR8MHwxfHNlYXJjaHwzfHxidXNpbmVzcyUyMG1lZXRpbmd8ZW58MHx8fHwxNzc1NzI5ODEyfDA&ixlib=rb-4.1.0&q=85',
    about: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBhZHZpc29yfGVufDB8fHx8MTc3NTcyOTgxOHww&ixlib=rb-4.1.0&q=85',
    consultation: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwyfHxmaW5hbmNpYWwlMjBhZHZpc29yfGVufDB8fHx8MTc3NTcyOTgxOHww&ixlib=rb-4.1.0&q=85',
  },
  
  hero: {
    badge: '30+ Years of Excellence',
    title: 'Trusted Financial Expertise Since 1995',
    subtitle: 'Comprehensive Audit, Taxation & Advisory Solutions for Your Business Growth',
    description: 'We specialise in solving complex cases and our services help prevent future litigation',
  },
  
  stats: [
    { value: '30+', label: 'Years Experience' },
    { value: '1000+', label: 'Clients Served' },
    { value: '500+', label: 'Audits Completed' },
    { value: '100%', label: 'Client Satisfaction' },
  ],
  
  about: {
    title: 'Vinod Gandhi and Associates',
    paragraph1: 'With over 30 years of professional experience, we are a leading Chartered Accountancy firm based in Nagpur, Maharashtra. Our expertise spans statutory audits, taxation, and comprehensive financial advisory services.',
    paragraph2: 'Under the leadership of CA Vinod Gandhi (CA, BCom), we have built a reputation for solving the most complex financial and compliance challenges. When cases seem unsolvable elsewhere, they find resolution here.',
  },
  
  services: [
    {
      icon: FileText,
      title: 'Statutory Audits',
      description: 'Comprehensive audit services ensuring regulatory compliance',
    },
    {
      icon: Search,
      title: 'Internal Audits',
      description: 'Risk assessment and internal control evaluation',
    },
    {
      icon: TrendingUp,
      title: 'Tax Advisory',
      description: 'Expert guidance on income tax and taxation matters',
    },
    {
      icon: Briefcase,
      title: 'Business Consulting',
      description: 'Strategic financial planning and business structuring',
    },
  ],
  
  whyChooseUs: [
    {
      icon: Award,
      title: 'Proven Expertise',
      description: '30+ years of solving complex financial challenges across diverse industries',
    },
    {
      icon: Shield,
      title: 'Absolute Integrity',
      description: 'Unwavering commitment to confidentiality and ethical practices',
    },
    {
      icon: Heart,
      title: 'Client-Centric Approach',
      description: 'Personalized solutions tailored to your unique business needs',
    },
    {
      icon: Zap,
      title: 'Comprehensive Services',
      description: 'End-to-end financial, audit, and advisory solutions under one roof',
    },
  ],
  
  clientStats: {
    count: '1000+',
    label: 'Happy Clients',
  },
  
  contact: {
    phone: '8275791859',
    phone2: '9156293959',
    email: 'vgabackoffice@gmail.com',
    email2: 'vinodgandhica@gmail.com',
    email3: 'lokeshvpaliwal@gmail.com',
    whatsapp: '8275791859',
  },
};