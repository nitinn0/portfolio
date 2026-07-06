import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const projects = [
  {
   title: "EdUnique",
   description: "EdUnique, a skill-based education platform designed to help students and professionals enhance their learning experience. Includescore features like secure authentication, dynamic dashboards, real-time content updates. Built using NextJs and Supabase.",
   link: "https://learningspace.edunique.in/"
 },
 {
   title: "Simplifying Skills",
   description: "Simplifying Skills is a EdTech platform centered around their flagship assessment product **SkillSphere**, which evaluates psychometrics (OCEAN), socio-emotional intelligence, interests (Holland), etc. It is a learning portal that helps users master tech and non-tech skills through curated tutorials, practice exercises, and progress tracking.",
   link: "https://app.simplifyingskills.com"
 },
  {
    title: "E-Commerce Platform",
    description: "CottonRoad is a modern online shopping platform for fashion enthusiasts, built using the MERN stack. It replicates the features and user experience of cottonroad.store, showcasing up to 30 clothing products. It includes a clean product listing, filtering, a shopping cart and future plans for secure Razorpay payment integration",
    link: "https://cottonroad-frontend.onrender.com" 
  },
  {
    title: " MemeHustle",
    description: "MemeHustle is a unique marketplace where users can create, caption, and sell memes. Built with the MERN stack and Socket.io for real-time bidding, it also integrates Google Gemini AI to generate witty captions and describe meme vibes based on tags. Users can browse, bid, or upload memes while the leaderboard showcases top creators",
    link: "https://memehustle-8ljr.onrender.com/"
  },
  {
    title: "Music Course Hub",
    description: "Music-CourseHub is an education-based web platform that allows music teachers to sell courses and manage students online. It supports various instruments and categories, includes features like course listings, user-friendly dashboards, and lesson access control. Teachers can easily manage content and students without technical knowledge",
    link: "https://github.com/nitinn0/music-course-hub"
  },
];

const socials = [
  {
    name: "GitHub",
    url: "https://github.com/nitinn0",
    icon: <FaGithub size={28} />,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/nitin-kapoor-2a614922a/",
    icon: <FaLinkedin size={28} />,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/nitinkap07",
    icon: <FaTwitter size={28} />,
  }
];

const PROFILE_PHOTO = process.env.PUBLIC_URL + "/myself.jpg";

const Header = () => (
  <header className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
    <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
    <div className="max-w-5xl mx-auto px-6 py-20 relative z-10">
      <div className="flex flex-col items-center text-center">
        <div className="mb-8 relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
          <img
            src={PROFILE_PHOTO}
            alt="Nitin Kapoor"
            className="w-32 h-32 rounded-full border-4 border-slate-700 shadow-2xl object-cover relative z-10 group-hover:scale-105 transition-transform"
          />
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
          Nitin Kapoor
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-300 mb-3 font-light">
          Full Stack Developer
        </p>
        
        <div className="flex items-center gap-2 text-sm text-slate-400 mb-8">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span>Available for opportunities</span>
        </div>

        <p className="text-slate-400 max-w-2xl mb-8 leading-relaxed">
         Crafting projects, debugging with a smile. <span className="text-lg font-bold uppercase">If it works it ships</span>
        </p>

        <a
          href={process.env.PUBLIC_URL + "/NitinCv01.pdf"}
          download
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download Resume
        </a>
      </div>
    </div>
    
    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
  </header>
);

const Portfolio = () => {
  return (
    <div className="w-full bg-slate-900 min-h-screen">
      <Header />
      
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* About Section */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-px bg-gradient-to-r from-blue-500 to-transparent"></div>
            <h2 className="text-3xl font-bold text-white">About</h2>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all">
            <p className="text-slate-300 text-lg leading-relaxed">
              Hi, I'm Nitin Kapoor — a Full Stack Developer specializing in the MERN stack. While I'm a fresher, I've built multiple real-world projects that demonstrate my ability to design, develop, and deploy full-fledged web applications.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-px bg-gradient-to-r from-purple-500 to-transparent"></div>
            <h2 className="text-3xl font-bold text-white">Projects</h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="mt-auto pt-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors group-hover:gap-3"
                    >
                      View Project
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-px bg-gradient-to-r from-green-500 to-transparent"></div>
            <h2 className="text-3xl font-bold text-white">Experience</h2>
          </div>
          
          <div className="relative pl-8 border-l-2 border-slate-700">
            <div className="absolute left-[-9px] top-0 w-4 h-4 bg-green-500 rounded-full shadow-lg shadow-green-500/50"></div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">
                Full Stack Intern
              </h3>
              <p className="text-blue-400 mb-2 font-medium">Dream AI</p>
              <p className="text-slate-500 text-sm">August 2025 - Present</p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm mt-4 rounded-2xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">
                Full Stack Developer
              </h3>
              <p className="text-blue-400 mb-2 font-medium">Simplifying Skills</p>
              <p className="text-slate-500 text-sm">Jan 2026 - Present</p>
            </div>
          </div>
        </section>

        {/* Connect Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-px bg-gradient-to-r from-pink-500 to-transparent"></div>
            <h2 className="text-3xl font-bold text-white">Connect</h2>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            {socials.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-slate-800/50 backdrop-blur-sm px-6 py-4 rounded-xl border border-slate-700/50 hover:border-slate-600/50 transition-all hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1"
              >
                <span className="text-slate-400 group-hover:text-blue-400 transition-colors">
                  {social.icon}
                </span>
                <span className="text-white font-medium">{social.name}</span>
                <svg className="w-4 h-4 text-slate-600 group-hover:text-blue-400 transition-all group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ))}
          </div>
        </section>


      </div>

      <style jsx>{`
        @keyframes grid {
          0% { background-position: 0 0; }
          100% { background-position: 50px 50px; }
        }
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: grid 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;