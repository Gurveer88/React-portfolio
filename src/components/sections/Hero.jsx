import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import pfp from "../../assets/MIYA.png"; // Ensure you have a profile picture in the assets folder

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
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
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-center items-center">
        <div className="absolute w-125 h-125 bg-slate-300/30 dark:bg-white/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/4" />
        <div className="absolute w-125 h-125 bg-slate-400/20 dark:bg-white/5 rounded-full blur-[100px] translate-x-1/4 translate-y-1/4" />
      </div>

      <motion.div
        className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center text-center w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Image/Avatar */}
        <motion.div variants={itemVariants} className="mb-8 relative group">
          <div className="absolute inset-0 bg-linear-to-tr from-slate-200 to-slate-400 dark:from-white/20 dark:to-white/10 rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
          <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-slate-200 dark:border-white/20 bg-slate-100 dark:bg-black/50 backdrop-blur-sm">
            <img
              src={pfp}
              alt="Gurveer Avatar"
              className="w-full h-full object-cover scale-110 group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>

        {/* Updated Main Heading */}
        <motion.div variants={itemVariants} className="w-full mb-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            Hi, I'm{" "}
            <span className="bg-[linear-gradient(to_right,#FF0080,#7928CA,#0070F3,#38bdf8)] text-transparent bg-clip-text pr-2">
              Gurveer
            </span>
            .
          </h1>
        </motion.div>

        {/* New Custom Bio */}
        <motion.div variants={itemVariants} className="w-full mb-10">
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed">
            A software developer passionate about building modern, scalable, and
            user-friendly web applications. I enjoy turning ideas into seamless
            digital experiences using technologies like
            <span className="font-medium text-slate-900 dark:text-slate-200">
              {" "}
              React, Node.js, Express, MongoDB,{" "}
            </span>{" "}
            and
            <span className="font-medium text-slate-900 dark:text-slate-200">
              {" "}
              Tailwind CSS
            </span>
            . Whether it's designing elegant user interfaces or developing
            robust backend systems, I strive to create solutions that are both
            functional and visually appealing. I'm always eager to learn, take
            on new challenges, and build products that make a meaningful impact.
          </p>
        </motion.div>

        {/* Call to Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
        >
          <a
            href="#projects"
            className="group flex items-center justify-center gap-2 px-8 py-4 w-full sm:w-auto rounded-full bg-slate-900 dark:bg-white text-white dark:text-black font-semibold hover:scale-105 active:scale-95 transition-all duration-300 cursor-none"
          >
            View Projects
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </a>

          <a
            href="#contact"
            className="group flex items-center justify-center gap-2 px-8 py-4 w-full sm:w-auto rounded-full bg-transparent border border-slate-300 dark:border-white/20 text-slate-900 dark:text-white font-semibold hover:bg-slate-100 dark:hover:bg-white/10 hover:scale-105 active:scale-95 transition-all duration-300 cursor-none"
          >
            <Mail size={18} />
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
