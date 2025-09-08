import React from 'react';
import { useAppContext } from '@/contexts/AppContext';
import { useIsMobile } from '@/hooks/use-mobile';
import ServiceCard from './ServiceCard';
import ContactForm from './ContactForm';
import TestimonialCard from './TestimonialCard';

const AppLayout: React.FC = () => {
  const { sidebarOpen, toggleSidebar } = useAppContext();
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-800 text-white py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                Business-in-a-Box: <span className="text-orange-400">Your Complete Marketing Solution</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Stop juggling multiple vendors and services. We combine the best of human expertise with smart AI automation—giving you optimized marketing that actually works, without the agency BS. Focus on what you do best: your business and getting paid.
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 transform hover:scale-105 shadow-lg w-full sm:w-auto">
                Simplify Your Marketing—Talk to Us Today
              </button>
            </div>
            <div className="relative">
              <img
                src="https://d64gsuwffb70l.cloudfront.net/68be06c366c485c214e8a2d6_1757284128688_9af740ed.webp"
                alt="Marketing solution visualization"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Everything You Need, All in One Place
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No more coordinating between different agencies. Our comprehensive suite covers every aspect of your marketing needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard 
              icon="🎯"
              title="Lead Generation"
              description="Targeted campaigns that bring qualified prospects directly to your business."
            />
            <ServiceCard 
              icon="🔍"
              title="SEO Optimization"
              description="Boost your search rankings and get found by customers actively looking for you."
            />
            <ServiceCard 
              icon="📱"
              title="Social Media Ads"
              description="Strategic social campaigns that convert followers into paying customers."
            />
            <ServiceCard 
              icon="⚡"
              title="Lead Processing"
              description="Automated systems that nurture leads and move them through your sales funnel."
            />
            <ServiceCard 
              icon="💬"
              title="Customer Aftercare"
              description="Keep customers happy and coming back with our retention strategies."
            />
            <ServiceCard 
              icon="📊"
              title="Analytics & Reporting"
              description="Clear insights into what's working and how to optimize for better results."
            />
            <ServiceCard 
              icon="✍️"
              title="Content Creation"
              description="Engaging content that tells your story and connects with your audience."
            />
            <ServiceCard 
              icon="🔄"
              title="Conversion Optimization"
              description="Turn more visitors into customers with data-driven improvements."
            />
          </div>
        </div>
      </section>

      {/* Human + AI Hybrid Section */}
      <section className="bg-white py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Human Expertise + AI Automation
            </h2>
            <p className="text-xl text-gray-600">
              The perfect balance: smart automation where it makes sense, human insight where it matters most
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-bold mb-2">AI Optimization</h3>
              <p className="text-gray-600">Automated bid management, audience targeting, and performance optimization that never sleeps.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Human Strategy</h3>
              <p className="text-gray-600">Real people who understand your business, create compelling messaging, and make strategic decisions.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Lower Costs</h3>
              <p className="text-gray-600">AI handles the repetitive tasks, reducing overhead so you get better results for less money.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Better Results</h3>
              <p className="text-gray-600">Combine machine precision with human creativity for marketing that actually moves the needle.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Story Section */}
      <section className="bg-gray-50 py-16 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Built by a Tradesman, for Small Business Owners
              </h2>
              <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            </div>
            
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="text-lg leading-relaxed mb-6">
                I'm Kallisti Upton, and I built Business-in-a-Box because I've been where you are. I've worn the hard hat, carried the tools, and juggled every hat in a small business. I know what it's like to finish a 12-hour day and still have to figure out why your website isn't bringing in leads.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Most marketing agencies don't get it. They've never had to explain to a customer why their sink is still leaking, or why the job took longer than expected. They've never had to choose between buying new equipment or paying for ads that might not work.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                That's why Business-in-a-Box exists. No fluff. No overhyped promises. Just honest, affordable marketing that works for real businesses with real customers. We use AI to keep costs down and human expertise to make sure your message actually connects with the people who need what you do.
              </p>
              
              <p className="text-lg leading-relaxed font-semibold text-gray-800">
                Because at the end of the day, you shouldn't have to become a marketing expert to grow your business. You should be able to focus on what you do best—and get paid well for it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              See how we've helped businesses like yours grow and thrive
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Kallisti gets it. As a contractor, I don't have time for marketing BS. Their system just works—more calls, better leads, and I can focus on the actual work."
              author="Tom Martinez"
              company="Martinez Plumbing"
              image="https://d64gsuwffb70l.cloudfront.net/68be06c366c485c214e8a2d6_1757284138503_01980fa9.webp"
              results="40% more service calls"
            />
            <TestimonialCard 
              quote="Finally found a marketing company that speaks my language. No fancy jargon, just results. My phone actually rings now."
              author="Jennifer Walsh"
              company="Walsh Electrical Services"
              image="https://d64gsuwffb70l.cloudfront.net/68be06c366c485c214e8a2d6_1757284140277_44432623.webp"
              results="3x more qualified leads"
            />
            <TestimonialCard 
              quote="Best investment I've made for my business. The AI stuff saves me money, but having real people who understand trades makes all the difference."
              author="Mike Rodriguez"
              company="Rodriguez HVAC"
              image="https://d64gsuwffb70l.cloudfront.net/68be06c366c485c214e8a2d6_1757284142018_51ea5477.webp"
              results="60% increase in new customers"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-slate-900 text-white py-16 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Simplify Your Marketing?
          </h2>
          <p className="text-xl mb-12 text-blue-100">
            No sales pitch. No long contracts. Just an honest conversation about growing your business the right way.
          </p>
          
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-orange-400">Business-in-a-Box</h3>
              <p className="text-gray-300">Your complete marketing solution. Everything you need, all in one place.</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Lead Generation</li>
                <li>SEO Optimization</li>
                <li>Social Media Marketing</li>
                <li>Customer Aftercare</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <p className="text-gray-300">Ready to get started?</p>
              <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition-colors">
                Get In Touch
              </button>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Business-in-a-Box. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AppLayout;
