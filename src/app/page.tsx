import React from 'react';

export default function Page() {
  return (
    <div className="min-h-screen font-sans text-gray-900 bg-white selection:bg-indigo-100">
      {/* 1. Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <span className="text-xl font-black text-indigo-700 tracking-tighter uppercase">
                Abbas Portfolio
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Services', 'Projects', 'Testimonials', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="text-xs font-bold text-gray-500 hover:text-indigo-600 transition-colors uppercase tracking-widest"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* 2. Hero Section */}
        <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight mb-6 tracking-tight">
              Ghulam Abbas Bhatti <br />
              <span className="text-indigo-600 font-extrabold italic">Agentic AI Expert</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
              Transforming businesses with Autonomous AI Agents and robust Full Stack architectures. I build systems that don't just process data—they execute actions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 rounded-xl font-bold shadow-lg shadow-indigo-200 transition-all">
                Hire Me Now
              </button>
              <button className="bg-white border border-slate-200 hover:border-indigo-600 text-slate-900 px-10 py-4 rounded-xl font-bold transition-all">
                View Portfolio
              </button>
            </div>
          </div>
          {/* Decorative Background Element */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 pointer-events-none">
            <img 
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2000" 
              alt="AI Background" 
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* 3. About Section */}
        <section id="about" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-indigo-100 rounded-3xl group-hover:rotate-3 transition-transform duration-500"></div>
                <img 
                  src="abbass.jpeg" 
                  alt="Ghulam Abbas Bhatti" 
                  className="relative z-10 rounded-2xl shadow-xl w-full h-[500px] object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter">Ghulam Abbas Bhatti</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6 italic border-l-4 border-indigo-600 pl-4">
                  "My mission is to automate the mundane and engineer the extraordinary."
                </p>
                <p className="text-slate-600 leading-relaxed mb-6">
                  With over 5 years of experience in Full Stack development and a specialized focus on Agentic AI, I help companies integrate autonomous workflows into their existing digital infrastructure. I bridge the gap between traditional software and the future of AI automation.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-xl">
                    <p className="text-indigo-600 font-black text-2xl">50+</p>
                    <p className="text-xs uppercase font-bold text-slate-400">Projects Done</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl">
                    <p className="text-indigo-600 font-black text-2xl">15+</p>
                    <p className="text-xs uppercase font-bold text-slate-400">AI Agents Built</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Services Section */}
        <section id="services" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter mb-4">Core Expertise</h2>
              <div className="h-1.5 w-24 bg-indigo-600 mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Agentic AI Workflows', img: 'https://images.unsplash.com/photo-1675271591211-126ad94e495d?auto=format&fit=crop&q=80&w=500', desc: 'Developing multi-agent systems using CrewAI, LangChain, and AutoGen for complex problem solving.' },
                { title: 'Full Stack Web Apps', img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=500', desc: 'Modern, scalable web applications built with Next.js, React, and robust backend architectures.' },
                { title: 'AI Automation', img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=500', desc: 'Automating repetitive business processes by connecting LLMs to your internal tools and APIs.' },
                { title: 'Custom LLM Solutions', img: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=500', desc: 'Fine-tuning and prompt engineering for specific business use cases to improve accuracy.' },
                { title: 'API Integrations', img: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=500', desc: 'Connecting diverse platforms to ensure seamless data flow and process synchronization.' },
                { title: 'Scalable Cloud Systems', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=500', desc: 'Designing resilient cloud-native infrastructures that grow with your user base.' }
              ].map((service, i) => (
                <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                  <img src={service.img} className="h-48 w-full object-cover" alt={service.title} />
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Why Choose Us Section */}
        <section className="py-24 bg-indigo-900 text-white overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-4xl font-black text-center mb-16 uppercase tracking-tighter">Why Work With Me?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { t: 'AI Specialization', d: 'Focused specifically on autonomous Agentic systems.' },
                { t: 'Full Ownership', d: 'From ideation to deployment, I handle every stage.' },
                { t: 'Rapid Delivery', d: 'Lean development cycles with high-quality code.' },
                { t: 'Strategic Partner', d: "I don't just build; I help you define the AI strategy." }
              ].map((point, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="text-indigo-400 font-black text-3xl mb-4">0{i+1}</div>
                  <h4 className="text-lg font-bold mb-2 tracking-tight">{point.t}</h4>
                  <p className="text-indigo-100/70 text-sm leading-relaxed">{point.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Our Team (Projects/Team Representation) */}
        <section id="projects" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-black text-center mb-16 uppercase tracking-tighter">The Agent Ecosystem</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { name: 'ResearchBot Pro', role: 'Autonomous Researcher', exp: 'V1.4 Stable', img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=400' },
                { name: 'Abbas Portfolio V3', role: 'Portfolio Architecture', exp: 'Latest Production', img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=400' },
                { name: 'E-Comm Orchestrator', role: 'Supply Chain AI', exp: 'Enterprise Level', img: 'https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?auto=format&fit=crop&q=80&w=400' }
              ].map((item, i) => (
                <div key={i} className="text-center group">
                  <div className="mb-6 relative inline-block">
                    <img src={item.img} className="w-48 h-48 rounded-full object-cover mx-auto shadow-2xl group-hover:scale-105 transition-transform duration-500 border-4 border-indigo-50" alt={item.name} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{item.name}</h3>
                  <p className="text-indigo-600 font-bold text-sm uppercase tracking-widest">{item.role}</p>
                  <p className="text-slate-400 text-xs mt-2 uppercase">{item.exp}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Testimonials Section */}
        <section id="testimonials" className="py-24 bg-slate-950 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-black text-center mb-16 uppercase tracking-tighter">Client Success Stories</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: 'Sarah Johnson', role: 'CEO, TechFlow', quote: 'Ghulam integrated an AI research agent that saved our team 20 hours a week.' },
                { name: 'Mark Peterson', role: 'CTO, OmniScale', quote: 'His ability to blend Full Stack skills with Agentic AI is unparalleled.' },
                { name: 'David Lee', role: 'Founder, StartupX', quote: 'Professional, timely, and a true expert in the modern AI landscape.' }
              ].map((t, i) => (
                <div key={i} className="bg-slate-900 p-10 rounded-[2.5rem] border border-slate-800 relative shadow-2xl">
                  <div className="text-indigo-500 text-6xl font-serif absolute top-4 left-6 opacity-20">"</div>
                  <p className="relative z-10 text-slate-300 italic mb-8 leading-relaxed">{t.quote}</p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center font-bold text-white">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-white">{t.name}</p>
                      <p className="text-xs text-indigo-400 font-bold uppercase tracking-widest">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Consultation Process Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-black text-center mb-20 uppercase tracking-tighter text-slate-900">Automation Roadmap</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { s: '01', t: 'Discovery', d: 'Analyzing your workflow to find AI-ready gaps.' },
                { s: '02', t: 'Architecture', d: 'Mapping out Agent logic and software stack.' },
                { s: '03', t: 'Execution', d: 'Agile development and iterative testing.' },
                { s: '04', t: 'Deployment', d: 'Seamless integration and ongoing optimization.' }
              ].map((step, i) => (
                <div key={i} className="text-center relative">
                  <div className="text-8xl font-black text-indigo-50 absolute -top-16 left-1/2 -translate-x-1/2 -z-0">
                    {step.s}
                  </div>
                  <div className="relative z-10">
                    <h4 className="text-xl font-bold text-slate-900 mb-2">{step.t}</h4>
                    <p className="text-slate-500 text-sm">{step.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. FAQ Section */}
        <section className="py-24 bg-indigo-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-black text-center mb-12 uppercase tracking-tighter text-slate-900">Common Questions</h2>
            <div className="space-y-4">
              {[
                { q: 'What is Agentic AI?', a: 'Unlike traditional AI which just predicts text, Agentic AI can use tools, make decisions, and complete goals autonomously.' },
                { q: 'How long do projects take?', a: 'Typical AI agent implementations range from 2 to 6 weeks depending on complexity.' },
                { q: 'Can you work with legacy systems?', a: 'Yes, I specialize in building "wrappers" and APIs to connect AI with your existing tools.' },
                { q: 'Do you offer monthly maintenance?', a: 'I provide various support tiers to ensure your AI agents continue to perform as LLMs evolve.' }
              ].map((faq, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-indigo-100">
                  <h4 className="font-bold text-slate-900 mb-2">{faq.q}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. Contact Section */}
        <section id="contact" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-indigo-600 rounded-[3rem] p-12 md:p-24 text-white text-center shadow-2xl shadow-indigo-200">
              <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">Ready to Build <br /> the Future?</h2>
              <div className="grid md:grid-cols-3 gap-8 mb-12 text-indigo-100">
                <div className="p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
                  <p className="text-xs font-black uppercase tracking-widest mb-2 text-indigo-200">WhatsApp</p>
                  <p className="font-bold">+92 3010637955</p>
                </div>
                <div className="p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
                  <p className="text-xs font-black uppercase tracking-widest mb-2 text-indigo-200">Official Email</p>
                  <p className="font-bold">iqbalchudhary@gmail.com</p>
                </div>
                <div className="p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
                  <p className="text-xs font-black uppercase tracking-widest mb-2 text-indigo-200">Location</p>
                  <p className="font-bold">Global / Remote</p>
                </div>
              </div>
              <a 
  href="https://wa.me/923010637955" 
  target="_blank" 
  rel="noopener noreferrer"
  className="inline-block bg-white text-indigo-600 px-12 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-transform text-center"
>
  Book My Discovery Call
</a>
            </div>
          </div>
        </section>
      </main>

      {/* 11. Footer */}
      <footer className="bg-slate-950 text-slate-500 py-16 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <span className="text-2xl font-black text-white tracking-tighter uppercase">Abbas Portfolio</span>
            <div className="flex space-x-8 text-xs font-bold uppercase tracking-widest">
              <a href="https://github.com/iqbalchudhary-maker" className="hover:text-indigo-400 transition-colors">GitHub</a>
             
              <a href="https://vercel.com/ghulam-abbas-bhattis-projects" className="hover:text-indigo-400 transition-colors">vercel</a>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-900 text-center text-[10px] uppercase tracking-[0.4em]">
            <p>&copy; 2026 Ghulam Abbas Bhatti. Engineering the Autonomous Future.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}