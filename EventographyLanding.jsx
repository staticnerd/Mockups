import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Camera, 
  Calendar, 
  Music, 
  Heart, 
  Briefcase, 
  Video, 
  Menu, 
  X, 
  ChevronRight, 
  Instagram, 
  Mail, 
  Phone 
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl font-serif tracking-widest text-white"
        >
          EVENTOGRAPHY<span className="text-amber-500">BYAK</span>
        </motion.div>
        
        <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest text-gray-300">
          {['About', 'Services', 'Portfolio', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-amber-500 transition-colors">
              {item}
            </a>
          ))}
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black border-b border-gold/20 p-6 flex flex-col space-y-4 md:hidden"
          >
            {['About', 'Services', 'Portfolio', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-white text-lg">
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const ServiceCard = ({ icon: Icon, title, desc }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="p-8 bg-zinc-900/50 border border-white/5 rounded-2xl hover:border-amber-500/30 transition-all duration-500"
  >
    <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center mb-6">
      <Icon className="text-amber-500" size={24} />
    </div>
    <h3 className="text-xl font-serif text-white mb-3">{title}</h3>
    <p className="text-gray-400 leading-relaxed text-sm">{desc}</p>
  </motion.div>
);

const TestimonialCard = ({ name, role, quote }) => (
  <div className="p-8 bg-zinc-900/30 border border-white/5 italic">
    <p className="text-gray-300 mb-6 font-light">"{quote}"</p>
    <div className="not-italic">
      <p className="text-amber-500 font-medium tracking-wide">{name}</p>
      <p className="text-xs text-gray-500 uppercase mt-1">{role}</p>
    </div>
  </div>
);

// --- Main Page ---

const EventographyLanding = () => {
  return (
    <div className="bg-black text-white font-sans selection:bg-amber-500 selection:text-black">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80" 
            alt="Hero Background" 
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
          />
        </div>

        <div className="relative z-20 text-center px-6 max-w-4xl">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-amber-500 tracking-[0.3em] uppercase text-sm mb-4"
          >
            Capturing Moments. Coordinating Experiences.
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif mb-8 leading-tight"
          >
            Luxury Event Coordination & <br /> 
            <span className="italic text-gray-400">Creative Storytelling</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col md:flex-row gap-4 justify-center"
          >
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-4 rounded-full transition-all flex items-center justify-center gap-2 group">
              View Portfolio <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-white/20 hover:bg-white/10 px-10 py-4 rounded-full transition-all backdrop-blur-sm">
              Book Consultation
            </button>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-amber-500 uppercase tracking-widest text-sm mb-4 font-bold">The Vision</h2>
            <h3 className="text-4xl font-serif mb-6">Seamless execution meets <br/> cinematic digital art.</h3>
            <p className="text-gray-400 leading-relaxed mb-8">
              EventographyByAK blends meticulous event coordination with cutting-edge content creation. 
              We don't just manage schedules; we curate atmospheres and capture them through 
              a premium lens, delivering both a perfect day and a digital legacy.
            </p>
            <div className="flex gap-8 border-t border-white/10 pt-8">
              <div>
                <p className="text-3xl font-serif">150+</p>
                <p className="text-xs text-gray-500 uppercase tracking-widest mt-2">Events Managed</p>
              </div>
              <div>
                <p className="text-3xl font-serif">50M+</p>
                <p className="text-xs text-gray-500 uppercase tracking-widest mt-2">Content Reach</p>
              </div>
            </div>
          </motion.div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80" 
              className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl" 
              alt="Event Planning"
            />
            <div className="absolute -bottom-6 -left-6 bg-amber-600 p-8 rounded-2xl hidden md:block">
              <Camera size={32} />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif">Tailored Services</h2>
            <div className="h-1 w-20 bg-amber-600 mx-auto mt-4" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={Calendar} 
              title="Event Coordination" 
              desc="Full-scale logistics management ensuring every detail aligns with your vision." 
            />
            <ServiceCard 
              icon={Video} 
              title="Content Creation" 
              desc="Cinematic Reels and social media coverage captured and delivered in real-time." 
            />
            <ServiceCard 
              icon={Heart} 
              title="Wedding Experiences" 
              desc="Bespoke wedding planning that focuses on luxury, emotion, and elegance." 
            />
            <ServiceCard 
              icon={Briefcase} 
              title="Brand Events" 
              desc="Corporate activations designed to elevate brand identity and engagement." 
            />
            <ServiceCard 
              icon={Music} 
              title="Private Celebrations" 
              desc="From milestone birthdays to exclusive galas, we handle the extraordinary." 
            />
            <ServiceCard 
              icon={Instagram} 
              title="Social Coverage" 
              desc="Strategic storytelling for your events to maximize digital impact and aesthetics." 
            />
          </div>
        </div>
      </section>

      {/* PORTFOLIO SHOWCASE */}
      <section id="portfolio" className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
          <div>
            <h2 className="text-4xl font-serif">The Portfolio</h2>
            <p className="text-gray-500 mt-2">A glimpse into our world of luxury.</p>
          </div>
          <div className="hidden md:flex gap-4 text-xs uppercase tracking-tighter">
            <span className="text-amber-500 cursor-pointer">All</span>
            <span className="text-gray-500 hover:text-white cursor-pointer transition-colors">Weddings</span>
            <span className="text-gray-500 hover:text-white cursor-pointer transition-colors">Corporate</span>
            <span className="text-gray-500 hover:text-white cursor-pointer transition-colors">Reels</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-4">
          {[
            "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80"
          ].map((img, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 0.98 }}
              className="relative aspect-[3/4] overflow-hidden group cursor-pointer"
            >
              <img src={img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Portfolio" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="uppercase tracking-[0.2em] text-sm">View Project</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <TestimonialCard 
            name="Sophia Laurent"
            role="Fashion Director"
            quote="The content delivery was faster than we could have imagined. Truly a 360-degree event partner."
          />
          <TestimonialCard 
            name="James & Elena"
            role="Private Clients"
            quote="Our wedding felt like a dream, and the reels captured every emotion perfectly. Simply breathtaking."
          />
          <TestimonialCard 
            name="Marcus Chen"
            role="Tech Hub CEO"
            quote="Professionalism at its peak. EventographyByAK turned a logistics nightmare into a seamless experience."
          />
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto bg-zinc-900/50 border border-white/5 rounded-3xl p-12 relative z-10 backdrop-blur-xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif mb-4">Let’s Create Something Unforgettable</h2>
            <p className="text-gray-400">Secure your date for a premium experience.</p>
          </div>
          
          <form className="grid md:grid-cols-2 gap-6">
            <input type="text" placeholder="Full Name" className="bg-black/50 border border-white/10 p-4 rounded-lg focus:border-amber-500 outline-none transition-all" />
            <select className="bg-black/50 border border-white/10 p-4 rounded-lg focus:border-amber-500 outline-none transition-all text-gray-400">
              <option>Event Type</option>
              <option>Wedding</option>
              <option>Corporate</option>
              <option>Content Production</option>
            </select>
            <input type="date" className="bg-black/50 border border-white/10 p-4 rounded-lg focus:border-amber-500 outline-none transition-all text-gray-400" />
            <input type="text" placeholder="Location" className="bg-black/50 border border-white/10 p-4 rounded-lg focus:border-amber-500 outline-none transition-all" />
            <textarea placeholder="Tell us about your vision..." className="md:col-span-2 bg-black/50 border border-white/10 p-4 rounded-lg h-32 focus:border-amber-500 outline-none transition-all" />
            <button className="md:col-span-2 bg-white text-black font-bold py-4 rounded-full hover:bg-amber-500 hover:text-white transition-all uppercase tracking-widest text-sm">
              Send Inquiry
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:row justify-between items-center gap-8">
          <div className="text-xl font-serif tracking-widest">
            EVENTOGRAPHY<span className="text-amber-500">BYAK</span>
          </div>
          <div className="flex gap-6">
            <Instagram size={20} className="text-gray-400 hover:text-amber-500 cursor-pointer transition-colors" />
            <Mail size={20} className="text-gray-400 hover:text-amber-500 cursor-pointer transition-colors" />
            <Phone size={20} className="text-gray-400 hover:text-amber-500 cursor-pointer transition-colors" />
          </div>
          <p className="text-xs text-gray-600">© 2024 EventographyByAK. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default EventographyLanding;
