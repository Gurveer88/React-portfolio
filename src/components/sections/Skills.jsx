import { motion } from 'framer-motion';

export default function Skills() {
  const skills = [
      { name: 'Node.js', style: 'bg-green-100 text-green-700 border-green-200 dark:bg-green-500/10 dark:text-green-300 dark:border-green-500/20' },
      { name: 'Express', style: 'bg-gray-100 text-gray-700 border-gray-200 dark:bg-gray-500/10 dark:text-gray-300 dark:border-gray-500/20' },
      { name: 'MongoDB', style: 'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-300 dark:border-emerald-500/20' },
      { name: 'Tailwind CSS', style: 'bg-cyan-100 text-cyan-700 border-cyan-200 dark:bg-cyan-500/10 dark:text-cyan-300 dark:border-cyan-500/20' },
      { name: 'JavaScript', style: 'bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-500/10 dark:text-amber-300 dark:border-amber-500/20' },
      { name: 'TypeScript', style: 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-500/10 dark:text-blue-300 dark:border-blue-500/20' },
      { name: 'Python', style: 'bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-500/10 dark:text-yellow-300 dark:border-yellow-500/20' },
      { name: 'Git', style: 'bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-500/10 dark:text-orange-300 dark:border-orange-500/20' },
      { name: 'GitHub', style: 'bg-slate-200 text-slate-800 border-slate-300 dark:bg-slate-700/30 dark:text-slate-300 dark:border-slate-600/30' },
      { name: 'REST APIs', style: 'bg-indigo-100 text-indigo-700 border-indigo-200 dark:bg-indigo-500/10 dark:text-indigo-300 dark:border-indigo-500/20' },
      { name: 'React', style: 'bg-sky-100 text-sky-700 border-sky-200 dark:bg-sky-500/10 dark:text-sky-300 dark:border-sky-500/20' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 200, damping: 15 },
    },
  };

  return (
    <section id="skills" className="relative flex flex-col justify-center py-20 md:py-24 border-b border-slate-200 dark:border-white/10">
      <div className="max-w-4xl mx-auto px-6 w-full text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Technical Skills.
          </h2>
          <div className="w-20 h-1 bg-slate-900 dark:bg-white rounded-full mx-auto" />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }} 
          className="flex flex-wrap justify-center gap-3 md:gap-4"
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className={`px-5 py-2.5 rounded-full text-sm md:text-base font-medium border hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-none ${skill.style}`}
            >
              {skill.name}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}