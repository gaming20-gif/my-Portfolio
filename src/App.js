
import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink,  } from 'lucide-react';
import img from './img/hitesh1.jpg'
import { Phone, MapPin, Globe, Twitter, Instagram } from "lucide-react";

import logo from './img/portlogo1.png'
export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  
  

  const projects = [
   
    {
  title: "Hospital Website",
  desc: "A responsive hospital website with appointment booking, doctor profiles, and patient management features.",
  tech: ["Next.js", "Tailwind css"],
  color: "from-blue-500 to-teal-500",
  url: "https://odhavramsurgicalhospital.in/",
  client: "Dr. Rajesh Gori",
  contact: "+91 99044 98153",
}
,
    // {
    //   title: "AI Dashboard",
    //   desc: "Analytics platform with machine learning insights",
    //   tech: ["Python", "TensorFlow", "Vue.js"],
    //   color: "from-blue-500 to-cyan-500",
    //   url: "https://ai-dashboard-demo.com",
    //   client: "DataCorp Analytics",
    //   contact: "+1 (555) 234-5678"
    // },
    // {
    //   title: "Mobile Fitness App",
    //   desc: "Track workouts and nutrition with social features",
    //   tech: ["React Native", "Firebase"],
    //   color: "from-green-500 to-emerald-500",
    //   url: "https://fitness-tracker-app.com",
    //   client: "HealthTech Solutions",
    //   contact: "+1 (555) 345-6789"
    // },
    // {
    //   title: "Design System",
    //   desc: "Component library for enterprise applications",
    //   tech: ["TypeScript", "Storybook", "CSS"],
    //   color: "from-orange-500 to-red-500",
    //   url: "https://design-system-docs.com",
    //   client: "Enterprise Co.",
    //   contact: "+1 (555) 456-7890"
    // }
  ];

  const skills = [
    { name: "React", level: 85 },
     { name: "Next.js", level: 60 },
    { name: "JavaScript", level: 78 },
    { name: "Tailwind CSS", level: 90 },
    { name: "HTML5", level: 98 },
    { name: "CSS3", level: 95 },
    { name: "Bootstrap", level: 75 },
    { name: "Responsive Design", level: 95 },
    { name: "Git & GitHub", level: 85 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{
            left: `${mousePos.x / 20}px`,
            top: `${mousePos.y / 20}px`,
            transition: 'all 0.3s ease-out'
          }}
        />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-700" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000" />
      </div>

      {/* Navigation */}
     
  

<nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-slate-900/50 border-b border-white/10">
  <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
    {/* Logo + Heading */}
    <div className="flex items-center gap-3">
      <img 
        src={logo}
        alt="Hitesh Portfolio"
        className="h-12 w-12 rounded-full object-cover ring-2 ring-purple-400/30 transition-all hover:ring-purple-400 hover:scale-105"
      />
      <div className="flex flex-col">
        <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Hitesh
        </h1>
        <p className="text-xs text-gray-400 tracking-wide">Developer</p>
      </div>
    </div>

    {/* Desktop Menu */}
    <div className="hidden md:flex gap-8">
      {['Home', 'Projects', 'Skills', 'Contact'].map((item) => (
        <button
          key={item}
          onClick={() => setActiveSection(item.toLowerCase())}
          className={`transition-all ${
            activeSection === item.toLowerCase()
              ? 'text-purple-400 scale-110'
              : 'text-gray-300 hover:text-white'
          }`}
        >
          {item}
        </button>
      ))}
    </div>

    {/* Mobile Menu Button */}
    <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
      {menuOpen ? <X /> : <Menu />}
    </button>
  </div>

  {/* Mobile Menu */}
  {menuOpen && (
    <div className="md:hidden bg-slate-800/95 backdrop-blur-md border-t border-white/10">
      {['Home', 'Projects', 'Skills', 'Contact'].map((item) => (
        <button
          key={item}
          onClick={() => {
            setActiveSection(item.toLowerCase());
            setMenuOpen(false);
          }}
          className="block w-full text-left px-6 py-3 hover:bg-white/5"
        >
          {item}
        </button>
      ))}
    </div>
  )}
</nav>

      {/* Content */}
      <div className="relative z-10 pt-24 px-6 max-w-7xl mx-auto">
        {/* Hero Section */}
        {activeSection === 'home' && (
          <div className="min-h-screen flex flex-col justify-center items-center text-center animate-fade-in">
            {/* Profile Photo */}
            <div className="mb-8 relative group">
              <div className="absolute inset-0 w-40 h-40 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 mx-auto blur-2xl opacity-60 animate-pulse" />
              <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white/20 group-hover:border-purple-400 transition-all duration-300 mx-auto shadow-2xl">
                <img 
                  src={img}
                  alt="Profile"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-1 rounded-full text-sm font-semibold">
                Available for Work
              </div>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold mb-3 animate-slide-up">
              Hi, I'm <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Hitesh</span>
            </h2>
            
            <h3 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-300 animate-slide-up delay-100">
              Frontend Developer
            </h3>
            
            <p className="text-lg md:text-xl text-gray-400 mb-4 max-w-2xl animate-slide-up delay-200">
              📍 Kutch, Gujarat, India 
              {/* 🎓 B.com Graduate */}
            </p>
            
            <p className="text-base md:text-lg text-gray-400 mb-8 max-w-3xl leading-relaxed animate-slide-up delay-300">
              Passionate frontend developer specializing in creating stunning, responsive, and user-friendly 
              web interfaces. Expert in React, JavaScript, and modern CSS frameworks, interactive experiences that users love.
            </p>
            
            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-3xl w-full animate-slide-up delay-400">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:border-purple-400 transition-all">
                <div className="text-3xl font-bold text-purple-400 mb-1">5</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:border-pink-400 transition-all">
                <div className="text-3xl font-bold text-pink-400 mb-1">1+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:border-blue-400 transition-all">
                <div className="text-3xl font-bold text-blue-400 mb-1">5</div>
                <div className="text-sm text-gray-400">Happy Clients</div>
              </div>
            </div>
            
            <div className="flex gap-4 animate-slide-up delay-300">
              <button 
                onClick={() => setActiveSection('projects')}
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:scale-105 transition-transform"
              >
                View Work
              </button>
              <button onClick={() => setActiveSection('contact')} className="px-8 py-3 border-2 border-purple-400 rounded-full font-semibold hover:bg-purple-400/10 transition-all">
                Contact Me
              </button>
            </div>

            <div className="flex gap-6 mt-10 animate-slide-up delay-400 mb-7">
              
              
  <a
    href="https://github.com/gaming20-gif"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Github className="w-6 h-6 hover:text-purple-400 cursor-pointer transition-colors" />
  </a>

  <a
    href="https://linkedin.com/in/yourprofile"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Linkedin className="w-6 h-6 hover:text-purple-400 cursor-pointer transition-colors" />
  </a>

  <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">
    <Mail className="w-6 h-6 hover:text-purple-400 cursor-pointer transition-colors" />
  </a>
</div>

          </div>
        )}

        {/* Projects Section */}
        {activeSection === 'projects' && (
          <div className="py-20 animate-fade-in">
            <h2 className="text-5xl font-bold mb-12 text-center">Featured Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, idx) => (
                <div
                  key={idx}
                  className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all hover:scale-105 cursor-pointer"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`} />
                  
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.desc}</p>
                    
                    <div className="mb-4 space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <span className="font-semibold">Client:</span>
                        <span>{project.client}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <span className="font-semibold">Contact:</span>
                        <a href={`tel:${project.contact}`} className="text-purple-400 hover:text-pink-400 transition-colors">
                          {project.contact}
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <span className="font-semibold">Website:</span>
                        <a 
                          href={project.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-purple-400 hover:text-pink-400 transition-colors flex items-center gap-1"
                        >
                          Visit Site <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills Section */}
        {activeSection === 'skills' && (
          <div className="py-20 animate-fade-in">
            <h2 className="text-5xl font-bold mb-12 text-center">Skills & Expertise</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {skills.map((skill, idx) => (
                <div key={idx} className="animate-slide-up" style={{ animationDelay: `${idx * 100}ms` }}>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">{skill.name}</span>
                    <span className="text-purple-400">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* contact Section */}
     
     {activeSection === 'contact' && (
  <div className="py-20 animate-fade-in max-w-4xl mx-auto">
    <h2 className="text-5xl font-bold mb-8 text-center">Get In Touch</h2>
    
    <div className="grid md:grid-cols-2 gap-6">
      {/* Contact Info Cards */}
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
            <Mail className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <a 
              href="mailto:your.email@example.com" 
              className="text-gray-400 hover:text-purple-400 transition-colors break-all"
            >
            hiteshgagal5@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
            <Phone className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2">Phone</h3>
            <a 
              href="tel:+919876543210" 
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              +91 63524 72801 
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
            <MapPin className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2">Location</h3>
            <p className="text-gray-400">
              Atal Nagar, bhuj, Gujrat<br />
              India
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
            <Globe className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2">Website</h3>
            <a 
              href="https://yourwebsite.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              yourwebsite.com
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Social Links */}
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mt-6">
      <h3 className="text-2xl font-bold mb-6 text-center">Connect With Me</h3>
      <div className="flex justify-center gap-4 flex-wrap">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 bg-white/10 rounded-lg hover:bg-white/20 hover:scale-110 transition-all"
          aria-label="GitHub"
        >
          <Github className="w-6 h-6" />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 bg-white/10 rounded-lg hover:bg-white/20 hover:scale-110 transition-all"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-6 h-6" />
        </a>
        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 bg-white/10 rounded-lg hover:bg-white/20 hover:scale-110 transition-all"
          aria-label="Twitter"
        >
          <Twitter className="w-6 h-6" />
        </a>
        <a
          href="https://instagram.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 bg-white/10 rounded-lg hover:bg-white/20 hover:scale-110 transition-all"
          aria-label="Instagram"
        >
          <Instagram className="w-6 h-6" />
        </a>
      </div>
    </div>

    {/* Map Section */}
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mt-6">
      <h3 className="text-2xl font-bold mb-6">Find Me Here</h3>
      <div className="aspect-video w-full rounded-lg overflow-hidden">
        <iframe     

 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1760.5130172261859!2d69.82612010273996!3d23.310055477944317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3950e54a4d755f6f%3A0xdfc45dfceb052a30!2sAtalNagar!5e1!3m2!1sen!2sin!4v1762693298521!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale hover:grayscale-0 transition-all duration-300"
        />
       
      
      
      </div>
    </div>
  </div>
)}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
        
        .delay-200 {
          animation-delay: 200ms;
        }
        
        .delay-300 {
          animation-delay: 300ms;
        }
        
        .delay-400 {
          animation-delay: 400ms;
        }
        
        .delay-700 {
          animation-delay: 700ms;
        }
        
        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </div>
  );
}