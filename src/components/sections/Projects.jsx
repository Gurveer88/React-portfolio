import { motion } from 'framer-motion';
import { GitBranch, ExternalLink, Lock } from 'lucide-react';
import DemoVideo from '../../assets/authenXDemo-NZ_pqF3h.mp4'; // Ensure you have a demo video in the assets folder

export default function Projects() {
  const projects = [
    {
      title: 'Authenx', 
      role: 'Backend Developer (Team Project)',
      description: 'A robust multi-agent system utilizing a Generator-Validator architecture to ensure hallucination-free JSON outputs. I engineered the Python and FastAPI orchestrator, managing state-machine feedback loops, and integrated a LangChain-powered evaluator with SerpAPI for real-time automated fact-checking.',
      tech: ['Python', 'FastAPI', 'LangChain', 'SerpAPI', 'React'],
      github: '#', // Replace with your actual repo link later
      demo: '#',   // Replace with your actual live link later
    }
  ];

  return (
    <section id="projects" className="relative flex flex-col justify-center py-20 md:py-24 border-b border-slate-200 dark:border-white/10">
      <div className="max-w-5xl mx-auto px-6 w-full">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Featured Work.
          </h2>
          <div className="w-20 h-1 bg-slate-900 dark:bg-white rounded-full mx-auto md:mx-0" />
        </motion.div>

        {/* Projects List */}
        <div className="flex flex-col gap-12 md:gap-24">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="group relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
            >
              
              {/* Video / Visual Placeholder (Spans 7 columns on desktop) */}
              <div className="md:col-span-7 relative h-64 md:h-100 w-full rounded-3xl overflow-hidden bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-500 cursor-none flex items-center justify-center">
                
                {/* VIDEO PLACEHOLDER: 
                  When you have the video, replace the div below with:
                  <video src="../../assets/demo-video.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />
                */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-100 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                <video src={DemoVideo} autoPlay loop muted playsInline className="w-full h-full object-cover" />

                  {/* <Lock size={64} className="text-indigo-500 dark:text-indigo-400 drop-shadow-lg mb-4" />
                  <span className="text-indigo-700 dark:text-indigo-300 font-semibold">Demo Video Coming Soon</span> */}
                </div>
              </div>

              {/* Project Info (Spans 5 columns on desktop) */}
              <div className="md:col-span-5 flex flex-col items-start text-left md:pl-8">
                
                {/* Role Tag & Featured Tag */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-semibold tracking-wide uppercase">
                    Featured
                  </div>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300 text-xs font-semibold tracking-wide uppercase">
                    {project.role}
                  </div>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                  {project.title}
                </h3>
                
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 text-sm font-medium rounded-lg bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Action Links */}
                <div className="flex items-center gap-4">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-black font-semibold hover:scale-105 transition-transform duration-300 cursor-none"
                  >
                    <GitBranch size={18} />
                    Code
                  </a>
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white dark:bg-white/10 text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 font-semibold hover:bg-slate-50 dark:hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-none"
                  >
                    <ExternalLink size={18} />
                    Not live
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}