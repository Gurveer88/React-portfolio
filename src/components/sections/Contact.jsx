import { motion } from 'framer-motion';
import { Mail, MessageCircle, ArrowRight } from 'lucide-react';

export default function Contact() {
  const contactMethods = [
    {
      title: 'Email',
      value: 'your.email@example.com',
      link: 'mailto:your.email@example.com',
      icon: <Mail size={24} className="text-blue-500 dark:text-blue-400" />,
      color: 'hover:border-blue-500/50 hover:bg-blue-50 dark:hover:bg-blue-500/10'
    },
    {
      title: 'WhatsApp',
      value: 'Chat with me',
      link: 'https://wa.me/918872284585', // Add your country code and number here
      icon: <MessageCircle size={24} className="text-green-500 dark:text-green-400" />,
      color: 'hover:border-green-500/50 hover:bg-green-50 dark:hover:bg-green-500/10'
    }
  ];

  return (
    // No bottom border here since it's the last section of the page
    <section id="contact" className="relative flex flex-col justify-center py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 w-full text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
            Let's build something.
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
            Whether you have a question about my work, a project proposal, or just want to say hi, my inbox is always open.
          </p>
          <div className="w-20 h-1 bg-slate-900 dark:bg-white rounded-full mx-auto" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto"
        >
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center justify-between p-6 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm transition-all duration-300 cursor-none ${method.color}`}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-black/50 border border-slate-100 dark:border-white/5 group-hover:scale-110 transition-transform duration-300">
                  {method.icon}
                </div>
                <div className="text-left">
                  <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                    {method.title}
                  </h3>
                  <p className="text-slate-900 dark:text-white font-medium">
                    {method.value}
                  </p>
                </div>
              </div>
              <ArrowRight size={20} className="text-slate-400 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </a>
          ))}
        </motion.div>

        {/* Footer text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-32 text-sm text-slate-500 dark:text-slate-400"
        >
          <p>© {new Date().getFullYear()} Designed & Built by You.</p>
        </motion.div>

      </div>
    </section>
  );
}