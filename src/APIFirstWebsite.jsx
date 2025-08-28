import React, { useState, useEffect } from 'react';
import { ChevronRight, Code2, Shield, Zap, Building2, Mail, Menu, X, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

export default function APIFirstWebsite() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                ApiFirst.AI
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#problem" className="text-slate-600 hover:text-slate-900 transition-colors">Problem</a>
              <a href="#solution" className="text-slate-600 hover:text-slate-900 transition-colors">Solution</a>
              <a href="#why-us" className="text-slate-600 hover:text-slate-900 transition-colors">Why Us</a>
              <button className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
                Book Assessment
              </button>
            </div>

            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-slate-700"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-6 py-4 space-y-3">
              <a href="#problem" className="block py-2 text-slate-600">Problem</a>
              <a href="#solution" className="block py-2 text-slate-600">Solution</a>
              <a href="#why-us" className="block py-2 text-slate-600">Why Us</a>
              <button className="w-full px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg">
                Book Assessment
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 sm:px-8 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-indigo-50 opacity-70"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="animate-fade-in">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                  Your AI isn't talking to your{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    data
                  </span>
                  .
                </h1>
                <h2 className="text-2xl sm:text-3xl font-semibold text-slate-700 mb-6">
                  That's burning money.
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  You bought the AI. You have the data. But they're not connected. 
                  Meanwhile, you're paying developers to build custom integrations that break every update.
                </p>
                <p className="text-base text-slate-500 mb-8">
                  We're AI infrastructure specialists based in London. We make your AI systems actually work 
                  with your tools—including Model Context Protocol (MCP) implementations for enterprise clients.
                </p>
                <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg font-semibold rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center">
                  Fix your AI infrastructure
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </button>
              </div>
            </div>
            
            <div className="lg:col-span-5 mt-12 lg:mt-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur-3xl opacity-20 animate-pulse"></div>
                <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-slate-200">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-2 bg-slate-200 rounded w-3/4 animate-pulse"></div>
                      <div className="h-2 bg-slate-200 rounded w-full animate-pulse delay-75"></div>
                      <div className="h-2 bg-slate-200 rounded w-5/6 animate-pulse delay-150"></div>
                    </div>
                    <div className="pt-4 space-y-2">
                      <div className="flex items-center space-x-2">
                        <Code2 className="text-blue-600" size={20} />
                        <span className="text-sm font-mono text-slate-600">API.connect()</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <AlertCircle className="text-red-500" size={20} />
                        <span className="text-sm font-mono text-red-600">Connection failed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-20 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">The Reality Check</h2>
            <div className="inline-flex items-center px-6 py-3 bg-red-100 text-red-700 rounded-full text-lg font-semibold">
              74% of companies can't scale AI beyond proof-of-concept
            </div>
          </div>

          <p className="text-xl text-slate-600 text-center mb-12 max-w-3xl mx-auto">
            Why? Because connecting AI to your actual business systems is a nightmare. 
            Every integration is custom. Every update breaks something. 
            Your best developers are stuck building bridges instead of features.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { time: '3-6 months', desc: 'to connect each AI tool to your systems' },
              { time: '£100k+', desc: 'per integration in developer time' },
              { time: 'Constant', desc: 'maintenance just to keep things running' },
              { time: 'Zero', desc: 'visibility into what AI is accessing' }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
                <div className="text-3xl font-bold text-red-600 mb-2">{item.time}</div>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">What We Actually Do</h2>
            <p className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              We build the infrastructure that makes AI work
            </p>
          </div>

          <p className="text-xl text-slate-600 text-center mb-12 max-w-3xl mx-auto">
            Forget the strategy decks. We're engineers who specialise in connecting AI to enterprise systems. 
            Whether it's implementing Model Context Protocol, building secure data pipelines, 
            or ensuring compliance—we make it work.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Shield className="text-blue-600" size={32} />,
                title: 'Secure API connections',
                desc: 'Between AI and your data'
              },
              {
                icon: <CheckCircle2 className="text-green-600" size={32} />,
                title: 'Compliance-ready infrastructure',
                desc: 'GDPR, EU AI Act compliant'
              },
              {
                icon: <Zap className="text-yellow-600" size={32} />,
                title: 'Real production deployments',
                desc: 'Not proof-of-concepts'
              },
              {
                icon: <Building2 className="text-indigo-600" size={32} />,
                title: 'Based in London',
                desc: 'Working with UK enterprises'
              }
            ].map((item, i) => (
              <div key={i} className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-8 border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="py-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">Simple Reasons</h2>

          <div className="space-y-12">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">We're technical, not theoretical</h3>
              <p className="text-slate-300 text-lg">
                We write code, not PowerPoints. Based in the City of London, we work with financial services, 
                healthcare, and regulated industries who need this done properly.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">We specialise in the hard stuff</h3>
              <p className="text-slate-300 text-lg">
                Legacy systems. Compliance requirements. Enterprise security. 
                If it was easy, you'd have done it already.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">Minimum engagement £25k</h3>
              <p className="text-slate-300 text-lg">
                We work with organisations that have real infrastructure challenges, 
                not startups looking for quick fixes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Sort This?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's have an honest conversation about your AI infrastructure and whether we can help.
          </p>
          <button className="group px-8 py-4 bg-white text-blue-600 text-lg font-semibold rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center mx-auto">
            Book a technical assessment
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </button>
          <p className="mt-6 text-blue-200">
            No sales pitch. Just engineers talking about what's actually possible.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 sm:px-8 lg:px-12 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">ApiFirst.AI</h3>
              <p className="text-slate-400 mb-2">London AI Infrastructure Consulting</p>
              <p className="text-slate-400">Specialising in Model Context Protocol (MCP) and enterprise AI integration</p>
            </div>
            <div className="md:text-right">
              <p className="text-slate-400 mb-2">City of London</p>
              <a href="mailto:info@apifirst.ai" className="text-blue-400 hover:text-blue-300 flex items-center md:justify-end">
                <Mail size={16} className="mr-2" />
                info@apifirst.ai
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}