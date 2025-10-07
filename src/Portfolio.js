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
   link: "https://simplifyingskills.live"
 },
  {
    title: "E-Commerce Platform",
    description: "CottonRoad is a modern online shopping platform for fashion enthusiasts, built using the MERN stack. It replicates the features and user experience of cottonroad.store, showcasing up to 30 clothing products. It includes a clean product listing, filtering, a shopping cart and future plans for secure Razorpay payment integration",
    link: "https://cottonroad-frontend.onrender.com" 
  },
  {
    title: "Fun MemeHustle",
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
    icon: <FaGithub size={32} className="text-orange-400" />,
    funny: "Where my code lives (and sometimes naps)."
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/nitin-kapoor-2a614922a/",
    icon: <FaLinkedin size={32} className="text-blue-400" />,
    funny: "Let's pretend to be professional!"
  },
  {
    name: "Twitter",
    url: "https://twitter.com/nitinkap07",
    icon: <FaTwitter size={32} className="text-slate-400" />,
    funny: "Where I tweet bugs and call them features."
  }
];

const PROFILE_PHOTO = process.env.PUBLIC_URL + "/myself.jpg";

const Portfolio = () => {
  return (
    <div className="w-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-16 py-6 font-lato">
        {/* Profile Photo */}
        <div className="flex flex-col items-center mb-8 mt-2">
          <img
            src={PROFILE_PHOTO}
            alt="Profile"
            className="w-36 h-36 rounded-full shadow-lg object-cover mb-3"
          />
        </div>

        {/* About Section */}
        <section className="mb-10 bg-slate-900 border-4 border-dotted border-slate-600 p-10 rounded-3xl shadow-md">
          <h2 className="text-2xl font-extrabold mb-2 flex items-center gap-2 font-playfair text-blue-300">
            About Me
          </h2>
          <p className="text-slate-200 text-lg mb-4">
          Hi, I'm Nitin Kapoor — a Full Stack Developer specializing in the MERN stack. While I'm a fresher, I’ve built multiple real-world projects that demonstrate my ability to design, develop, and deploy full-fledged web applications.
          </p>
          <a
            href={process.env.PUBLIC_URL + "/NitinCV.pdf"}
            download
            className="inline-block text-white bg-orange-500 hover:bg-blue-900 font-medium px-4 py-2 rounded-full shadow transition-all text-base mt-2"
          >
            Download CV
          </a>
        </section>
        

        {/* Projects Section */}
        <section className="p-10 mb-10 bg-slate-900 rounded-3xl border-4 border-dotted border-blue-900 shadow-md">
          <h2 className="text-2xl font-extrabold mb-8 flex items-center gap-2 font-playfair text-blue-300">
            Projects
          </h2>
         <div className="grid gap-8 md:grid-cols-2">
  {projects.map((project, idx) => {
    // Set custom styles for specific projects
    let bgClass = "bg-slate-800";
    let borderHover = "hover:border-solid hover:border-orange-400";

    if (project.title === "EdUnique") {
      bgClass = "bg-gradient-to-br from-green-700 via-green-600 to-green-500";
      borderHover = "hover:border-solid hover:border-green-200";
    } else if (project.title === "Simplifying Skills") {
      bgClass = "bg-gradient-to-br from-purple-700 via-purple-600 to-purple-500";
      borderHover = "hover:border-solid hover:border-purple-200";
    }

    return (
      <div
        key={idx}
        className={`rounded-2xl shadow p-6 flex flex-col justify-between border-2 border-dashed border-slate-600 ${bgClass} ${borderHover} transition-all`}
      >
        <div>
          <h3 className="text-lg font-bold mb-2 flex items-center gap-1 font-playfair text-blue-200">
            {project.title}
          </h3>
          <p className="text-slate-300 mb-4 italic">{project.description}</p>
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-block text-white bg-orange-500 hover:bg-blue-900 font-medium px-4 py-2 rounded-full shadow transition-all"
        >
          View Live Project
        </a>
      </div>
    );
  })}
</div>

          <div className="text-center mt-8 text-orange-400 text-sm">
            *Disclaimer: No bugs were harmed in the making of these projects.
          </div>
        </section>

        {/* Experience Section */}
<section className="mb-10 bg-slate-900 border-4 border-dotted border-blue-700 p-10 rounded-3xl shadow-md">
  <h2 className="text-2xl font-extrabold mb-4 flex items-center gap-2 font-playfair text-blue-300">
    Experience
  </h2>
  <div className="flex flex-col gap-6">
    <div className="bg-slate-800 rounded-2xl p-6 shadow border-2 border-dashed border-slate-600 hover:border-solid hover:border-orange-400 transition-all">
      <h3 className="text-xl font-bold font-playfair text-blue-200 mb-2">
        Full Stack Intern
      </h3>
      <h4 className="text-md text-slate-300 mb-2 italic">Dream AI</h4>
      <p className="text-slate-400 mb-2">
        August 2025 - Present
      </p>
    </div>
  </div>
</section>


        {/* Socials Section */}
        <section className="mt-12 bg-slate-800 border-4 border-dotted border-blue-900 p-10 rounded-3xl shadow-md">
          <h2 className="text-2xl font-extrabold mb-6 flex items-center gap-2 font-playfair text-blue-300">
            Socials
          </h2>
       
          <div className="flex flex-col gap-6 md:flex-row md:gap-12 justify-center items-center">
            {socials.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center bg-slate-900 px-10 py-7 rounded-2xl shadow hover:bg-orange-100 transition-all border-2 border-slate-600"
              >
                <span className="mb-2">{social.icon}</span>
                <span className="font-bold font-playfair text-lg text-blue-200">{social.name}</span>
                <span className="text-xs text-slate-400 mt-2 italic text-center">{social.funny}</span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio; 