import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, BookOpen, MapPin, Users } from 'lucide-react';
import TiltCard from '../ui/TiltCard';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center py-32 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10 w-full">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Behind the code.
          </h1>
          <div className="w-20 h-1 bg-slate-900 dark:bg-white rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          
          {/* Left Column: Biography */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            <motion.p variants={itemVariants} className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              My journey into software development started with a simple curiosity about how digital experiences are built. Today, that curiosity has evolved into a deep-seated passion for engineering scalable backend architectures and designing elegant, intuitive user interfaces.
            </motion.p>
            
            <motion.p variants={itemVariants} className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              I believe that great software is born at the intersection of raw performance and beautiful design. Whether I am architecting a robust backend system or fine-tuning a frontend component, I approach every line of code with a focus on maintainability and user impact.
            </motion.p>

            <motion.p variants={itemVariants} className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              When I'm not writing code or studying, I'm usually exploring new technologies, refining my workflow, or thinking about the next problem to solve. I'm always eager to embrace new challenges and build products that leave a lasting, positive footprint.
            </motion.p>
          </motion.div>

          {/* Right Column: Cards */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-8"
          >
            {/* Education Card */}
            <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-8"
          >
            {/* Education Card */}
            <motion.div variants={itemVariants}>
              <TiltCard>
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 rounded-2xl bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    <GraduationCap size={28} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Education</h2>
                    <p className="text-slate-500 dark:text-slate-400">Academic Background</p>
                  </div>
                </div>

                <div className="space-y-6 relative z-10">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center gap-2 mb-1">
                      <BookOpen size={18} className="text-slate-400" />
                      Bachelor of Computer Applications
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 flex items-center gap-2 mb-2">
                      <MapPin size={16} /> Chitkara University, Punjab
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-1 flex items-center gap-2">
                        <Calendar size={14} /> Status
                      </p>
                      <p className="font-medium text-slate-900 dark:text-white">3rd Year (Class of '27)</p>
                    </div>
                    
                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-1 flex items-center gap-2">
                        <Award size={14} /> Expected CGPA
                      </p>
                      <p className="font-medium text-slate-900 dark:text-white">8.5</p>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>

            {/* Experience & Leadership Card */}
            <motion.div variants={itemVariants}>
              <TiltCard>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-2xl bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400">
                    <Users size={28} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Leadership</h2>
                    <p className="text-slate-500 dark:text-slate-400">Professional & Community Roles</p>
                  </div>
                </div>

                <div className="relative z-10 space-y-4">
                  {/* Business Experience Block */}
                  {/* <div className="p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1 flex items-center justify-between">
                      Business Development Specialist
                      <span className="text-xs font-semibold px-3 py-1 bg-violet-100 dark:bg-violet-500/20 text-violet-700 dark:text-violet-300 rounded-full">
                        Internship
                      </span>
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      Younity
                      <span className="block mt-1 text-slate-500 dark:text-slate-500">Started Sept 2024</span>
                    </p>
                  </div> */}

                  {/* Technical Leadership Block */}
                  <div className="p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
                      Technical Head
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      Computer Society of India (CSI) 
                      <span className="block mt-1 text-slate-500 dark:text-slate-500">College Student Chapter</span>
                    </p>
                  </div>
                </div>
              </TiltCard>
            </motion.div>

          </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}