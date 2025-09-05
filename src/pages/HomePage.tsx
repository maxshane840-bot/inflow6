import React from 'react';
import AnimatedBackground from '../components/AnimatedBackground';
import { Play, Users, Zap, Calendar, BarChart3, CheckCircle, Star, Shield, TrendingUp } from 'lucide-react';

interface HomePageProps {
  onNavigate?: (page: string) => void;
  onScrollToVideo?: () => void;
}

export default function HomePage({ onNavigate, onScrollToVideo }: HomePageProps) {
  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Centralized Client Management Hub',
      description: 'Keep all your client information, interactions, and history in one organized place.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Automated Workflows & Follow-ups',
      description: 'Set up smart automation to handle routine tasks and never miss important follow-ups.'
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: 'Built-in Booking & Scheduling',
      description: 'Let clients book appointments directly with integrated calendar management.'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Data Insights for Smarter Decisions',
      description: 'Get actionable insights from your business data to make informed strategic decisions.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Enterprise-Grade Security',
      description: 'Protect your business data with bank-level encryption and advanced security protocols.'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Advanced Performance Analytics',
      description: 'Track key metrics and optimize your business performance with detailed reporting tools.'
    }
  ];

  const stats = [
    { label: 'Customer Satisfaction', value: '100%' },
    { label: 'Uptime', value: '99.9%' },
    { label: 'Support', value: '24/7' },
  ];

  const testimonials = [
    {
      name: 'Nora Ali',
      company: 'Digital Marketing Expert',
      text: 'Inflow transformed how I used to manage clients. The automation features alone now saves me 20 hours every week.',
      rating: 5
    },
    {
      name: 'Simone Brooks',
      company: 'Real Estate Agent',
      text: 'Having all my client info in one place makes my day so much easier. Honestly, it's a game changer.',
      rating: 5
    },
    {
      name: 'Lillian Clarke',
      company: 'Nail Stylist',
      text: 'Finally, a platform that actually makes client management much more convenient. The ROI has been incredible.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-cyan-400/10"></div>
          
          {/* Floating gradient blobs */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-float opacity-70"></div>
          <div className="absolute top-40 right-10 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-cyan-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-float opacity-70" style={{ animationDelay: '2s' }}></div>
          <div className="absolute -bottom-32 left-20 w-72 h-72 bg-gradient-to-r from-cyan-400/20 to-pink-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-float opacity-70" style={{ animationDelay: '4s' }}></div>
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23FF4DA6%22%20fill-opacity%3D%220.02%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Left Column - Content */}
            <div className="text-left animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-black mb-6 text-gray-900 leading-tight tracking-tight">
                Elevate Your Sales With The All-in-One CRM Platform
              </h1>       
              
              <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed font-light">
                Automate client management and keep everything organized all in one place, 
                from onboarding to billing.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button 
                  onClick={() => onNavigate?.('pricing')}
                  className="group bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-400 hover:from-pink-600 hover:via-purple-700 hover:to-cyan-500 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl"
                >
                  Get Started
                </button>
                
                <button 
                  onClick={onScrollToVideo}
                  className="flex items-center justify-center space-x-2 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-900 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 border-2 border-transparent hover:border-pink-500/30 hover:shadow-xl group"
                >
                  <Play className="w-5 h-5 text-pink-500 group-hover:text-purple-600 transition-colors" />
                  <span>See Demo</span>
                </button>
              </div>

              {/* Stats Pills */}
              <div className="flex flex-wrap gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-200/50 shadow-lg animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                    <div className="flex items-center space-x-2">
                      <div className="text-2xl font-black bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-400 bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                      <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Product Mockup */}
            <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="relative">
                {/* Main mockup card */}
                <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200/50 backdrop-blur-sm">
                  <div className="bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-cyan-400/10 rounded-2xl p-6 mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                      </div>
                      <div className="text-xs text-gray-500 font-mono">inflow.com</div>
                    </div>
                    
                    {/* Mockup UI elements */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                          <Users className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="h-3 bg-gray-300 rounded-full w-3/4 mb-2"></div>
                          <div className="h-2 bg-gray-200 rounded-full w-1/2"></div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-cyan-400 rounded-full flex items-center justify-center">
                          <BarChart3 className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="h-3 bg-gray-300 rounded-full w-2/3 mb-2"></div>
                          <div className="h-2 bg-gray-200 rounded-full w-3/4"></div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-full flex items-center justify-center">
                          <Calendar className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="h-3 bg-gray-300 rounded-full w-4/5 mb-2"></div>
                          <div className="h-2 bg-gray-200 rounded-full w-1/3"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom section */}
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg"></div>
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-cyan-400 rounded-lg"></div>
                      <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-lg"></div>
                    </div>
                    <div className="text-xs text-gray-400">Dashboard Preview</div>
                  </div>
                </div>
                
                {/* Floating accent elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full shadow-lg animate-float"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-full shadow-lg animate-float" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
              All You Need to Scale
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Powerful features designed to help you manage clients more efficiently and grow your business faster.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-pink-200 transition-all duration-300 hover:shadow-xl group hover:-translate-y-1"
              >
                <div className="text-pink-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="video-section" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
              See Inflow in Action
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Watch how easy it is to transform your business operations
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="relative aspect-video bg-gradient-to-br from-pink-50 via-purple-50 to-cyan-50 rounded-3xl border border-gray-200 overflow-hidden shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-400 rounded-full flex items-center justify-center mb-4 mx-auto hover:scale-110 transition-transform duration-300 cursor-pointer shadow-2xl">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                  <p className="text-gray-700 text-lg font-semibold">Demo Video Coming Soon</p>
                  <p className="text-gray-500 text-sm mt-2">1920 × 1080</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
              Trusted With Thousands
            </h2>
            <p className="text-xl text-gray-600 font-light">
              See what our customers are saying about their Inflow experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic font-medium">"{testimonial.text}"</p>
                <div>
                  <p className="text-gray-900 font-bold">{testimonial.name}</p>
                  <p className="text-pink-500 text-sm font-medium">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-cyan-50">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8 font-light">
              Join thousands of successful businesses using Inflow to streamline their operations and accelerate growth.
            </p>
            <button 
              onClick={() => onNavigate?.('pricing')}
              className="bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-400 hover:from-pink-600 hover:via-purple-700 hover:to-cyan-500 text-white px-12 py-5 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl"
            >
              Start Your 7-Day Free Trial
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}