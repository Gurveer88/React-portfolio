import ResumePDF from '../../assets/Gurveer_Partap_Enhanced_CV (1).pdf'; 
import { motion } from 'framer-motion';
import { Download, ExternalLink, FileText } from 'lucide-react';

export default function Resume() {
  return (
    <div className="min-h-screen py-24 px-4 md:px-6 relative z-10 flex flex-col items-center">
      
      {/* Solo Download Button */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <a 
          href={ResumePDF} 
          download="Gurveer_Partap_Resume.pdf"
          className="group flex items-center gap-2 px-8 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-black font-semibold hover:scale-105 transition-transform duration-300 cursor-none shadow-lg"
        >
          <Download size={18} className="group-hover:animate-bounce" />
          Download PDF
        </a>
      </motion.div>

      {/* The Preview Container */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="w-full max-w-5xl md:h-[80vh] bg-slate-100 dark:bg-slate-800 md:bg-transparent md:dark:bg-transparent rounded-2xl md:shadow-2xl overflow-hidden cursor-auto md:border border-slate-200 dark:border-white/10"
      >
        
        {/* DESKTOP VIEW: Native PDF Iframe */}
        <iframe 
          src={`${ResumePDF}#toolbar=0`} 
          title="Gurveer Partap Resume"
          className="hidden md:block w-full h-full border-none"
        />

        {/* MOBILE VIEW: Interstitial Redirect */}
        <div className="block md:hidden w-full py-20 px-6 text-center bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl shadow-sm">
          <div className="flex justify-center mb-4">
            <div className="p-4 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
              <FileText size={32} />
            </div>
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            View Resume
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mb-8 text-sm">
            For the best reading experience on mobile, open the document in your browser's native PDF viewer.
          </p>
          
          <a 
            href={ResumePDF}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors cursor-none"
          >
            <ExternalLink size={18} />
            Open Full Screen
          </a>
        </div>

      </motion.div>
      
    </div>
  );
}