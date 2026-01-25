import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
}

export const Section: React.FC<SectionProps> = ({ 
  children, 
  id, 
  className = "", 
  containerClassName = "" 
}) => {
  return (
    <section id={id} className={`w-full py-24 md:py-32 px-6 ${className}`}>
      <div className={`max-w-5xl mx-auto ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
};

export const SectionTitle: React.FC<{ children: React.ReactNode; subtitle?: string; align?: 'left' | 'center' }> = ({ 
  children, 
  subtitle,
  align = 'center' 
}) => {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';
  
  return (
    <div className={`mb-16 ${alignClass}`}>
      <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-gray-900 dark:text-white mb-6 leading-tight">
        {children}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};