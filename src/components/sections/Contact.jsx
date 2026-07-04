import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, MessageCircle, ArrowRight, Check } from 'lucide-react';

export default function Contact() {
  const contactMethods = [
    {
      title: 'Email',
      value: 'gurveerpartapsingh7595@gmail.com',
      link: 'mailto:gurveerpartapsingh7595@gmail.com', 
      icon: <Mail size={24} className="text-blue-500 dark:text-blue-400" />,
      color: 'hover:border-blue-500/50 hover:bg-blue-50 dark:hover:bg-blue-500/10'
    },
    {
      title: 'WhatsApp',
      value: 'Chat with me',
      link: 'https://wa.me/918872284585',
      icon: <MessageCircle size={24} className="text-green-500 dark:text-green-400" />,
      color: 'hover:border-green-500/50 hover:bg-green-50 dark:hover:bg-green-500/10'
    }
  ];
  
  const [copied, setCopied] = useState(false);

  const handleCopy = (e, emailAddress) => {
    e.preventDefault(); 
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    
    setTimeout(() => {
      setCopied(false);
    }, 2500);
  };

  // Notice there is NO closing bracket right here! The function continues directly into the return statement.

  return (
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
          {contactMethods.map((method, index) => {
            const isEmail = method.link.startsWith('mailto:');

            return (
              <a
                key={index}
                href={isEmail ? "#" : method.link}
                onClick={(e) => {
                  if (isEmail) handleCopy(e, method.value);
                }}
                target={isEmail ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className={`group flex items-center justify-between p-6 rounded-2xl border shadow-sm transition-all duration-300 cursor-none ${
                  isEmail && copied 
                    ? 'bg-green-50 dark:bg-green-900/20 border-green-500/50 dark:border-green-500/50' 
                    : `bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 ${method.color}`
                }`}
              >
                <div className="flex items-center gap-4 w-full min-w-0">
                  <div className={`shrink-0 p-3 rounded-xl border group-hover:scale-110 transition-all duration-300 ${
                    isEmail && copied 
                      ? 'bg-green-100 dark:bg-green-500/20 border-green-200 dark:border-green-500/30 text-green-600 dark:text-green-400' 
                      : 'bg-slate-50 dark:bg-black/50 border-slate-100 dark:border-white/5'
                  }`}>
                    {isEmail && copied ? <Check size={24} /> : method.icon}
                  </div>
                  
                  <div className="text-left min-w-0 pr-2">
                    <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                      {method.title}
                    </h3>
                    <p className={`font-medium break-all transition-colors duration-300 ${
                      isEmail && copied ? 'text-green-600 dark:text-green-400' : 'text-slate-900 dark:text-white'
                    }`}>
                      {isEmail && copied ? "Copied to clipboard!" : method.value}
                    </p>
                  </div>
                </div>

                {isEmail ? (
                  copied ? (
                    <Check size={20} className="shrink-0 text-green-500" />
                  ) : (
                    <span className="shrink-0 text-xs font-bold text-slate-400 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 uppercase tracking-wider">
                      Copy
                    </span>
                  )
                ) : (
                  <ArrowRight size={20} className="shrink-0 text-slate-400 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                )}
              </a>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}